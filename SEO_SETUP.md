# SEO Configuration

This Next.js project is configured with SEO best practices.

## Features Implemented

### 1. **Metadata Configuration** (`src/app/layout.tsx`)
- Dynamic title templates
- Comprehensive meta descriptions
- Open Graph tags for social media sharing
- Twitter Card metadata
- Robots meta tags for search engine crawling
- Google Search Console verification support

### 2. **Sitemap** (`src/app/sitemap.ts`)
- Dynamic sitemap generation at `/sitemap.xml`
- Automatically includes all pages with priority and update frequency
- Add new URLs to the sitemap as your site grows

### 3. **Robots.txt** (`public/robots.txt`)
- Allows all search engines to crawl your site
- Points to your sitemap location

### 4. **PWA Manifest** (`src/app/manifest.ts`)
- Progressive Web App support
- App icons configuration
- Accessible at `/manifest.json`

## Configuration Steps

### 1. Update Environment Variables
Edit `.env.local` and set your production URL:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 2. Customize Metadata
Update `src/app/layout.tsx` with your:
- Site title and description
- Keywords
- Social media handles
- Google verification code

### 3. Add Icons
Place the following icon files in the `public` folder:
- `icon-192.png` (192x192px)
- `icon-512.png` (512x512px)
- `favicon.ico`
- `opengraph-image.png` (1200x630px for social sharing)

### 4. Page-Specific SEO
For individual pages, export metadata in each page.tsx:

```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
}
```

## SEO Best Practices Included

✅ Semantic HTML structure
✅ Meta tags for search engines
✅ Open Graph for social media
✅ Twitter Cards
✅ Sitemap for search engines
✅ Robots.txt configuration
✅ Mobile-responsive (via Tailwind)
✅ Fast loading (Next.js optimization)
✅ TypeScript for type safety

## Testing Your SEO

1. **Google Search Console**: Add your site and submit the sitemap
2. **Lighthouse**: Run in Chrome DevTools (target 90+ SEO score)
3. **Social Media Debuggers**:
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator

## Next Steps

- Update `robots.txt` with your production domain
- Add structured data (JSON-LD) for rich snippets
- Implement analytics (Google Analytics, Plausible, etc.)
- Add image alt tags for accessibility and SEO
- Optimize images with Next.js Image component
