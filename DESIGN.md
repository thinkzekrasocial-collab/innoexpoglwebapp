# InnoExpo GL design system

## Brief
- Feeling: calm.
- Palette: background `#f7f8fa`, text `#17212b`, primary `#124e66`, accent `#f0a04b`; tinted neutral `#eef2f5`.
- Type: DM Serif Display for headings and DM Sans for body; body is 16–18px with 1.5–1.6 line-height.
- Shape and depth: 8px radius, 1px hairline borders, one subtle shadow level only.
- Layout: compact sticky text navigation, max width 1120px, 8px spacing grid.

## Rules
- The one primary action is `Register`; keep it in the header, hero, and final CTA.
- Use generous whitespace and varied layouts; avoid repeated card grids, glass effects, colored glows, gradients, pills, and decorative badges.
- Use only the supplied logo and existing factual copy. Do not add testimonials, statistics, names, logos, awards, dates, venues, or event claims without verification.
- Motion is subtle only: transform/opacity transitions, no layout shift, and respect `prefers-reduced-motion`.
- All inputs need labels, visible focus, client validation, disabled sending state, success/error state, and the hidden honeypot.
- Social links must use `target="_blank"` with `rel="noopener noreferrer"` and accessible labels.
- Do not add prices, currency, fees, discounts, offers, or payment fields to visible UI, metadata, or structured data.

## Audit and plan
- Kept: existing logo, Next.js structure, section anchors, responsive navigation, competition filters, FAQ accordion, and reusable components.
- Removed: visible price fields, price FAQ, unsupported success stories, unsupported metrics, and free/offer language.
- Reworked: tokens, typography, spacing, hero, header, footer, registration flow, social links, and contact route.
- Verify before launch: event dates/venues, partner wording, competition claims, and any existing content not backed by supplied source material.
- Registration uses FormSubmit AJAX at `https://formsubmit.co/ajax/innoexpomember@gmail.com`; complete FormSubmit's one-time activation email before launch.
- Payment/checkout code: none found in the current repository.
