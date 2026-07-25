# kyleghurst.com

Personal portfolio site for Kyle Hurst — Senior Software Engineer, AI Engineering.

Live at [kyleghurst.com](https://kyleghurst.com/).

## Stack

- [Vite](https://vite.dev/) + [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (dark-only theme, amber accent)
- [shadcn/ui](https://ui.shadcn.com/) primitives (Button, Card)
- Fonts: Switzer (Fontshare) + JetBrains Mono

## Development

Requires Node ≥ 22.12 (see `.nvmrc`) and [pnpm](https://pnpm.io/). This repo is pnpm-only — `pnpm-lock.yaml` is committed; don't use npm/yarn.

```sh
pnpm install
pnpm dev        # start dev server
pnpm verify     # typecheck + lint
pnpm build      # production build to dist/
pnpm preview    # preview the production build
```

## Structure

- `src/components/` — one file per page section (hero, about, experience, products, …)
- `src/data/` — typed content modules (experience entries, products, skills)
- `docs/superpowers/specs/` — design specs; see the [portfolio refresh spec](docs/superpowers/specs/2026-05-05-portfolio-refresh-design.md) for the current visual direction
