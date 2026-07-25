# Motion & Nav Polish — Design Note

**Date:** 2026-07-25
**Goal:** Small refresh that completes two items specified in the 2026-05-05 portfolio
refresh spec but never implemented. No new visual direction — the engineer's-notebook /
dark / amber system stays exactly as is.

## Scope

1. **Fade-in on section enter** (spec: *"Motion: … subtle fade-in on section enter"*)
   - New `src/components/reveal.tsx` — a thin wrapper using `IntersectionObserver`.
     Adds `is-visible` once ~10% of the section enters the viewport, then disconnects
     (one-shot; no re-animation on scroll-up).
   - CSS in `index.css`: opacity 0 → 1 with a ~10px upward settle, 500ms ease-out.
     Entire effect wrapped in `@media (prefers-reduced-motion: no-preference)` so
     reduced-motion users get static content with zero flash.
   - Applied in `home.tsx` around each main section. Hero's observer fires on mount,
     giving a single quiet load-in moment.

2. **Active nav state in amber** (spec: *"Accent color … Used sparingly — hover states,
   headline metric, active nav, CTA"*)
   - Scroll-spy in `header.tsx`: one `IntersectionObserver` with a narrow root-margin
     band around the viewport's middle picks the current section; the matching nav
     link renders in `--color-accent`.
   - At the very top (hero) no section is active — no highlight, matching the spec's
     "sparingly" rule.

## Out of scope

- Content/copy changes, new sections, animation libraries, scroll-driven effects,
  light mode. CSS transitions only, per the original spec.

## Acceptance

- Sections fade in once as they enter; no effect under reduced motion.
- Nav link for the section in view renders amber; hero shows none.
- `pnpm verify` and `pnpm build` pass; no console errors in dev.
