# CAMD Day 2026

A promotional event website for the College of Arts, Media and Design (CAMD) at Northeastern University. The site serves as a centralized hub where students and visitors can explore CAMD Day events, including schedules, speakers, department info, and more.

## Tech Stack

- **Vite** — Build tool with hot module reload
- **Tailwind CSS v3** — Utility-first styling
- **GSAP** — Scroll-based animations and transitions
- **Vanilla JS (ES Modules)** — No framework, each section is a self-contained module
- **Netlify** — Hosting and deployment

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

## Project Structure

```
camd-day/
├── index.html                    # Minimal shell — just loads main.js
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
├── public/
│   └── assets/
│       ├── images/
│       ├── icons/
│       └── fonts/
└── src/
    ├── main.js                   # Imports and initializes all sections
    ├── styles/
    │   └── global.css            # Tailwind directives + shared styles
    ├── sections/                 # Each section is its own module
    │   ├── hero.js
    │   ├── about.js
    │   ├── departments.js
    │   ├── speakers.js
    │   ├── schedule.js
    │   ├── dean.js
    │   └── footer.js
    ├── components/
    │   └── navbar.js
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
| 2 | About | `about.js` | Split layout — about text + Ryder Hall photo |
| 3 | Departments | `departments.js` | Tabbed navigation across 6 CAMD departments |
| 4 | Speakers | `speakers.js` | Speaker cards with dot pagination carousel |
| 5 | Schedule | `schedule.js` | Interactive event timeline with filters + Google Calendar export |
| 6 | Dean | `dean.js` | Dean quote |
| 7 | Footer | `footer.js` | Address, newsletter signup, social links |

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

## VS Code Setup

Install the **Tailwind CSS IntelliSense** extension (`bradlc.vscode-tailwindcss`).

