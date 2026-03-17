# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

There are no tests configured in this project.

## Architecture

This is a **Next.js 16 App Router** site for ASA Agility, a lithium battery manufacturer/retailer based in Cooch Behar, West Bengal. The site is a marketing/product website targeting e-rickshaw, e-loader, and e-bike battery customers.

### Layout structure

The root layout ([src/app/layout.tsx](src/app/layout.tsx)) wraps all pages with a dark `#141414` background containing:

- `<Navbar />` (fixed, floating pill-style, green `#5C905E`)
- A light `#F7F7F7` content area with `rounded-b-3xl` / `rounded-b-[50px]` that sits above the footer
- `<Footer />` that is revealed by scrolling (sticky footer effect via z-index layering)

The brand color is `#5C905E` (green). Pages use a max-width of `max-w-300` (custom Tailwind value).

### Pages

- `/` — Homepage: Hero → Features → Compare → Reviews → FAQ → CtaBanner sections
- `/products` — Product listing with alternating image/text layout cards
- `/products/e-rickshaw-battery`, `/products/e-loader-battery`, `/products/e-bike-scooty-battery` — Individual product pages using the shared `<ProductDetail>` component
- `/about-us` — About page
- `/contact` — Contact form page
- `/stores` — Physical store locations (data hardcoded in the page file)

### Key components

**[ProductDetail.tsx](src/components/ProductDetail.tsx)** — Reusable product page template. Accepts `variants?: ProductVariant[]` for products with multiple warranty/price options (dropdown selector). Displays floating voltage/capacity specs over the product image.

**[Navbar.tsx](src/components/Navbar.tsx)** — Performance-optimized with `memo`, `useCallback`, `useMemo`. Uses Framer Motion for scroll-based shrinking animation (`headerScale`, `logoScale`). Nav items are defined in `NAV_ITEMS` constant at the top of the file.

### Utility

`src/lib/utils.ts` exports `cn()` — a `clsx` + `tailwind-merge` helper for conditional classNames.

### Styling

- Tailwind CSS v4 (configured via PostCSS, no `tailwind.config.js`)
- Custom animations defined in [globals.css](src/app/globals.css): `animate-fade-in`, `animate-fade-in-up`, `animate-scale-in` with `animation-delay-{100-600}` utilities
- Framer Motion used for Navbar scroll animations and mobile menu transitions

### SEO

Each page exports its own `metadata` object. Global metadata including Open Graph and robots config is in `layout.tsx`. The `NEXT_PUBLIC_SITE_URL` env var sets the metadataBase URL. See [SEO_SETUP.md](SEO_SETUP.md) for configuration steps including Google Search Console verification.

### Adding a new product

1. Create `src/app/products/[slug]/page.tsx`
2. Export `metadata` with `title` and `description`
3. Render `<ProductDetail>` with all required props
4. Add the product entry to the `products` array in `src/app/products/page.tsx`
