export default function Hero() {
  return (
    <section id="top" className="relative pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
        <div>
          <p className="font-mono text-xs text-[var(--color-fg-muted)] mb-6">
            // hello
          </p>

          <h1 className="text-4xl leading-[1.05] tracking-tight text-[var(--color-fg)] sm:text-5xl md:text-6xl lg:text-7xl">
            Senior Software Engineer,
            <br />
            <span className="text-[var(--color-fg-dim)]">AI Engineering.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-fg-dim)] md:text-xl">
            A decade shipping production systems across consumer mobile,
            fintech, and crypto analytics. Now building AI-native products at
            small-team velocity.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-[var(--color-fg-muted)]">
            <span>sandy, ut</span>
            <span aria-hidden>·</span>
            <span>en / sv bilingual</span>
            <span aria-hidden>·</span>
            <span>10+ years</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="font-mono text-xs uppercase tracking-wider rounded-sm bg-[var(--color-accent)] px-4 py-2.5 text-[var(--color-accent-foreground)] transition-opacity hover:opacity-90"
            >
              [ see products ]
            </a>
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-wider rounded-sm hairline px-4 py-2.5 text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              [ get in touch ]
            </a>
          </div>
        </div>

        <div className="md:pb-2">
          <div className="relative inline-block">
            <img
              src="/kgh.jpeg"
              alt="Kyle Hurst"
              className="h-40 w-40 rounded-sm object-cover hairline md:h-56 md:w-56"
            />
            <div className="absolute -bottom-3 -right-3 hairline bg-[var(--color-bg)] px-2 py-1 font-mono text-[10px] text-[var(--color-fg-muted)]">
              kgh.jpeg
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-5 sm:px-8 md:mt-24">
        <div className="hairline-t pt-10">
          <p className="font-mono text-xs text-[var(--color-fg-muted)] mb-4">
            // recent
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
            <p className="font-mono text-3xl tracking-tight text-[var(--color-accent)] sm:text-4xl md:text-5xl">
              8,500&nbsp;<span className="text-[var(--color-fg-muted)]">→</span>&nbsp;22,600
            </p>
            <p className="text-base text-[var(--color-fg-dim)] sm:max-w-md">
              Places harvested in Pickleball Plus's global court database — at
              zero API cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
