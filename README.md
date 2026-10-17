# InnoExpo GL

The InnoExpo GL website is a Next.js App Router site for student robotics, STEM learning, mentorship, and member registration.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Registration

The member form posts through FormSubmit AJAX to `innoexpomember@gmail.com`. Complete FormSubmit's one-time activation email before launch.

## SEO

Set `NEXT_PUBLIC_SITE_URL` to the final site origin before deployment. The app generates `/sitemap.xml` and `/robots.txt` automatically.
