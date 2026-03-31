# RMeyers Consulting Website - Implementation Plan

---

## Home Page Mockup

```
┌─────────────────────────────────────────────────────────────────────┐
│  NAVBAR  [transparent on load → blurs dark on scroll]               │
│  RMeyers // Consulting          Home  Services  Process  About  [Let's Build ▶] │
└─────────────────────────────────────────────────────────────────────┘

╔═════════════════════════════════════════════════════════════════════╗
║  HERO  (full viewport, particle network drifting behind)            ║
║  ·  ·   ·    ·   ·  ·   ·    ·   ·  ·   ·    ·   ·  ·   ·    ·   ║
║  ·    ·   ·   ·    ·   ·   ·    ·   ·   ·    ·   ·   ·    ·       ║
║                                                                     ║
║  LEFT                          RIGHT                                ║
║  ────────────────────          ┌─ ~/rmeyers-consulting ─●─●─●──┐   ║
║                                │ $ describe problem             │   ║
║  // Software That Fits         │ > "We're drowning in manual    │   ║
║                                │   data entry. Nothing talks    │   ║
║  We Build Custom               │   to anything else."           │   ║
║  Software That Works           │                                │   ║
║  Like You Think.               │ $ rmeyers build --solution     │   ║
║                                │ > ✓ Analyzing workflows...     │   ║
║  [ghost text subheadline]      │ > ✓ Connecting 3 systems...    │   ║
║  We turn operational problems  │ > ✓ 12hrs/week → 45min/week   │   ║
║  into working software,        │                                │   ║
║  fast.                         │ [blinking cursor]_             │   ║
║                                └────────────────────────────────┘   ║
║  [▶ Start a Project]                                                 ║
║  [  See How We Work  ]         (terminal slightly 3D-tilted)        ║
║                                                                     ║
║  ↓ scroll to explore                                                ║
║  · ·  ·  ·   ·    ·   ·  ·   ·    ·   ·  ·   ·    ·   ·  ·   ·  ║
╚═════════════════════════════════════════════════════════════════════╝

╔═════════════════════════════════════════════════════════════════════╗
║  SERVICES OVERVIEW  (bg: #0a0f1e — slightly lighter)                ║
║                                                                     ║
║  // WHAT WE BUILD                                                   ║
║  Tools That Actually Fit Your Workflow                              ║
║                                                                     ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐               ║
║  │ ⬡ Web Apps   │ │ ⬡ Internal   │ │ ⬡ Databases  │               ║
║  │              │ │   Tools      │ │   & Forms    │               ║
║  │ Custom-built │ │              │ │              │               ║
║  │ web apps and │ │ Dashboards,  │ │ Supabase,    │               ║
║  │ portals for  │ │ admin panels │ │ PostgreSQL,  │               ║
║  │ your team    │ │ & reports    │ │ data schemas │               ║
║  │              │ │              │ │              │               ║
║  │ Learn more → │ │ Learn more → │ │ Learn more → │               ║
║  └──────────────┘ └──────────────┘ └──────────────┘               ║
║                                                                     ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐               ║
║  │ ⬡ Automation │ │ ⬡ Cloud &    │ │ ⬡ System     │               ║
║  │              │ │   Hosting    │ │   Integrations│              ║
║  │   [on hover: code snippet appears]                              ║
║  │  const on =  │ │              │ │              │               ║
║  │  trigger(    │ │              │ │              │               ║
║  │  'deal.closed│ │              │ │              │               ║
║  │  ,async()=> )│ │              │ │              │               ║
║  └──────────────┘ └──────────────┘ └──────────────┘               ║
║                                                                     ║
║                        View All Services →                          ║
╚═════════════════════════════════════════════════════════════════════╝

╔═════════════════════════════════════════════════════════════════════╗
║  PROCESS PREVIEW  (bg: #050810 — back to page dark)                 ║
║                                                                     ║
║  // HOW WE WORK                                                     ║
║  From Idea to Running Software                                      ║
║                                                                     ║
║   ┌───────┐  ~~>~~  ┌───────┐  ~~>~~  ┌───────┐  ~~>~~  ┌───────┐ ║
║   │  01   │         │  02   │         │  03   │         │  04   │ ║
║   │Discover│         │Architect│        │ Build │         │Integrate║
║   │       │ ─────── │       │ ─────── │       │ ─────── │       │ ║
║   └───────┘ ←flow→  └───────┘ ←flow→  └───────┘ ←flow→  └───────┘ ║
║                                                                     ║
║   (animated dashed lines flow left→right, nodes stagger in)        ║
║                                                                     ║
║                        See Our Full Process →                       ║
╚═════════════════════════════════════════════════════════════════════╝

╔═════════════════════════════════════════════════════════════════════╗
║  TECH STACK  (bg: #0a0f1e)                                          ║
║                                                                     ║
║  // BUILT WITH                                                      ║
║  Modern Stack, Proven Tools                                         ║
║                                                                     ║
║  ← Next.js · React · TypeScript · Python · Node.js · Supabase ·    ║
║    PostgreSQL · AWS · Vercel · n8n · Zapier · Slack API · Airtable →║
║                                                                     ║
║  (infinite horizontal scrolling marquee, tech badges)               ║
╚═════════════════════════════════════════════════════════════════════╝

╔═════════════════════════════════════════════════════════════════════╗
║  CTA  (large glow orb behind, gradient bg)                          ║
║                                                                     ║
║              Ready to Stop Fighting Your Tools?                     ║
║         We turn operational headaches into working systems.         ║
║                                                                     ║
║                      [ Let's Talk → ]                               ║
║                                                                     ║
╚═════════════════════════════════════════════════════════════════════╝

╔═════════════════════════════════════════════════════════════════════╗
║  FOOTER                                                             ║
║  RMeyers // Consulting          Services · Process · About          ║
║  © 2026                         Contact                             ║
╚═════════════════════════════════════════════════════════════════════╝
```

