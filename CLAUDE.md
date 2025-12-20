# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Korean franchise consulting landing page built with Next.js 15, React 19, and TypeScript. The site features a single-page layout promoting franchise consulting services for small business owners.

## Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Key Files
- `src/app/page.tsx` - Main landing page component (single page with all sections)
- `src/app/layout.tsx` - Root layout with SEO metadata
- `src/app/globals.css` - TailwindCSS global styles
- `tailwind.config.ts` - Custom color palette (primary blue, navy theme)

## Architecture

**Single Page Application**: All content is in one page component with sections:
- Hero section with CTA
- Services section (3 target audiences)
- Professional profile section
- Consultation CTA section
- Contact form

**Styling**: Uses TailwindCSS with custom color scheme:
- Primary: Blue tones (#0ea5e9, #0284c7)
- Navy: Dark tones (#0f172a, #1e293b)
- Fully responsive design

**State Management**: Simple React useState for form handling only. Form submission currently logs to console (no backend integration).

**Configuration**: 
- Optimized for Vercel deployment with `output: 'standalone'`
- TypeScript path alias `@/*` maps to `./src/*`
- Security headers configured in `next.config.ts`

## Korean Language Content

All content is in Korean targeting franchise business consultants and small business owners looking for franchise-related legal advice.