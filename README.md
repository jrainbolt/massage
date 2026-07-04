# Stillwater Bodywork

A polished, responsive React + TypeScript website for an independent massage therapy practice. Built as a static Vite app with centralized business details, conditional analytics, accessible navigation, and GitHub Pages support.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Customize the business

Nearly all business-specific content lives in `src/config/`. Edit the focused configuration modules instead of React components:

- `business.ts` — identity, contact details, hours, booking URL, navigation, hero, section and footer copy
- `therapist.ts` — biography, philosophy, experience, quote, and certifications
- `services.ts` — service catalog
- `pricing.ts` — session options, prices, and pricing copy
- `faq.ts` — questions and answers
- `blog.ts` — journal section and preview cards
- `social.ts` — social destinations
- `seo.ts` — title, descriptions, Open Graph data, domain, and structured data
- `analytics.ts` — GA4 Measurement ID and analytics preferences
- `testimonials.ts` — future testimonial content

The default booking link is `https://example.com/book`. Replace `bookingUrl` with an Acuity, Square Appointments, Calendly, or other hosted scheduling URL.

## Google Analytics

Set `measurementId` in `src/config/analytics.ts` to a valid GA4 Measurement ID such as `G-XXXXXXXXXX`. If it is blank, no analytics script is loaded. The helper in `src/analytics.ts` tracks initial page views plus booking, contact, pricing, and service clicks.

## Deploy to GitHub Pages

Deployment is automated by `.github/workflows/deploy-pages.yml`. Every push to `main` installs dependencies, creates the production build, and deploys `dist` with GitHub's official Pages actions.

1. Confirm `vite.config.ts` uses `base: '/repository-name/'` for a project site. This repository uses `base: '/massage/'`.
2. Push the project to the `main` branch.
3. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Open the repository's **Actions** tab to monitor the **Deploy to GitHub Pages** workflow.

You can also run the workflow manually from its Actions page using **Run workflow**.

For a custom domain, add a `CNAME` file to `public/` containing the domain, configure DNS with your provider, update the canonical URLs in `index.html`, `public/robots.txt`, and `public/sitemap.xml`, then enable HTTPS in GitHub Pages settings.

## SEO and accessibility

The project includes semantic sections, heading hierarchy, social meta tags, `robots.txt`, a starter sitemap, keyboard-friendly controls, visible text labels, and reduced-motion support. Before launch, replace all placeholder business data and image metadata, add a real Open Graph image, update domain URLs, and add a complete LocalBusiness schema with verified business information.

## Roadmap

- Gift cards
- Acuity, Square, or Calendly integration
- Custom booking system
- Admin and client portals
- Full blog engine and service detail pages
- Digital intake forms
- Stripe or Square payments
- Local SEO service pages
- Interactive body map