### Color Preview
- Background sections alternate between `#050810` (near black) and `#0a0f1e` (very dark navy)
- All cards: `#0d1526` with subtle cyan border glow on hover
- Accent cyan `#00d4ff` on CTAs, links, terminal highlights
- Accent green `#00ff88` on terminal output, step numbers
- All text: `#8892a4` body, `#c4cdd8` headings

---

## Revised Copy & Messaging (Conversion-Optimized)

### Hero Copy
**Headline:** "We Build Software That Works Like You Think."

**Subheadline (upgraded):**
> From 12 hours/week to under 1 — custom software built around how you actually work.

### Terminal Scenarios (Rotating — 3 variations cycle automatically)

**Scenario 1: Data re-entry**
```
$ describe problem
> "We re-enter the same data in 3 systems."
$ rmeyers build --solution
> ✓ Syncing Salesforce + Airtable + Slack
> ✓ Eliminating duplicate entry
> ✓ Saving ~10 hrs/week per rep
```

**Scenario 2: Manual reporting**
```
$ describe problem
> "Weekly reports take us 8 hours to pull together."
$ rmeyers build --solution
> ✓ Live dashboard built on your existing data
> ✓ Reports auto-generate every Monday 8am
> ✓ 8 hrs/week → 30 min review
```

**Scenario 3: Disconnected tools**
```
$ describe problem
> "Nothing talks to anything else."
$ rmeyers build --solution
> ✓ Mapping 4 disconnected systems
> ✓ Building unified data pipeline
> ✓ One source of truth, zero manual syncing
```

### Services Grouping (3 Buckets — Reduced Cognitive Load)

**Build**
- Web Applications
- Internal Tools & Dashboards

**Data**
- Databases & Forms
- System Integrations & APIs

**Automate**
- Workflow Automation
- AI Workflows & Assistants
- Rapid Prototyping

Card CTAs changed from `Learn more →` to `See examples →` or `How this works →`

### Process Step Micro-Copy (Time Signals Added)

| Step | Title | Sub-copy |
|---|---|---|
| 01 | Discover | "Map your workflows in 1–2 sessions" |
| 02 | Architect | "Design systems that match your operations" |
| 03 | Build | "Rapid iteration, working demos weekly" |
| 04 | Integrate | "Connect everything without disruption" |
| 05 | Support | "Documentation, training, and ongoing partnership" |

