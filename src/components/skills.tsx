import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="stack" className="py-20 md:py-28 hairline-t">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12">
          <p className="font-mono text-xs text-[var(--color-fg-muted)]">
            /stack
          </p>
          <h2 className="mt-2 text-2xl text-[var(--color-fg)] md:text-3xl">
            What I work with.
          </h2>
        </div>

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-12"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-muted)] md:pt-1.5">
                {group.label}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-xs hairline rounded-sm px-2.5 py-1 text-[var(--color-fg-dim)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
