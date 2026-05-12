# Project Images

Drop the following image files into this folder. The site will load them from `/images/<name>.png` (or `.jpg`).

If a file is missing the `ImageWithFallback` component will render a fallback icon, so the site still builds and runs while you collect the assets.

Expected filenames (used in `src/app/pages/ProjectsPage.tsx`):

- `local-link-logo.png` — LocalLink project logo
- `boat-1.png`, `boat-2.png` — 3D printed motorized boat
- `lego-bot-1.png`, `lego-bot-2.png` — LEGO league battle bot
- `reequip-logo.png` — ReEquip logo
- `rocket-1.png`, `rocket-2.png` — Rocket launchpad
- `ignition-1.png`, `ignition-2.png`, `ignition-3.png` — Ignition circuit

You can rename or change the extension — just update the matching `const ... = "/images/..."` declarations at the top of `src/app/pages/ProjectsPage.tsx`.
