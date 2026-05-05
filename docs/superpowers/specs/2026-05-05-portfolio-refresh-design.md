# Portfolio Refresh — Design Spec

**Date:** 2026-05-05
**Goal:** Update kyleghurst personal site to accurately represent Kyle's current positioning (Senior Software Engineer, AI Engineering at MMERCH; decade IC; indie product builder; former pro athlete) and elevate the visual design beyond the default shadcn aesthetic.

## Audience & Purpose

Balanced for two audiences (option **C** from brainstorm):
- **Recruiters / hiring managers** — credibility signals, current title, experience timeline, headline metrics.
- **Product visitors / collaborators** — the four current independent products as a featured section.

Older crypto/joke projects (Punks Provenance, PunkVerse, How to Boomer) retained as a smaller "earlier projects" section.

## Visual Direction

- **Tone:** Distinctive / personality-led (option **B**) — *"engineer's notebook" / dev-tool aesthetic* (option **A**).
- **Mode:** Dark by default. Light mode out of scope for v1.
- **Accent color:** Amber (`#f59e0b`). Used sparingly — hover states, headline metric, active nav, CTA.
- **Type pairing (target):** PP Neue Montreal (sans) + PP Supply Mono (mono). *Implementation note: PP fonts are form-gated; v1 ships with Fontshare Switzer + JetBrains Mono via CDN as the closest accessible substitutes, with self-host swap-in points reserved.*
- **Layout:** Single-column, ~720-768px reading width for prose sections; products section breaks wider (~1100px) for the card grid.
- **Component style:** Hairline borders, no shadows, hover lifts border to amber. Tags as monospace pills with hairline outline. No emoji icons. Numbers rendered in mono.
- **Motion:** Minimal. Smooth scroll, subtle fade-in on section enter, hover transitions only.

## Information Architecture

```
1. Header                — mono wordmark, mono nav, [resume] → LinkedIn
2. Hero                  — title, one-line positioning, headline metric, two CTAs
3. About                 — short paragraph: senior IC + AI-native + indie builder
                            + closing line on baseball discipline framing
4. Experience (/work)    — vertical timeline, MMERCH → Angels (timeline form)
5. Products (/products)  — 4 current products, 2x2 grid, metrics + tech tags
6. Earlier Projects      — 3 older (Punks, PunkVerse, How to Boomer), compact row
7. Skills (/stack)       — grouped tags by category
8. Contact (/contact)    — email + LinkedIn + GitHub direct links (no form)
9. Footer                — mono one-liner
```

**Key decisions:**
- Existing crypto projects retained (per user feedback) but moved to a smaller "earlier projects" section under the products grid.
- Contact form removed entirely. Replaced with three direct links (email + LinkedIn + GitHub).
- Angels (Pro Baseball, 2008–2012) sits in the experience timeline as a regular entry — not separated, not given a dedicated section. One sentence body using the resume's "discipline / preparation / resilience" framing.

## Section Layouts (summary)

**Hero**
- Section path label: `// hello` (mono, dim)
- Headline: `Senior Software Engineer, AI Engineering` (sans, ~64-80px)
- Subhead: *"A decade shipping production systems. Now building AI-native products at small-team velocity."*
- Mono metadata row: `sandy, ut · en/sv bilingual · 10+ years`
- Headline metric callout: `8,500 → 22,600` (large mono, amber) + caption *"places harvested at zero API cost — Pickleball Plus"*
- CTAs: `[ see products ]` (filled amber) and `[ get in touch ]` (outline)
- Photo (`kgh.jpeg`): smaller than current, hairline border, side-aligned rather than centered top.

**Experience timeline**
- Each entry: mono date range left, company + role + 2-3 bullets right, hairline divider between.
- Entries (in order): MMERCH (current), Guru, Amberdata, Genesis Volatility (with Tech Lead detail), EDMS, FRST, Speakr, Stotz, POPRAGEOUS, Angels.

**Products (4 featured)**
- Cards: title, one-line description, mono metric row, mono tech tag row, "visit ↗" link.
- Hairline border → amber on hover.
- Pickleball Plus, Parrot Scoring, Workout Surplus, Lunchbox Hands.

**Earlier Projects (3 archived)**
- Compact row, smaller cards. Title + one line + link. No metrics, no tags.
- Punks Provenance, PunkVerse, How to Boomer.

**Skills**
- Grouped, mono group labels (`languages`, `frontend`, `backend & apis`, `data`, `infrastructure`, `ai & automation`, `practice`).
- Each group: mono tag pills with hairline outline, no fill, no icons.

**Contact**
- Three large mono links: `email →`, `linkedin →`, `github →`.
- GitHub: `github.com/khur` (confirmed).

## Technical Scope

**Stack — keep current**
- Vite + React 19 + TypeScript + Tailwind v4 + shadcn/ui (Button, Card retained).

**New dependencies**
- Fonts: Fontshare CDN (Switzer) + Google Fonts (JetBrains Mono) for v1; self-hosted PP fonts as future swap.
- No animation library; CSS transitions only.
- No new icon library; lucide-react already installed, used minimally.

**Files modified / created**
- `src/index.css` — new dark theme tokens, font registration, font stacks.
- `src/components/header.tsx` — restyle (mono wordmark + nav).
- `src/components/hero.tsx` — full rewrite with new copy + headline metric.
- `src/components/about.tsx` — **new**.
- `src/components/experience.tsx` — **new**.
- `src/components/products.tsx` — **new** (replaces current `projects.tsx` for featured 4).
- `src/components/earlier-projects.tsx` — **new** (compact archive row).
- `src/components/skills.tsx` — restructure to grouped tags.
- `src/components/contact.tsx` — **new** (direct links, no form).
- `src/components/footer.tsx` — restyle.
- `src/components/home.tsx` — orchestrate new section order.
- `src/data/{experience,products,earlier-projects,skills}.ts` — **new** typed content modules.
- `index.html` — add meta description + font preconnects.

**Files deleted**
- `src/components/contact-form.tsx`
- `src/components/projects.tsx` (replaced by products + earlier-projects)
- `src/components/ui/input.tsx`, `src/components/ui/textarea.tsx` (unused after form removal)

## Out of Scope (YAGNI)

- Light mode toggle (dark-only v1).
- CMS, MDX, blog.
- Form backend, analytics, advanced SEO.
- Animation library or scroll-driven animation.
- Mobile menu drawer (nav is short — hide on mobile).
- Dependency upgrades unrelated to this work.

## Acceptance Criteria

- Site reflects Kyle's current title and positioning everywhere.
- All 10 experience entries from the resume present, in correct chronological order.
- All 4 current products + 3 earlier projects rendered.
- Skills grouped per resume's "Core Skills" categories.
- Contact = direct links only; no form.
- Dark mode default; amber accent; mono on metadata/numbers/labels.
- Typecheck + lint pass cleanly.
- Dev server renders without console errors; site usable on mobile (≥ 375px) and desktop.