### Tech Stack Value Line
Above the marquee: *"Flexible stack chosen for speed, scalability, and long-term maintainability."*
Below: *"We pick the right tools — so you're not locked into the wrong ones."*

### CTA Section (Upgraded)
**Headline:** "Let's Fix Your Workflow"
**Sub-copy:** "No sales pitch — just a working session on your current process."
**Button:** `[ Get a Working Plan in 30 Minutes ]`

### Navbar CTA
Changed from "Let's Build ▶" to `[ Book a Call ]` or `[ Start a Project ]`

---

## New Section: "Recent Wins" (Proof / Social Proof)

Placed **between Services and Process** sections. Even without formal case studies, lightweight proof points dramatically increase conversion.

```
╔═══════════════════════════════════════════════════════════════╗
║  RECENT WINS  (bg: #0a0f1e)                                   ║
║                                                               ║
║  // PROOF IT WORKS                                            ║
║  Real Results for Real Teams                                  ║
║                                                               ║
║  ┌──────────────────────┐  ┌──────────────────────┐          ║
║  │ 📊 Reporting         │  │ 🔗 Integration        │         ║
║  │ Manual reporting cut │  │ 4 disconnected tools  │         ║
║  │ from 8 hrs → 30 min  │  │ unified into one flow │         ║
║  │ per week             │  │ Zero manual syncing   │         ║
║  └──────────────────────┘  └──────────────────────┘          ║
║                                                               ║
║  ┌──────────────────────┐  ┌──────────────────────┐          ║
║  │ 👥 Team Tool         │  │ ⚡ Automation         │         ║
║  │ Internal dashboard   │  │ 15-step onboarding   │         ║
║  │ used by 15+ members  │  │ automated end-to-end  │         ║
║  │ replaces spreadsheets│  │ 94% manual work gone  │         ║
║  └──────────────────────┘  └──────────────────────┘          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

These win cards use the same GlassCard component, with a subtle colored top border (cyan/green alternating) and a stat highlighted in large mono font.

---

## Context

Building a greenfield marketing/portfolio website for RMeyers Consulting, a custom software development and consulting company. The repo is empty (only `.gitignore`). The owner asked for something unique and outside the box — so the concept is **"Terminal Meets Modern Web"**: a dark, technically credible aesthetic where the design itself demonstrates software competence.

**Branch:** `claude/build-solutions-website-snmRx`

---

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (design system tokens)
- Framer Motion (animations, page transitions, stagger effects)
- `react-type-animation` (terminal typing sequences)
- `tsparticles` + `@tsparticles/slim` + `@tsparticles/react` (particle network background)
- `react-intersection-observer` (scroll-triggered reveals)
- `react-syntax-highlighter` (code snippet highlights in service cards)
- `clsx` + `tailwind-merge` (utility for cn() helper)

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `void` | `#050810` | Page background |
| `abyss` | `#0a0f1e` | Alternating section bg |
| `surface` | `#0d1526` | Cards / modals |
| `border` | `#1a2744` | Borders / dividers |
| `cyan` | `#00d4ff` | Primary accent (CTAs, links) |
| `cyan-dim` | `#00a3c4` | Secondary labels |
| `green` | `#00ff88` | Terminal text, success |
| `ghost` | `#8892a4` | Body text |
| `slate-light` | `#c4cdd8` | Headings |

