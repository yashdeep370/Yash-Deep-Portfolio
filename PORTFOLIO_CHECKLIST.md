# Portfolio revival checklist

**Owner:** Yash Deep  
**Last reviewed:** June 2026  
**Live site:** Single-page `index.html` (~1,069 lines) + `script.js` (fluid background)

Use this list in order: finish **content and features** first, then do **Option A** (split into partials) so you do not refactor twice.

**Legend:** `[x]` done · `[~]` started / placeholder · `[ ]` not started

---

## Current snapshot (what exists today)

| Area | Status |
|------|--------|
| Hero + tagline | [x] Live |
| Nav (Skills, Experience, Projects, Contact) | [x] Live |
| `#solutions` (3 animated pillars) | [x] Live — not in nav |
| `#skills` (3 cards + flashcard modals) | [x] Live |
| `#tech-stack` (logo marquee) | [x] Live — not in nav |
| `#experience` | [~] Placeholder copy only |
| `#projects` (4 cards) | [~] All “Coming Soon” + stock Unsplash images |
| `#connect` (social links) | [x] Live — no email / form |
| Fluid canvas background | [x] `script.js` (dimmed under theme) |
| Theme layer (HSL tokens, HLS hero video, loading screen) | [x] `assets/css/theme.css` + `assets/js/*` |
| Flashcard detail modals | [x] Full Stack, Data Science, AI/ML |
| SEO / Open Graph / favicon | [ ] Missing |
| Contact email / resume | [ ] Missing |
| README | [~] Merge conflict in repo |
| `PROJECT_PLAN.md` | [ ] Wrong project (sentiment analyzer — move or rename) |

---

## Phase 0 — Repo cleanup (30 min)

Quick wins so the repo matches the portfolio again.

- [ ] Fix `README.md` merge conflict (`<<<<<<<` / `=======` / `>>>>>>>`)
- [ ] Move or rename `PROJECT_PLAN.md` → e.g. `../sentiment-analyzer/` or `docs/SENTIMENT_ANALYZER_PLAN.md` (not portfolio)
- [ ] Replace `project_structure.txt` with portfolio folder plan (after Phase 6) or delete if unused
- [ ] Decide fate of `old clips/` (`first.html`, `index2.html`) — archive, delete, or mine for content
- [ ] Add `.gitignore` if missing (`.DS_Store`, editor folders, etc.)

---

## Phase 1 — Content & copy (do before redesign)

### Hero (`<main>`)

- [ ] Final headline (keep “Creative wizard” or align with job search brand)
- [ ] Subtitle: 1–2 lines — role, stack, what you’re looking for
- [ ] Optional: CTA buttons — `View projects` · `Download resume` · `Email me`
- [ ] Optional: profile photo or logo mark in nav (replace shield icon)
- [ ] Optional: availability badge (“Open to work” / “Internship 2026”)

### About / intro (new section or expand hero)

- [ ] Short “who I am” paragraph (3–4 sentences)
- [ ] Location / timezone (if you want it public)
- [ ] Education line (degree, college, year) — if relevant

### Solutions (`#solutions`)

- [ ] Confirm three pillars copy: Strategic Thinking, … (audit all three labels + descriptions)
- [ ] Tie pillars to real services (e.g. web apps, data/ML, branding) — avoid generic filler
- [ ] Add to nav OR merge into About — currently easy to miss

### Skills (`#skills`)

- [x] Three skill cards with flashcards
- [ ] Review flashcard text for accuracy (projects, tools, dates)
- [ ] Add certifications, coursework, or “currently learning”
- [ ] Optional: 4th card (e.g. DevOps, mobile, cybersecurity)
- [ ] Keyboard focus / `aria` on cards (accessibility)

### Tech stack (`#tech-stack`)

- [x] Marquee / grid of logos
- [ ] List only tools you actually use (remove decorative logos)
- [ ] Group by category: Languages · Frameworks · Data/ML · Tools
- [ ] Link icons to docs or your repos where it makes sense
- [ ] Dedupe repeated SVG blocks in HTML (maintenance)

