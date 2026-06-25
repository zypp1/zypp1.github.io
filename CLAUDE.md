# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Is

A personal resume/portfolio website for a graduate student's autumn campus recruitment (秋招). The candidate targets **engineering** (not research/paper) roles in **autonomous driving, drones, planning & control, robotics systems, and robot VLA / motion-control engineering**. The site is a dynamic, smooth-scrolling, "premium tech-report" style single page — its polish, motion design, and deployability indirectly demonstrate AI-assisted development and rapid prototyping ability, so quality of execution matters as much as content.

The design source of truth lives in `docs/`:
- `docs/design-prompt.md` — the original brief.
- `docs/design-document.md` — full spec: purpose, audience, page architecture, visual/copy direction, deployment plan.

Read both before making structural or stylistic changes. Note: those docs still describe a "pure static, no build" approach — the project has since moved to a Vite + React + GSAP + Lenis dynamic stack (see below). The docs' design guardrails and copy direction still apply; the technical-constraint section is superseded by this file.

## Tech Stack

- **Vite + React 19 + TypeScript** — app shell, component-based content.
- **GSAP + ScrollTrigger** — scroll-driven animation, local pin, masked text reveal, parallax, timeline draw.
- **Lenis** — smooth inertial scrolling, wired into ScrollTrigger so all animations track Lenis scroll progress.
- **CSS Modules** — co-located per-component styling; design tokens live in `src/styles/globals.css`.
- Pure frontend, no backend. `vite build` outputs static files to `dist/` for GitHub Pages.

All animation is **progressive enhancement**: content is visible without JS; `prefers-reduced-motion` disables Lenis and all GSAP animations (each animation helper guards on it).

## Build & Dev

```bash
npm install
npm run dev       # local dev, http://localhost:5173
npm run build     # tsc -b type-check + vite build -> dist/
npm run preview   # preview the production build
npm run deploy    # build + push dist/ to gh-pages branch (manual deploy)
```

No test framework, no linter configured.

## Deploy to GitHub Pages

- **Recommended:** the GitHub Actions workflow at `.github/workflows/deploy.yml` builds and publishes on push to `main`. In the repo Settings → Pages, set Source to "GitHub Actions".
- **Manual:** `npm run deploy` (uses `gh-pages`).
- `vite.config.ts` `base` must match the deployment target:
  - User site `<username>.github.io` → `base: '/'` (current default), URL `https://<username>.github.io/`.
  - Project site `<username>.github.io/<repo>` → set `base: '/<repo>/'`, URL `https://<username>.github.io/<repo>/`.
- `npm ci` in CI requires `package-lock.json` (committed).

⚠️ GitHub Pages is public. Never add phone numbers, addresses, ID numbers, internal school materials, or unpublished project source. Real project evidence (code repos, screenshots, videos, run logs) is filled in later — keep placeholders until then.

## Architecture

Single page composed in `src/App.tsx`: `<SmoothScroll>` wraps everything; a fixed `Nav` + `main` (7 sections) + `Footer`. A `.bg-fx` layer adds grain + warm glow.

### Content is data-driven

**All copy lives in `src/data/content.ts`** as a typed `SiteContent` object. To add real projects, links, resume PDF, name, email, the user mostly edits this one file — animation components don't need to change. Placeholder convention: link `href: null` renders as a disabled placeholder (never a dead link). `// TODO:` comments mark fields to replace.

### Section order (matches `docs/design-document.md`)

Hero → Profile → Capability Map → Selected Work → Toolchain → Experience Timeline → Contact. Each section has `id` for anchor nav.

### Animation infrastructure

- **`src/components/SmoothScroll.tsx`** — creates the Lenis instance, connects `lenis.on('scroll', ScrollTrigger.update)`, drives `lenis.raf` via `gsap.ticker`. Skipped under reduced-motion. The instance is held in `src/lib/lenis.ts` (singleton) so `Nav`/CTAs can call `scrollTo(target, offset)` for smooth anchor jumps. Also refreshes ScrollTrigger on mount, `load`, and `document.fonts.ready` — web fonts (`display=swap`) reflow after `load` and would otherwise desync the horizontal pin / scrubbed animations.
- **`src/components/ui/Reveal.tsx`** — reusable entrance: fades/slides an element (or its direct children, with `stagger`) up on scroll-into-view. Used everywhere.
- **`src/components/ui/MaskText.tsx`** — masked word-by-word reveal for section titles (overflow-hidden wrappers, words push up from below).
- **`src/lib/gsap.ts`** — the ONLY place GSAP plugins are registered (`gsap.registerPlugin(ScrollTrigger, useGSAP)`); imported once for side effects at the top of `main.tsx`. Do NOT re-register in components — they import `gsap`/`useGSAP` from their packages and rely on this global registration. **`src/lib/motion.ts`** exports `prefersReducedMotion()` — the single source for the reduced-motion check; do not inline `window.matchMedia('(prefers-reduced-motion: reduce)')` in components.

