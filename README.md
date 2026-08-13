# Helen McClurg Make Up — website

Static site. No build step, no dependencies. Upload the whole folder to any
host (Netlify, Vercel, Cloudflare Pages, or normal FTP) and it works.

## Files

```
index.html        Home
about.html        About Helen
services.html     Services, process and bridal FAQs
gallery.html      Brides / bridal party / bridal looks
enquire.html      Bridal enquiry form
assets/styles.css All styling
assets/content.js Photos, reviews, venues, FAQs  ← the only file you normally edit
assets/site.js    Loader, menu, carousel, FAQ, form
images/           Put Helen's photographs here
```

Keep the folder structure intact. Opening `index.html` on its own without the
`assets` folder beside it will show unstyled text.

## Adding photographs

1. Drop the files into `images/`.
2. Open `assets/content.js` and fill in the `IMAGES` list, e.g.
   `'hero': 'images/hero.jpg',`

Empty slots show a labelled grey placeholder, so nothing breaks while photos
are still being collected. Priority order: `hero`, then `folio-01` to
`folio-05`, then the three `chapter-` images.

Recommended sizes:
- `hero` and `chapter-*` — landscape, at least 2000px wide
- `folio-*` — portrait, 4:5
- gallery — a mix of portrait and square; the layout staggers them automatically

## Google reviews

In `assets/content.js`, replace the placeholder entries in `REVIEWS` with
Helen's real Google reviews, and set `GOOGLE_REVIEW_URL` to her Google Business
review link. To use a live feed instead, paste the embed code inside
`<div id="reviewsGrid">` on `index.html` and delete the `REVIEWS` array.

## Making the enquiry form send

The form currently validates and shows a confirmation message but does not
send. To make it live, create a free Formspree form and add its endpoint:

```html
<form class="form" id="enquiryForm" action="https://formspree.io/f/XXXXXX" method="POST">
```

Then delete section 7 in `assets/site.js`.

If the site is hosted on Netlify, add `data-netlify="true"` to the form tag
instead and it will work with no third party.

## The loader

Shows once per browser session on the homepage. It clears on page load, with a
2.4 second hard cap and a 5 second final fallback, so it can't get stuck.

## Notes

- No pricing anywhere, per Helen's instruction — quotes are bespoke.
- Bridal make up only; her other Fresha treatments are deliberately not listed.
- The LookFantastic code (LFTFHELENMCCLURG) sits in the dark bar above the footer
  on every page.