### Experience (`#experience`) — **high priority**

- [ ] Replace “timeline dropping soon” with real entries
- [ ] For each role: title, company, dates, location/remote, 2–4 bullet impacts
- [ ] Internships, freelance, hackathons, open source, leadership roles
- [ ] Optional: vertical timeline UI component
- [ ] Optional: “Download resume” uses same data

### Projects (`#projects`) — **high priority**

- [ ] Replace placeholder titles (Digital Experience, Modern Commerce, etc.) with **your** projects
- [ ] Per project: real screenshot (not Unsplash), title, 1-line pitch, tags, links
  - [ ] Live demo URL
  - [ ] GitHub repo
  - [ ] Case study / Medium post (optional)
- [ ] Remove “Coming Soon” + `cursor-not-allowed` when ready
- [ ] Prioritize 1 featured project (large card) — your best work
- [ ] Add projects you mentioned elsewhere (e.g. Multi-Label Sentiment Analyzer if portfolio-worthy)
- [ ] Optional: filter tabs (All · Web · ML · Design)
- [ ] Optional: project detail modal or separate case-study page

**Project ideas to slot in (edit/delete):**

- [ ] Project 1: _________________________________
- [ ] Project 2: _________________________________
- [ ] Project 3: _________________________________
- [ ] Project 4: _________________________________
- [ ] Project 5+: ________________________________

### Connect (`#connect`)

- [x] GitHub, LinkedIn, Medium, Instagram
- [ ] Add email (`mailto:`) or contact form (Formspree, Netlify Forms, etc.)
- [ ] Add resume PDF link
- [ ] Optional: Calendly / “Book a call”
- [ ] Optional: remove or keep Instagram for professional tone

### Footer

- [ ] Update year (2025 → 2026 when appropriate)
- [ ] Optional: back-to-top, privacy note, sitemap links

---

## Phase 2 — New sections (add only what you need)

Pick what fits your goals; skip the rest.

- [ ] **Testimonials / recommendations** (quotes from mentors, teammates)
- [ ] **Blog / writing** — pull latest from Medium API or manual cards
- [ ] **Certifications** (AWS, Google, Coursera, etc.)
- [ ] **Achievements** (hackathons, competitions, scholarships)
- [ ] **Speaking / volunteering**
- [ ] **Services / “Work with me”** (freelance packages)
- [ ] **FAQ** for recruiters
- [ ] **Dark/light theme toggle** (`script.js` references `.theme-button` but UI may be incomplete — verify)

---

## Phase 2b — Reference theme (Michael Smith prompt) — partial

Integrated into static HTML without rebuilding React:

- [x] Design tokens (HSL), Inter + Instrument Serif, accent gradient
- [x] Loading screen (000→100, word cycle)
- [x] Hero HLS video background + fade into `bg`
- [x] GSAP hero entrance + scroll indicator
- [ ] Full React + Vite + Framer Motion port (optional later)
- [ ] Bento “Selected Works”, Journal, Parallax Explorations, Stats, footer marquee
- [ ] Centered pill nav + role rotator (skipped to keep current layout)

---

## Phase 3 — UX, design & polish

- [ ] Consistent tone: professional vs creative — align hero, solutions, and project copy
- [ ] Mobile menu: close on link click; trap focus when open
- [ ] Active nav state while scrolling (highlight current section)
- [ ] Smooth scroll offset for fixed nav (sections hidden under header)
- [ ] Add `#solutions` and `#tech-stack` to nav **or** drop unused sections
- [ ] Replace stock images with your branding colors / screenshots
- [ ] Loading state for images; `alt` text on all images
- [ ] Reduce motion: respect `prefers-reduced-motion` (fluid canvas + animations)
- [ ] Test on phone, tablet, 1080p, ultrawide
- [ ] Cross-browser: Chrome, Firefox, Safari, Edge

---

## Phase 4 — Technical quality

### Performance

