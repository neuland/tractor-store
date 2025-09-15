# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **The Tractor Store** - a micro frontend demonstration project built with Astro. It serves as a blueprint for experimenting with micro frontend architecture, similar to TodoMVC but focused on micro frontends. The project is a showcase website that documents the concept and displays various implementation examples.

## Development Commands

- `npm run dev` / `npm start` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run clean` - Remove dist directory

## Code Formatting

- `prettier` - Format code using Prettier with Astro plugin
- Configuration in `.prettierrc.mjs` includes special handling for `.astro` files

## Architecture

### Tech Stack
- **Astro** - Static site generator with component islands
- **TypeScript** - Type safety throughout
- **Tailwind CSS** - Utility-first styling with custom design system
- **React** (via @astrojs/react) - For interactive components

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── content/        # Page-specific content components
│   └── *.astro         # Various UI components (Header, Footer, Nav, etc.)
├── layouts/            # Page layout templates
│   ├── PageLayout.astro    # Main layout with header/footer
│   └── ContentLayout.astro # Content-focused layout
├── pages/              # File-based routing
│   ├── index.astro     # Homepage
│   └── projects.astro  # Projects page
├── lib/                # Utilities and helpers
│   ├── seo.ts          # SEO meta generation
│   └── markdoc/        # Markdoc configuration
├── styles/             # Global styles
└── config.ts           # Site configuration
```

### Key Architecture Patterns
- **Component-based design**: Heavy use of Astro components for modularity
- **Layout composition**: Main layout provides header/footer, content layouts handle page structure
- **SEO-first**: Comprehensive meta tag generation via `lib/seo.ts`
- **Theme system**: CSS custom properties for colors, dark mode support
- **Static generation**: Built for GitHub Pages deployment

### Styling System
- Custom CSS properties defined in theme classes (`theme-bubblegum`)
- Tailwind extended with custom color palette using CSS variables
- Typography plugin for content styling
- Custom font loading for Raleway family

### Configuration Details
- Base URL configured for GitHub Pages (`/tractor-store/`)
- Assets prefix for CDN deployment
- Sitemap and RSS generation enabled
- Prism syntax highlighting included

## Deployment

Automated deployment to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`). Builds are triggered on pushes to `main` branch.

## Development Notes

- The site showcases micro frontend concepts but is itself a traditional Astro site
- Content is primarily static with some interactive elements
- Font assets are loaded from external CDN
- Project includes markdoc integration for potential content management