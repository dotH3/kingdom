# Kingdom

A minimalist static blog built with Astro. Features a sober, aesthetic brown color scheme, system fonts, and optional dark mode support.

## Features

- 📝 **Markdown Posts** - Write posts in Markdown with frontmatter metadata
- 🎨 **Minimalist Design** - Clean, sober aesthetic with brown color palette
- 🌓 **Dark Mode** - Automatic dark mode based on system preferences
- ⚡ **Fast & Static** - Static site generation with zero runtime JavaScript
- 📱 **Responsive** - Works beautifully on all devices
- 🔍 **SEO Optimized** - Basic SEO with meta tags and semantic HTML
- 🚀 **Auto Deploy** - Automatic deployment to GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321/kingdom/` to see your site.

### Build

```bash
npm run build
```

The static site will be generated in the `dist/` directory.

### Preview

```bash
npm run preview
```

## Writing Posts

Posts are stored in `src/content/posts/` as Markdown files.

### Frontmatter Schema

Each post must include the following frontmatter:

```yaml
---
title: "Your Post Title"
date: 2025-01-15T00:00:00Z
desc: "A brief description of your post"
tags: ["tag1", "tag2"]
postSlug: "url-friendly-slug"
draft: false
---
```

- **title**: The post title (displayed on home and detail pages)
- **date**: Publication date in ISO 8601 format
- **desc**: Short description (shown on home page)
- **tags**: Array of tags for categorization
- **postSlug**: URL-friendly identifier used in the post URL (`/web/[slug]`)
- **draft**: Set to `true` to hide the post from the site

### Adding a New Post

1. Create a new `.md` file in `src/content/posts/`
2. Add the required frontmatter
3. Write your content in Markdown below the frontmatter
4. Build the site to see your new post

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── config.ts          # Content collection schema
│   │   └── posts/              # Markdown posts go here
│   ├── layouts/
│   │   └── BaseLayout.astro    # Main layout with styling
│   └── pages/
│       ├── index.astro         # Home page (lists posts)
│       └── web/
│           └── [slug].astro    # Post detail page
├── astro.config.mjs            # Astro configuration
└── package.json
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch. See `.github/workflows/deploy.yml` for the deployment configuration.

To enable GitHub Pages:

1. Go to your repository Settings > Pages
2. Set Source to "GitHub Actions"
3. Push to main branch

The site will be available at `https://[username].github.io/kingdom/`

## License

MIT