Typography: **Inter** (sans, body) + **JetBrains Mono** (mono, labels/terminal/code) loaded via `next/font/google`.

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx            (root layout, fonts, metadata)
│   ├── globals.css           (tailwind base + custom scrollbar + keyframes)
│   ├── page.tsx              (home)
│   ├── services/page.tsx
│   ├── process/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        (transparent → blurred on scroll)
│   │   ├── Footer.tsx
│   │   └── PageWrapper.tsx   (framer-motion page transitions)
│   ├── ui/
│   │   ├── GlassCard.tsx
│   │   ├── GlowButton.tsx    (primary + outline variants)
│   │   ├── SectionLabel.tsx  ("// SERVICES" style labels)
│   │   ├── TerminalWindow.tsx (macOS-style chrome + content)
│   │   ├── CodeBlock.tsx
│   │   └── Badge.tsx
│   ├── effects/
│   │   ├── ParticleBackground.tsx  (tsparticles network, fixed)
│   │   ├── GlowOrb.tsx             (ambient blur blobs)
│   │   └── GridOverlay.tsx         (dot grid texture)
│   ├── sections/
│   │   ├── home/  (HeroSection, ServicesOverview, ProcessPreview, TechStack, HomeCTA)
│   │   ├── services/  (ServicesHero, ServiceGrid)
│   │   ├── process/   (ProcessHero, ProcessPipeline)
│   │   ├── about/     (AboutHero, ValuesSection)
│   │   └── contact/   (ContactHero, ContactForm)
│   └── cards/
│       ├── ServiceCard.tsx      (code-reveal hover)
│       └── ProcessStepCard.tsx
├── data/
│   ├── services.ts    (8 service defs with code snippets)
│   ├── process.ts     (5 process steps)
│   ├── techStack.ts
│   └── terminalLines.ts
├── hooks/
│   ├── useScrollAnimation.ts   (inView + framer variants)
│   └── useTypewriter.ts
├── lib/utils.ts        (cn() helper)
└── types/index.ts      (Service, ProcessStep, TechItem)

public/images/circuit-bg.svg   (circuit board SVG pattern tile)
```

---

## Unique Visual Features

### 1. Animated Terminal Hero (HeroSection)
- macOS-style terminal window, 3D tilted (`perspective rotateY(-8deg)`) on right side of hero
- Animates through a script: visitor sees a "problem" typed in, then the solution being built
- Script: `> describe problem` → "We're drowning in manual data entry" → `> rmeyers build --solution` → `✓ Connecting systems... 12hrs/week → 45min/week.`
- Uses `react-type-animation` with sequential lines; loops after completion
- Left side: large headline, subheadline, two CTA buttons

### 2. Particle Network Background
- `tsparticles` fixed behind all content, `pointer-events: none`
- 60 nodes in cyan/green/purple, linked by faint lines (opacity 0.15)
- On hover: lines draw toward cursor (`grab` mode)
- Represents system integrations visually
- Lazy-loaded client component wrapped in `Suspense`

### 3. Service Cards with Code-Reveal Hover
- Resting: icon + title + description + "Learn more →"
- Hover: description fades out, syntax-highlighted code snippet fades in from bottom
- Border transitions to cyan with glow shadow
- Each service has a relevant code snippet (e.g., automation service shows a trigger function)

### 4. Process as Visual Data Pipeline
- 5 steps as nodes connected by animated SVG dashed lines
- CSS `stroke-dashoffset` animation creates "data flowing" effect
- Nodes stagger in on scroll using Framer Motion `staggerChildren`
- Each node expands on click to show deliverables + duration (accordion via `AnimatePresence`)

### 5. Scroll-Triggered Section Reveals
- `useScrollAnimation` hook: `react-intersection-observer` + Framer Motion
- Every section fades in + slides up 30px when entering viewport (`triggerOnce: true`)

### 6. Circuit Board Texture
- SVG circuit trace pattern tiled at ~4% opacity on select sections
- Subliminal technical texture

### 7. Ambient Glow Orbs
- Blurred colored divs (`blur-[120px]`) pulse slowly behind cards and hero
- Creates depth and warmth in the dark environment

---

## Pages

### Home
Sections: Hero (terminal) → ServicesOverview (6 cards) → ProcessPreview (pipeline) → TechStack (scrolling ticker) → CTA

### Services (`/services`)
- Short hero with terminal breadcrumb
- 8 expanded service cards with deliverables list + code snippet hover

### Process (`/process`)
- Terminal hero types `> rmeyers --process --verbose`
- Full interactive pipeline with expandable step details

### About (`/about`)
- Human/personal tone contrasting with technical site aesthetic
- Values as terminal comment blocks (`// We build what you actually need`)
- Each expands to a paragraph on click

### Contact (`/contact`)
- Split layout: form left, contact info card right
- Form labels styled as mono comments: `// your_name`
- Submit triggers spinner state

---

