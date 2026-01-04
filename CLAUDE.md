# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Joe Wapshott (joewapshott.com), a Head of Product. Static HTML site hosted on GitHub Pages.

## Project Structure

```
/
├── index.html          # Homepage with bio, experience, and featured articles
├── cv.html             # Full CV/resume page
├── articles.html       # Article listing page
├── articles/           # Individual article pages (standalone HTML files)
├── images/             # Image assets (logos, photos)
└── CNAME               # Custom domain configuration (joewapshott.com)
```

## Tech Stack

- **Pure static HTML/CSS/JS** - No build process, no frameworks
- **Fonts**: Lora (serif, headings) + Inter (sans-serif, body)
- **Hosting**: GitHub Pages with custom domain
- **Analytics**: GoatCounter (privacy-friendly)

## Design System

### CSS Variables (supports light/dark theme)

```css
--bg-primary      /* Main background */
--bg-card         /* Card backgrounds */
--text-primary    /* Headings, main text */
--text-secondary  /* Body text */
--text-muted      /* Subtle text */
--accent          /* Links, highlights (#0369a1 light / #38bdf8 dark) */
--accent-muted    /* Subtle accent backgrounds */
```

### Theme

- Theme toggle in top-right corner of all pages
- Uses `data-theme` attribute on `<html>` element
- Persists to localStorage

### Typography

- Headings: Lora serif, 600 weight
- Body: Inter sans-serif, 400 weight
- Base font size: 17px
- Line height: 1.7

## Common Patterns

### Article Pages

Each article in `/articles/` is a standalone HTML file with:
- Full inline CSS (no external stylesheets)
- Theme toggle functionality
- Back link to `/articles.html`
- Category tag, title, date in header
- GoatCounter analytics script

### Adding a New Article

1. Create new HTML file in `/articles/` following existing article structure
2. Add entry to `articles.html` listing page
3. Optionally feature on `index.html` homepage

## Commands

No build commands - files are served directly by GitHub Pages. To preview locally:

```bash
# Using Python
python -m http.server 8000

# Using Node
npx serve
```

## Deployment

Push to `main` branch triggers automatic GitHub Pages deployment.
