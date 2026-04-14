# CAMD Day 2026

A promotional event website for the College of Arts, Media and Design (CAMD) at Northeastern University. Built by [Scout](https://scout.camd.northeastern.edu/), the site serves as a centralized hub where students and visitors can explore CAMD Day events, including schedules, department info, a photo gallery, and more.

## Tech Stack

### Frontend

- **Vanilla JS (ES Modules)** — No framework; each section is a self-contained module with `render()` and `init()` exports
- **Vite v7** — Build tool and dev server with hot module reload
- **Tailwind CSS v3** — Utility-first styling via PostCSS + Autoprefixer
- **GSAP** — Scroll-based animations and transitions (loading screen, scroll triggers)

### Content Management

- **Sanity v5** — Headless CMS for gallery images. A separate [Sanity Studio repo](https://github.com/Scout-NU/studio-CAMD-day) defines the content schema. The frontend reads from Sanity's Content Lake API using `@sanity/client` and `@sanity/image-url`.
- **Sanity project ID:** `edcjwlqc` / **Dataset:** `prod`

### Hosting & Deployment

- **Netlify** — Hosts the frontend; auto-deploys from `main`
- **Sanity Studio** — Deployed via `sanity deploy` for content editors
- **GitHub** — Version control with `main` / `dev` / `feat/*` branching workflow

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20+
- npm (comes with Node)

### Setup

```bash
git clone git@github.com:Scout-NU/CAMD-day-s26.git
cd CAMD-day-s26
npm install
```

### Run the Dev Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Sanity Studio (CMS)

The Sanity Studio lives in a separate repo. To run it locally:

```bash
cd studio-CAMD-day
npm install
npx sanity dev
```

Content changes made in the Studio are reflected on the frontend without a redeploy (the frontend fetches from Sanity's API at runtime).

## Project Structure

```
camd-day/
├── index.html                    # Minimal shell — loads main.js
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
├── public/
│   └── assets/
│       ├── images/               # Static images (hero bg, dept SVGs, etc.)
│       └── videos/               # Self-hosted video (recap)
└── src/
    ├── main.js                   # Imports and initializes all sections
    ├── styles/
    │   └── global.css            # Tailwind directives + shared styles
    ├── sanity/
    │   ├── client.js             # Sanity client (projectId, dataset)
    │   └── imageBuilder.js       # Image URL helper for Sanity assets
    ├── sections/
    │   ├── hero.js               # Full-screen hero with title
    │   ├── recap.js              # Event recap video (click-to-play)
    │   ├── gallery.js            # Photo gallery (images from Sanity)
    │   ├── schedule.js           # Interactive event timeline
    │   ├── about.js              # About CAMD Day split layout
    │   ├── departments.js        # Tabbed department navigation
    │   ├── dean.js               # Dean quote
    │   └── footer.js             # Footer with links
    ├── components/
    │   ├── navbar.js             # Fixed nav with scroll-aware styling
    │   └── loadingScreen.js      # Animated loading screen
    └── utils/
        ├── calendar.js           # Google Calendar link builder
        ├── scroll.js             # Smooth scroll + active nav state
        └── animations.js         # Shared GSAP ScrollTrigger setup
```

### How Sections Work

Every section file exports two functions:

- `render()` — Returns the HTML string for that section
- `init()` — Runs after the HTML is in the DOM to set up event listeners, animations, etc.

`main.js` calls `render()` on all sections to build the page, then calls `init()` on each to wire up interactivity. **You should almost never need to edit `main.js` or `index.html`.**

## Sections Overview

| # | Section | File | Description |
|---|---------|------|-------------|
| 1 | Hero | `hero.js` | Full-screen background image with "CAMD DAY 2026" title |
| 2 | Recap | `recap.js` | Click-to-play event recap video with poster frame |
| 3 | Gallery | `gallery.js` | Horizontally scrolling photo gallery (images from Sanity CMS) |
| 4 | Schedule | `schedule.js` | Interactive event timeline with modals |
| 5 | About | `about.js` | Split layout — about text + background photo |
| 6 | Departments | `departments.js` | Tabbed navigation across CAMD departments |
| 7 | Dean | `dean.js` | Dean quote |
| 8 | Footer | `footer.js` | Address, links, Northeastern global footer |

## Git Workflow

### Branches

- **`main`** — Production (auto-deploys to Netlify). Never push directly.
- **`dev`** — Integration/staging. All PRs target this branch.
- **`feat/*`** — Feature branches. Branch off `dev`.

### Working on a Feature

```bash
git checkout dev
git pull origin dev
git checkout -b feat/your-section-name
# ... do your work ...
git add .
git commit -m "feat: build hero section"
git push -u origin feat/your-section-name
# Open a PR on GitHub targeting dev
```

### Staying Up to Date

If `dev` has been updated while you're working:

```bash
git checkout feat/your-section-name
git pull origin dev --rebase
```

### Rules

1. Never push directly to `dev` or `main`
2. Always branch off `dev`
3. Always PR into `dev`
4. Only the lead merges `dev` → `main`

## Sanity CMS Notes

- Gallery images are managed in Sanity Studio under **Year** documents. Each year has a gallery with images, alt text, and captions.
- The frontend queries for the current year's gallery at runtime using GROQ.
- **CORS:** Any new deployment domain must be added to the Sanity project's CORS origins at [manage.sanity.io](https://manage.sanity.io) for gallery images to load.

## VS Code Setup

Install the **Tailwind CSS IntelliSense** extension (`bradlc.vscode-tailwindcss`).

