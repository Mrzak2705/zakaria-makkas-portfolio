# Zakaria Makkas — 3D Portfolio (Software & AI Engineer)

Based on the "3D Developer Portfolio" template (React + React Three Fiber),
recolored (copper/teal on deep navy, no more purple) and fully repopulated
with real content: full-stack profile, Core Banking (Temenos T24), AI
integration, QA, and Technical Leadership.

## Sections
Hero (3D desktop model) → About → Expertise → Experience (timeline) →
Projects → Leadership → Education → Certifications → Contact (3D globe)

## Run

```bash
npm install        # .npmrc already sets legacy-peer-deps=true (needed for react-tilt)
npm run dev
```

## Contact form (EmailJS)

Create a `.env` at the project root:
```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```
Get these from https://www.emailjs.com — free tier is enough.

## Before publishing

1. Update `linkedin` in `src/data` → `src/constants/index.js` (`contactInfo`).
2. Add your real CV and wire the "Download CV" button in `Navbar.jsx`.
3. Review the BCP Technologies experience — no proprietary client detail.
