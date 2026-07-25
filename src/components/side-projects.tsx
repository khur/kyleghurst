import { sideProjects } from "@/data/side-projects";

export default function SideProjects() {
  return (
    <section className="py-16 md:py-20 hairline-t">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-6 flex items-baseline justify-between">
          <p className="font-mono text-xs text-[var(--color-fg-muted)]">
            // side projects
          </p>
          <p className="hidden font-mono text-xs text-[var(--color-fg-muted)] sm:block">
            small · live · fun
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {sideProjects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded-sm hairline px-4 py-4 transition-colors hover:border-[var(--color-accent)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-fg)]">
                  {p.name}
                </span>
                <span
                  aria-hidden
                  className="font-mono text-[10px] text-[var(--color-fg-muted)] transition-colors group-hover:text-[var(--color-accent)]"
                >
                  ↗
                </span>
              </div>
              <span className="text-xs leading-relaxed text-[var(--color-fg-muted)]">
                {p.tagline}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
