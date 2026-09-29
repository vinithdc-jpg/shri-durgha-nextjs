# Shri Durgha Club - Next.js

Converted from the supplied HTML page into a Next.js App Router application.

## Structure

```text
shri-durgha-nextjs/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Notes

- The page is kept as one main `app/page.tsx` file to make it easy to maintain against the original HTML.
- The original Tailwind color palette and typography are preserved in `app/globals.css`.
- Font Awesome is loaded from the same CDN used by the original HTML.
- Event category filtering, event modal, mobile menu, form toast, and countdown are implemented with React state/hooks.
- The form currently displays the original success toast; connect it to an API/database when a backend is ready.
- Replace placeholder social links, bank details, UPI ID, contact numbers, and images with real production values before deployment.
