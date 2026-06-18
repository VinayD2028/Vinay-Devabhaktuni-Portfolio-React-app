# Vinay Devabhaktuni — Portfolio

Netflix-style portfolio with liquid glass (glassmorphism) aesthetic.
Built with React + Vite + Framer Motion. 100% free, no paid services.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Add Your Assets

Put these files in the project root (same level as `index.html`):
- `IMG_2802.jpeg` — your headshot
- `resume_data_engineer.pdf`
- `resume_software_developer.pdf`

## Editing Content

All content lives in **`src/data/content.js`** — one file to rule them all:

- `profile` — name, email, links, bio
- `featured` — the hero billboard project
- `categories` — all rows and cards (projects, research, experience)
- `skills` — skill groups and items
- `education` — degrees and certs

**To add a new project card:**
```js
// In src/data/content.js, add to categories[0].items:
{
  id: "my-new-project",          // unique string
  title: "My New Project",
  subtitle: "Category · Tech",
  description: "Short description shown on card",
  longDescription: "Full detail shown in modal",
  tags: ["Python", "AWS"],
  accentColor: "#00C8F0",
  gradient: "linear-gradient(135deg, #060D1F 0%, #0A1628 100%)",
  github: "https://github.com/...",
  live: "https://...",           // optional
  impact: "Some metric",        // optional green line
}
```

**To add a new category row:**
```js
// Add to the categories array:
{
  id: "my-row",
  title: "My Row Title",
  accent: "#A78BFA",   // left border color
  items: [ ...cards ]
}
```

## Theming

Edit **`src/styles/tokens.css`** to change any color, blur amount, or spacing globally.

Key glass variables:
```css
--glass-bg:       rgba(255,255,255,0.055)  /* surface opacity */
--glass-blur:     18px                     /* blur amount */
--glass-border:   rgba(255,255,255,0.12)   /* border opacity */
```

## Glass Fallback Strategy

- **Chrome/Edge:** Full `backdrop-filter: blur() url(#glass-distortion)` with SVG feTurbulence refraction
- **Safari:** `backdrop-filter: blur()` without SVG filter (Safari doesn't support filter references)
- **Firefox:** `@supports not (backdrop-filter)` fallback to `rgba(15,22,40,0.88)` semi-opaque solid
- Controlled in `src/styles/global.css` via `@supports` queries

## Deploy Free

### Vercel (recommended)
```bash
npm install -g vercel
vercel --prod
```
Or push to GitHub and import at vercel.com.

### GitHub Pages
```bash
# vite.config.js: set base to '/repo-name/'
npm run build
# deploy dist/ folder to gh-pages branch
```

### Netlify
Drag the `dist/` folder to netlify.com/drop after `npm run build`.

## AI Chat (optional)

The AI chat widget from the previous version used a Vercel edge function.
To add it back, create `api/chat.js` and call it from a chat component.
See the previous `index.html` for the implementation.
