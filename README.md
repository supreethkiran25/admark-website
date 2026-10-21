# AdMark Digitals — The Engineering Dossier

> **Research-Led Digital Product & Engineering Studio**  
> Official Website: [https://www.admarkdigitals.com/](https://www.admarkdigitals.com/)  
> Mantra: *"Trust Us. We Deliver. Beyond Expectations."*

Production-grade website built from first principles for **AdMark Digitals**. Built to the standard of Linear, Stripe, Vercel, and Pentagram.

---

## 1. Design Rationale: "The Engineering Dossier"

A research-led digital product studio is not a cosmetic agency or a template shop. The design concept treats the website as a transparent technical dossier:

- **Color Palette**:
  - **Dark Canvas (Default)**: `#080808` deep ink base with `#111111` / `#161616` precision surfaces.
  - **Light Canvas (Togglable)**: `#F9F9FB` technical off-white with `#FFFFFF` surfaces.
  - **Signature Accent**: AdMark Crimson Red (`#FF252D` dark / `#DC2626` light), deployed with strict discipline for status indicators, active tabs, and primary CTAs.
  - **Structural Cues**: Hairline border rules (`#222222` / `#E5E7EB`), section index numbers (`01 // PHILOSOPHY`), and technical metadata badges.
- **Typography Pairing**:
  - **Display & Body**: Inter with tight display tracking (`-0.035em`) and fluid `clamp()` type scaling.
  - **Technical Labels**: JetBrains Mono for coordinates, SHA hashes, SLA benchmarks, and spec tables.
- **Motion & Micro-Interactions**:
  - Custom magnetic trailing cursor (desktop only, disabled on touch/reduced-motion).
  - Pinned 6-stage delivery lifecycle with deliverable gates.
  - Interactive capabilities index expanding stack tags and benchmarks.
  - Global `Cmd+K` / `Ctrl+K` command-style brief modal.
  - Top reading depth progress indicator and live studio coordinate HUD.

---

## 2. Page Architecture

| Section | Identifier | Description |
| :--- | :--- | :--- |
| **00. Hero** | `#hero-title` | "Research before execution." headline, one-sentence subhead, primary CTA (`⌘K`), proof strip, and inline SVG pipeline schematic. |
| **01. Philosophy** | `#philosophy` | 2-column contrast: "Boilerplate Agency Work" vs "Validated Engineering". |
| **02. Capabilities** | `#capabilities` | 6 interactive service dossiers (Web Dev, Mobile, AI Systems, Cloud/DevOps, UI/UX, Growth). |
| **03. Methodology** | `#methodology` | 6-stage delivery lifecycle with explicit mandatory gate deliverables. |
| **04. Standards** | `#standards` | Technical spec sheet (Lighthouse 95+, OWASP security, WCAG 2.2 AA, 99.9% uptime). |
| **05. Selected Work** | `#work` | Case study grid (Problem → Research → Build → Outcome) with clear placeholder indicators. |
| **06. Leadership** | `#leadership` | 4 executives (Tejasvi Jois, Harshith V. Malipatil, Revanth Kumar S, Prajwal B. P.). |
| **07. Presence** | `#locations` | Mysuru HQ (`12.3051° N, 76.6554° E`) + Bengaluru and Hyderabad branch hubs. |
| **08. Contact** | `#contact` | Project brief dispatch form with validation, honeypot trap, and direct lines. |

---

## 3. Technology Stack

- **Core**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Vanilla CSS Design Tokens (Custom Properties) supporting zero-runtime instant theme switching
- **Server**: Next.js Route Handler (`/api/contact`) with in-memory rate limiting and honeypot protection
- **SEO & Schema**: Metadata, OpenGraph, Twitter Cards, robots.txt, sitemap.xml, and JSON-LD (`Organization` & `LocalBusiness`)
- **Accessibility**: WCAG 2.2 AA compliant with high-contrast ratios, visible focus rings, ARIA roles, and screen-reader support

---

## 4. Local Execution

```bash
# Install dependencies
npm install

# Build production bundle with Webpack flag
npm run build

# Start production server on port 3001
node ./node_modules/next/dist/bin/next start -p 3001
```

Visit **`http://localhost:3001`** in your browser.

---

## 5. Content Editing Guide

All content is centralized in **`src/lib/data.ts`**:
- **Company Info & Leadership**: Edit `COMPANY` object (`leadership`, `hq`, `branches`, `phone`, `email`).
- **Services**: Edit `SERVICES` array (title, deliverables, techStack, primaryMetric).
- **Methodology Stages**: Edit `METHODOLOGY_STAGES` (phase names, activities, deliverables, metrics).
- **Case Studies**: Edit `CASE_STUDIES` (problem, research, build, outcome).
- **Engineering Standards**: Edit `ENGINEERING_STANDARDS` (categories, specs, verification methods).
