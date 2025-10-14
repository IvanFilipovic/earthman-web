# Copilot Instructions for AI Agents

## Project Overview
- This is a Nuxt 3 (Vue 3) web application using TypeScript and Tailwind CSS.
- Main app entry: `app.vue`, with routing in `pages/` and layout in `layouts/`.
- Components are in `components/`, assets in `assets/`, and static files in `public/`.
- Server-side logic (if any) is in `server/`.

## Key Workflows
- **Install dependencies:** `npm install`
- **Start dev server:** `npm run dev` (http://localhost:3000)
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`

## Project Structure & Patterns
- **Pages:**
  - Vue files in `pages/` map to routes automatically (e.g., `pages/shop/index.vue` → `/shop`).
  - Dynamic routes use Nuxt conventions (e.g., `pages/collections/[...slug].vue`).
- **Components:**
  - Reusable UI in `components/`. Use PascalCase for component names.
  - Import components locally or register globally in `nuxt.config.ts` if needed.
- **Styling:**
  - Tailwind CSS is configured via `tailwind.config.js` and `assets/css/main.css`.
  - Use utility classes in templates; avoid custom CSS unless necessary.
- **TypeScript:**
  - TypeScript is enabled via `tsconfig.json`.
  - Prefer type annotations and interfaces for props and composables.
- **Configuration:**
  - Nuxt config: `nuxt.config.ts` (modules, plugins, runtime config, etc.)
  - ESLint: `eslint.config.mjs` (code style/linting)

## Conventions & Tips
- Use Nuxt composables (`useState`, `useFetch`, etc.) for state and data fetching.
- Place shared layouts in `layouts/` (e.g., `default.vue`).
- Static assets (images, videos) go in `public/`.
- Use `assets/` for source files (e.g., CSS) processed at build time.
- Follow existing file/folder naming and organization.

## Examples
- To add a new shop page: create `pages/shop/new.vue`.
- To add a global style: edit `assets/css/main.css` and reference in `nuxt.config.ts`.
- To add a new component: add to `components/` and import as needed.

## References
- [Nuxt Documentation](https://nuxt.com/docs/getting-started/introduction)
- See `README.md` for setup and workflow basics.

---
If a pattern or workflow is unclear, check for examples in the relevant directory or ask for clarification.
