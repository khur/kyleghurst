import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="work" className="py-20 md:py-28 hairline-t">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 flex items-baseline justify-between">
          <p className="font-mono text-xs text-[var(--color-fg-muted)]">
            /work
          </p>
          <p className="font-mono text-xs text-[var(--color-fg-muted)]">
            {experience.length.toString().padStart(2, "0")} entries
          </p>
        </div>

        <ol className="space-y-10">
          {experience.map((entry, idx) => (
            <li
              key={`${entry.company}-${entry.start}`}
              className={`grid gap-4 md:grid-cols-[180px_1fr] md:gap-12 ${
                idx > 0 ? "hairline-t pt-10" : ""
              }`}
            >
              <div className="font-mono text-xs leading-relaxed text-[var(--color-fg-muted)]">
                <div className="text-[var(--color-fg-dim)]">
                  {entry.start} — {entry.end}
                </div>
                {entry.location && (
                  <div className="mt-1 text-[var(--color-fg-muted)]">
                    {entry.location}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl text-[var(--color-fg)] md:text-2xl">
                  {entry.company}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-fg-dim)]">
                  {entry.role}
                </p>
                <ul className="mt-4 space-y-2">
                  {entry.bullets.map((b, bIdx) => (
                    <li
                      key={bIdx}
                      className="relative pl-5 text-sm leading-relaxed text-[var(--color-fg-dim)]"
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-2 h-px w-3 bg-[var(--color-line-strong)]"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
