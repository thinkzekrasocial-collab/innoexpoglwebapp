# InnoExpo GL SEO plan

## Keyword cluster

Primary: `Bangladesh robotics competition`, `student robotics competition`, `STEM education Bangladesh`.

Secondary: `youth robotics`, `robotics mentorship`, `student innovation projects`, `robotics competition registration`.

These terms reflect the language used by current Bangladesh robotics and STEM organizations: WRO Bangladesh describes robotics as science, technology, and education; current competition pages emphasize robotics, STEM, innovation, and student participation; and university coverage connects competitions with hands-on engineering and innovation.

## URL and page map

| URL | Search intent | Title | Meta description |
| --- | --- | --- | --- |
| `/` | Learn about the organization and join | InnoExpo GL \| Student Robotics & STEM in Bangladesh | InnoExpo GL helps students in Bangladesh build practical STEM projects through robotics, mentorship, collaboration, and competition opportunities. |
| `/register` | Register as a member | Register as an InnoExpo GL Member \| InnoExpo GL | Register as a member of InnoExpo GL to join a student robotics and STEM innovation community in Bangladesh. |
| `/contact` | Ask for help or partnership information | Contact InnoExpo GL \| InnoExpo GL | Contact InnoExpo GL about student robotics, STEM mentorship, school partnerships, and member registration. |

The demo routes are excluded from crawling because they are presentation experiments, not public InnoExpo content.

## Implemented technical SEO

- Root metadata, canonical URLs, Open Graph, Twitter cards, keywords, viewport, and robots directives.
- Organization, WebSite, WebPage, and FAQPage JSON-LD on the homepage.
- Generated `sitemap.xml` and `robots.txt` through Next.js metadata routes.
- One homepage `h1`; page-level `h1` headings for registration and contact; section content uses `h2`/`h3` hierarchy.
- Internal links connect the main sections, registration, and contact routes.
- Logo images use descriptive alt text and Next Image optimization with dimensions.

## Pre-launch checklist

- Set `NEXT_PUBLIC_SITE_URL` to the final canonical HTTPS origin.
- Verify all event, venue, partner, and competition claims before publishing.
- Complete FormSubmit's one-time activation email and confirm submissions arrive at `innoexpomember@gmail.com`.
- After launch, submit the sitemap in Google Search Console and Bing Webmaster Tools.
- After launch, verify canonical URLs, robots access, rich-result eligibility, and social previews on the live domain.