## Navbar
- Starts transparent, transitions to `bg-void/90 backdrop-blur-md` after 50px scroll
- Logo: "RMeyers" (display font) + `// Consulting` (mono font)
- Mobile: hamburger → `AnimatePresence` slide-down menu

---

## Build Order

1. **Foundation**: `npx create-next-app@latest`, configure `tailwind.config.ts`, `globals.css`, `next.config.ts`, fonts, `lib/utils.ts`, `types/index.ts`
2. **UI Primitives**: GlassCard, GlowButton, SectionLabel, TerminalWindow, Badge
3. **Effects**: ParticleBackground, GlowOrb, GridOverlay, circuit-bg.svg
4. **Layout**: Navbar, Footer, PageWrapper
5. **Data Layer**: services.ts, process.ts, techStack.ts, terminalLines.ts
6. **Home Page**: All 5 sections assembled
7. **Inner Pages**: Services → Process → About → Contact
8. **Polish**: Responsive mobile, `prefers-reduced-motion`, lazy imports, meta/OG tags

---

## Mobile-First Design

All components are built mobile-first using Tailwind's responsive prefix pattern (`sm:`, `md:`, `lg:`). Default styles target phones; desktop is the progressive enhancement.

### Hero (Mobile)
```
┌─────────────────────────┐
│ RMeyers // Consulting ☰ │  ← hamburger menu
├─────────────────────────┤
│                         │
│  We Build Software      │
│  That Works Like        │
│  You Think.             │
│                         │
│  We turn operational    │
│  problems into working  │
│  software, fast.        │
│                         │
│  [▶ Start a Project]    │
│  [  See How We Work  ]  │
│                         │
│ ┌─ ~/rmeyers ─●─●─●──┐  │
│ │ $ rmeyers build     │  │  ← terminal below headline on mobile
│ │ > ✓ Connecting...   │  │     (not 3D tilted, full width)
│ │ > ✓ 45min/week      │  │
│ └─────────────────────┘  │
└─────────────────────────┘
```

### Services Grid (Mobile)
- 1 column on mobile → 2 columns on `sm:` → 3 columns on `lg:`
- Tap to reveal code snippet (hover doesn't exist on mobile; tap toggles the code panel)

### Process Pipeline (Mobile)
- Horizontal pipeline becomes **vertical** on mobile
- Steps stack top-to-bottom with a vertical flowing line on the left
- Each step is full-width with number, title, and tap-to-expand details

### Tech Stack Marquee
- Same on all breakpoints (horizontal scroll, just smaller badges on mobile)

### Navbar Mobile
- Hamburger icon (three lines) replaces nav links
- Tap opens a full-height slide-in drawer (`AnimatePresence` y-axis slide)
- Drawer: stacked links + "Let's Build" CTA at bottom

### Key Mobile Rules Applied Throughout
| Concern | Mobile | Desktop |
|---|---|---|
| Font size headings | `text-3xl` | `text-5xl lg:text-6xl` |
| Section padding | `py-12 px-4` | `py-20 px-8` |
| Hero layout | Single column | 2 columns (`lg:grid-cols-2`) |
| Terminal tilt | None (flat) | `perspective rotateY(-8deg)` |
| Particle background | Disabled (perf) | Enabled at `md:` and up |
| Process pipeline | Vertical | Horizontal |
| Service grid | 1 col | 2–3 cols |
| Glow orbs | Smaller / fewer | Full size |

---

## Performance Notes
- `react-syntax-highlighter` dynamically imported (`ssr: false`) — saves ~150kb from initial bundle
- `ParticleBackground` only rendered on `md+` breakpoints
- All fonts use `display: 'swap'`
- `prefersReducedMotion` from Framer Motion used to skip/simplify animations

---

## Verification
- `npm run dev` → check all 5 pages render without errors
- Verify terminal animation loops correctly on home hero
- Check particle background loads and hover interaction works
- Verify service card code-reveal works on all 8 cards
- Process pipeline: confirm flowing line animation + click-to-expand works
- Test mobile responsive on all pages
- Run `npm run build` to ensure no TypeScript errors
- Check Lighthouse score (target: Performance 85+, Accessibility 95+)