### Section-specific animation patterns (the bespoke stuff)

- **Hero** — a GSAP timeline on mount (eyebrow → name mask-reveal → positioning → desc → CTAs), plus a scrubbed parallax that lifts+fades the whole block as you scroll. The name uses **inline** mask markup (not `<MaskText>`) to avoid a competing scrollTrigger on the same `[data-word]` elements.
- **CapabilityMap** — desktop **horizontal pin scroll**: `gsap.matchMedia('(min-width: 760px)')` pins the track container and translates it horizontally by `scrollWidth - innerWidth` as the user scrolls vertically. Mobile falls back to a vertical stack (no pin). `invalidateOnRefresh` + function-based `end` handle resize. **The 760px threshold must stay in sync across CSS (`CapabilityMap.module.css`), the GSAP `matchMedia`, and the rest of the chrome (Nav/Hero/Toolchain all switch at 760px)** — a mismatch causes a layout-mode pop.
- **SelectedWork** — featured project with a parallax media block (`[data-parallax]`, scrubbed `yPercent`) inside an overflow-hidden frame; secondary projects in a reveal-staggered grid.
- **Experience** — vertical timeline; the fill line (`[data-line]`) draws via scrubbed `scaleY` from 0→1 as the section scrolls through.
- **Nav** — fixed, transparent at top → blur+bg on scroll; a top scroll-progress bar (scrubbed `scaleX`); IntersectionObserver sets the active link; mobile hamburger toggles a panel.

### When adding a new section

Create `src/components/sections/<Name>.tsx` + co-located `<Name>.module.css`, add an entry to `content.ts`, add it to `App.tsx` and to `content.nav` if it needs a nav link. Use `<Reveal>` for entrances; reach for ScrollTrigger only for effects Reveal can't do.

### Performance & assets

- Vendor code is split into cacheable chunks via `manualChunks` in `vite.config.ts` (`gsap`, `lenis`, `react`). Content edits re-fetch only the small app chunk (~9KB gzip); vendor chunks stay cached across deploys. gsap is kept eager (Hero needs it at first paint) — do not lazy-load gsap itself.
- `public/` is copied verbatim to the deploy root. `public/og-cover.png` (1200×630) backs the `og:image`/`twitter:image` meta; replace with a real branded cover (with the candidate's name) before sharing. `index.html` OG/canonical URLs contain a `<username>` placeholder to swap.
- Placeholder links (`href: null` in `content.ts`) render as disabled `<span>`s with `aria-disabled` + a visually-hidden "(待补充)" marker — never ship dead links. The disabled style must keep WCAG AA contrast (use `--text-dim`, not `--text-faint`).

## Design Guardrails (enforce these)

The avoid-lists matter as much as the do-lists.

**Visual:** dark luxury, restrained, readability-first. Near-black warm background, champagne-gold (`--accent`) as the only accent, hairline borders, generous spacing, Fraunces serif display + Inter body + JetBrains Mono for labels/eyebrows. Subtle grain + warm glow via `.bg-fx`.
- **Avoid:** purple/blue-purple gradients, marketing-style hero, excessive rounding and heavy shadows, decorative card stacking, abstract illustrations unrelated to the real direction, academic/paper-homepage styling.

**Copy:** credible engineering capability, no fabricated strong results.
- **Use phrasing like:** "工程开发候选人", "系统复现与二次改造", "仿真验证", "工具链整合", "从需求拆解到原型实现与部署展示的闭环", "可运行、可展示、可复现", "AI-assisted development workflow".
- **Avoid:** "精通全部自动驾驶技术栈", "行业级项目成果", "顶尖机器人算法专家", "颠覆式 AI 开发", "只靠 vibe coding 完成复杂系统".
- Do **not** make "vibe coding" a headline — demonstrate AI-assisted development through the site's completion and polish, not by claiming it.

## Language

Design docs and copy are bilingual (Chinese primary, English technical terms). Match the existing tone and terminology — don't translate established phrasing away from the docs.
