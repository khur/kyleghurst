import { products } from "@/data/products";

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28 hairline-t">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 flex items-baseline justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-[var(--color-fg-muted)]">
              /products
            </p>
            <h2 className="mt-2 text-2xl text-[var(--color-fg)] md:text-3xl">
              Things I'm building right now.
            </h2>
          </div>
          <p className="hidden font-mono text-xs text-[var(--color-fg-muted)] sm:block">
            independent · shipping
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p) => {
            const isLink = Boolean(p.url);
            const Wrapper = isLink ? "a" : "div";
            const wrapperProps = isLink
              ? {
                  href: p.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Wrapper
                key={p.name}
                {...wrapperProps}
                className={`group relative flex flex-col gap-4 rounded-sm hairline bg-[var(--color-bg-elevated)] p-6 transition-colors md:p-8 ${
                  isLink
                    ? "hover:border-[var(--color-accent)]"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl text-[var(--color-fg)] md:text-2xl">
                    {p.name}
                  </h3>
                  {isLink && (
                    <span
                      aria-hidden
                      className="font-mono text-xs text-[var(--color-fg-muted)] transition-colors group-hover:text-[var(--color-accent)]"
                    >
                      visit ↗
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-[var(--color-fg-dim)]">
                  {p.tagline}
                </p>

                {p.metrics.length > 0 && (
                  <ul className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-[var(--color-fg-muted)]">
                    {p.metrics.map((m, i) => (
                      <li key={i} className="flex items-center gap-2">
                        {i > 0 && <span aria-hidden>·</span>}
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wider hairline rounded-sm px-2 py-1 text-[var(--color-fg-dim)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
