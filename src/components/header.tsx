import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "/about" },
  { href: "#work", label: "/work" },
  { href: "#products", label: "/products" },
  { href: "#stack", label: "/stack" },
  { href: "#contact", label: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          } else if (entry.target.id === "about" && entry.boundingClientRect.top > 0) {
            // Scrolled back above the first nav section — nothing is active.
            setActive(null);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-colors ${
        scrolled || menuOpen
          ? "bg-[var(--color-bg)]/80 hairline-b"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-[var(--color-fg)] transition-colors hover:text-[var(--color-accent)]"
        >
          kyle hurst
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={`font-mono text-xs transition-colors hover:text-[var(--color-accent)] ${
                active === link.href
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-fg-dim)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/kyleghurst/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[var(--color-fg)] hairline rounded-sm px-3 py-1.5 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            [ linkedin ]
          </a>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="font-mono text-xs text-[var(--color-fg)] hairline rounded-sm px-3 py-1.5 transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] md:hidden"
          >
            {menuOpen ? "[ close ]" : "[ menu ]"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="hairline-t bg-[var(--color-bg)] md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === link.href ? "true" : undefined}
                  className={`block py-3 font-mono text-sm transition-colors hover:text-[var(--color-accent)] ${
                    active === link.href
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-fg-dim)]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
