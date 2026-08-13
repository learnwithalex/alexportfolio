# alexportfolio

Personal portfolio — React 19 + Vite + TypeScript + Tailwind 4.

The app lives in `client/`.

```bash
cd client
npm install
npm run dev      # local dev server
npm run build    # tsc -b && vite build  → client/dist
```

## Where the content lives

Everything personal is in a handful of files:

| File | What it holds |
|---|---|
| `client/src/constants/data.ts` | name, role, socials, projects |
| `client/src/constants/experience.ts` | work history / timeline |
| `client/src/constants/stack.ts` | tech stack list |
| `client/src/components/main/hero.tsx` | headline + intro copy |
| `client/src/components/main/footer.tsx` | footer text + links |
| `client/src/schemas/contact.ts` | contact form fields |
| `client/public/og-image.png` | social share image |

## Credit

Started from a portfolio built by [@learnwithjacksun](https://github.com/learnwithjacksun),
used with permission. Design and structure are his; the content here is mine.
