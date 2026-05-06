const links = [
  {
    label: "email",
    value: "kylehurst42@gmail.com",
    href: "mailto:kylehurst42@gmail.com",
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/kyleghurst",
    href: "https://www.linkedin.com/in/kyleghurst/",
  },
  {
    label: "github",
    value: "github.com/khur",
    href: "https://github.com/khur",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 hairline-t">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12">
          <p className="font-mono text-xs text-[var(--color-fg-muted)]">
            /contact
          </p>
          <h2 className="mt-2 max-w-2xl text-2xl text-[var(--color-fg)] md:text-3xl">
            Open to senior IC / staff roles, AI engineering work, and
            collaborations on indie products.
          </h2>
        </div>

        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-baseline gap-4 py-3 hairline-b transition-colors hover:border-[var(--color-accent)]"
              >
                <span className="w-24 shrink-0 font-mono text-xs uppercase tracking-wider text-[var(--color-fg-muted)] transition-colors group-hover:text-[var(--color-accent)]">
                  {link.label}
                </span>
                <span className="flex-1 text-base text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent)] md:text-lg">
                  {link.value}
                </span>
                <span
                  aria-hidden
                  className="font-mono text-xs text-[var(--color-fg-muted)] transition-colors group-hover:text-[var(--color-accent)]"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
