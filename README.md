# Elena Voss — Artist Portfolio

A React portfolio website for contemporary painter Elena Voss, featuring an immersive full-screen artwork experience on the homepage, collection galleries, about page, and contact form.

## Features

- **Immersive homepage** — Full-viewport hero showcasing a featured painting with parallax scroll and fade effects
- **Collections** — Three artwork collections with preview sections and dedicated gallery pages
- **About** — Artist biography, education, and exhibition history
- **Contact** — Studio information and inquiry form

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Customize

Edit `src/data/artworks.js` to update the artist name, artwork images, collection details, and contact information. Replace Unsplash placeholder URLs with your own artwork photography.

## Deploy to GitHub

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that publishes to **GitHub Pages** on every push to `main`.

### One-time setup

1. Log in to GitHub (if needed):

   ```bash
   gh auth login -h github.com -p https -w
   ```

2. Create the repo and push:

   ```bash
   ./scripts/deploy-to-github.sh
   ```

   Or manually:

   ```bash
   gh repo create artist-portfolio --public --source=. --remote=origin --push
   ```

3. In the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions** (if not already enabled).

The live site will be at `https://<your-username>.github.io/artist-portfolio/`.

## Stack

- React 18
- React Router 6
- Vite 5