- [ ] Self-host or subset fonts (optional — currently Google Fonts CDN)
- [ ] Lazy-load project images below the fold
- [ ] Pause or disable fluid sim on mobile / low power (battery + FPS)
- [ ] Audit Tailwind CDN vs built CSS for production (smaller payload)

### SEO & sharing

- [ ] `<meta name="description">`
- [ ] Open Graph + Twitter card tags
- [ ] `favicon.ico` + `apple-touch-icon`
- [ ] Semantic HTML audit (`<main>`, one `<h1>`, heading order)
- [ ] `sitemap.xml` + `robots.txt` if on custom domain
- [ ] Canonical URL when deployed

### Accessibility

- [ ] Skip-to-content link
- [ ] Flashcard modal: focus trap, `aria-modal`, return focus on close
- [ ] Color contrast on muted text (`text-textMuted`)
- [ ] All interactive elements keyboard-accessible

### Security & hygiene

- [ ] `rel="noopener noreferrer"` on external links (partially done)
- [ ] No API keys or private emails in client-side code unless intentional

---

## Phase 5 — Assets & brand kit

Create a folder before splitting files:

```
assets/
  images/
    profile.jpg
    projects/
      project-name-cover.png
  docs/
    Yash_Deep_Resume.pdf
  icons/
    favicon.svg
```

- [ ] Profile photo (consistent with LinkedIn)
- [ ] Project thumbnails (16:9 and square crops)
- [ ] Logo / monogram for nav
- [ ] Resume PDF (keep in sync with Experience section)
- [ ] Optional: OG image `og-image.png` (1200×630)

---

## Phase 6 — Option A: split `index.html` (after content is stable)

**Do this last** so you are not moving placeholders into 7 files.

### 6.1 Choose tooling

- [ ] Pick one: **Eleventy** (simple static includes) · **Vite** · **small Node concat script**
- [ ] `npm run build` → outputs single `index.html` for GitHub Pages

### 6.2 Target structure

```
portfolio/
├── index.html              # shell only
├── assets/
│   ├── css/main.css
│   ├── js/nav.js
│   ├── js/flashcards.js
│   └── js/script.js        # fluid sim (move from root if desired)
├── partials/
│   ├── nav.html
│   ├── footer.html
│   └── flashcard-modal.html
└── sections/
    ├── hero.html
    ├── solutions.html
    ├── skills.html
    ├── tech-stack.html
    ├── experience.html
    ├── projects.html
    └── connect.html
```

### 6.3 Refactor tasks

- [/] Create `assets/css/main.css` with extracted styles
- [ ] Create `assets/js/nav.js` with mobile menu logic
- [ ] Extract flashcard script → `assets/js/flashcards.js`
- [ ] Split each `<section>` + hero into `sections/*.html`
- [ ] Shared partials for nav, footer, modal
- [ ] Verify local `npm run dev` and production build match current behavior
- [ ] Update README with build/deploy instructions

---

## Phase 7 — Deploy & maintain

- [ ] Deploy target: GitHub Pages · Vercel · Netlify (choose one)
- [ ] Custom domain + HTTPS
- [ ] Google Search Console (optional)
- [ ] Analytics (Plausible / GA — optional)
- [ ] Link portfolio URL on GitHub, LinkedIn, resume
- [ ] Calendar reminder: review projects every 3–6 months

---

## Suggested work order (minimal path to “presentable”)

1. **Phase 0** — clean repo (1 session)  
2. **Experience** — real timeline (unblocks resume consistency)  
3. **Projects** — 2–4 real projects with links (biggest visual impact)  
4. **Hero + Connect** — email + resume + CTAs  
5. **Phase 3** — nav polish + mobile fixes  
6. **Phase 4** — SEO meta + favicon  
7. **Phase 6** — Option A split when you are not adding big sections weekly  

---

## Parking lot (your notes)

Add ideas here as they come up:

- 
- 
- 

---

## Progress log

| Date | Done |
|------|------|
| | |
| | |
