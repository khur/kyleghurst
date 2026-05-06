export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[180px_1fr] md:gap-16">
          <div>
            <p className="font-mono text-xs text-[var(--color-fg-muted)]">
              /about
            </p>
            <dl className="mt-6 space-y-3 font-mono text-xs text-[var(--color-fg-muted)]">
              <div>
                <dt className="text-[var(--color-fg-muted)]">location</dt>
                <dd className="text-[var(--color-fg-dim)]">sandy, ut</dd>
              </div>
              <div>
                <dt className="text-[var(--color-fg-muted)]">languages</dt>
                <dd className="text-[var(--color-fg-dim)]">english · svenska</dd>
              </div>
              <div>
                <dt className="text-[var(--color-fg-muted)]">focus</dt>
                <dd className="text-[var(--color-fg-dim)]">ai-native fullstack</dd>
              </div>
            </dl>
          </div>

          <div className="max-w-2xl">
            <p className="text-xl leading-relaxed text-[var(--color-fg)] md:text-2xl">
              I architect full-stack products end-to-end and pair each problem
              with the best available AI solution to deliver at small-team
              velocity. I've led distributed teams, owned post-acquisition
              platform integrations, and mentored engineers through real
              product launches across consumer mobile, fintech, and crypto
              analytics.
            </p>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-fg-dim)]">
              Before software, I pitched professionally in the Los Angeles
              Angels organization. The discipline, preparation, and resilience
              built across four seasons of pro sport carry directly into how I
              approach engineering work today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
