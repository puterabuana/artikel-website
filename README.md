# 🌟 LumaPost — Premium Static Article Website

A beautiful, fast, SEO-ready static article website built with HTML, Tailwind CSS CDN, and vanilla JavaScript.
No WordPress. No backend. No database. Hosted free on Cloudflare Pages.

---

## 📁 Folder Structure

```
lumapost/
├── index.html                          ← Homepage (edit this to add article cards)
├── sitemap.xml                         ← SEO sitemap (add URLs when you publish articles)
├── robots.txt                          ← Search engine instructions
│
├── css/
│   └── style.css                       ← All custom styles (dark theme, cards, animations)
│
├── js/
│   └── main.js                         ← Navbar scroll, search toggle, filter, back-to-top
│
├── images/
│   ├── favicon.svg                     ← Site favicon (SVG, auto-renders in browser)
│   ├── featured-thumb.jpg              ← Hero featured article thumbnail (1200×600px)
│   ├── thumb-website.jpg               ← Article card thumbnail (600×400px)
│   ├── thumb-seo.jpg
│   └── ...your-other-thumbnails.jpg
│
└── artikel/
    ├── TEMPLATE-ARTIKEL/
    │   └── index.html                  ← ⭐ COPY THIS for every new article
    │
    ├── cara-membuat-website-gratis/
    │   ├── index.html                  ← Page 1
    │   └── page-2.html                 ← Page 2
    │
    └── tips-seo-2025/
        └── index.html
```

---

## ➕ How to Add a New Article (3 steps)

### Step 1 — Create the article folder & file
```
Copy:  artikel/TEMPLATE-ARTIKEL/index.html
Paste: artikel/your-article-title/index.html
```

### Step 2 — Edit the article file
Open the new `index.html` and change these sections (marked with `← Edit`):
- `<title>` and all meta tags at the top
- Breadcrumb category
- `badge-category` label
- Date in the meta row
- `<h1>` article title
- Lead paragraph
- Author name and role
- Hero image `src` and `alt`
- The full article body inside `<div class="article-body">`
- Related article cards at the bottom

### Step 3 — Add a card on the homepage
Open `index.html`, find the comment:
```html
<!-- ➕ PASTE YOUR 50 ARTICLE CARDS BELOW THIS COMMENT -->
```
Copy any existing article card block and paste it there. Edit:
- `data-category="technology"` → your category
- `href="artikel/your-article-title/index.html"`
- `img src="images/your-thumb.jpg"`
- Date, read time, title, description

---

## 🏷️ Category Values (for data-category and filter buttons)

| Display Label | data-category value |
|---------------|---------------------|
| All           | all                 |
| Technology    | technology          |
| Design        | design              |
| Productivity  | productivity        |
| Lifestyle     | lifestyle           |

To add a new category:
1. Add a filter button in `index.html`: `<button class="filter-btn" data-filter="finance">Finance</button>`
2. Use `data-category="finance"` on your article cards

---

## 🖼️ Image Guidelines

| Image Type       | Recommended Size | Location              |
|------------------|------------------|-----------------------|
| Featured hero    | 1200 × 600 px    | `images/featured-thumb.jpg` |
| Article card     | 600 × 400 px     | `images/thumb-NAME.jpg`     |
| Article hero     | 1200 × 600 px    | `images/thumb-NAME.jpg`     |
| Related thumb    | 200 × 200 px     | same file, just displays smaller |
| OG/Twitter image | 1200 × 630 px    | `images/og-image.jpg`       |

**Format:** WebP preferred (smaller file size). JPG as fallback.
**Naming:** Use lowercase, hyphens only. Example: `thumb-how-to-learn-python.jpg`

---

## 🚀 Deploy to Cloudflare Pages (Free)

1. Push this entire folder to a GitHub repository
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click **Create a project → Connect to Git**
4. Select your GitHub repository
5. Leave build settings empty (pure static, no build needed)
6. Click **Save and Deploy**

Your site will be live at `your-project.pages.dev` in ~30 seconds.
Every `git push` auto-redeploys the site.

---

## 🔗 Custom Domain (Optional)

1. Buy a domain (Niagahoster, Namecheap, Cloudflare Registrar)
2. In Cloudflare Pages → your project → **Custom domains**
3. Add your domain and follow the DNS instructions

---

## 📝 SEO Checklist for Each Article

- [ ] Unique `<title>` (50–60 chars)
- [ ] Unique `<meta name="description">` (150–160 chars)
- [ ] `<link rel="canonical">` pointing to correct URL
- [ ] Open Graph tags filled in
- [ ] Twitter Card tags filled in
- [ ] `article:published_time` date correct
- [ ] `<h1>` matches the title (only one h1 per page)
- [ ] Hero image has descriptive `alt` text
- [ ] Add URL to `sitemap.xml`
- [ ] Internal links to related articles

---

## 🎨 Customizing the Brand

**Site name:** Search and replace `LumaPost` across all files.

**Colors (css/style.css):**
```css
:root {
  --gold-400: #e8c24a;   /* primary accent — change to your brand color */
  --gold-500: #c9a227;   /* darker accent */
  --ink-900:  #0a0a0b;   /* main background */
}
```

**Fonts:** Edit the Google Fonts `<link>` in `<head>` and update `tailwind.config` fontFamily.

---

## ⚡ Performance Tips

- Always use `loading="lazy"` on article card images
- Use `loading="eager"` only on the hero image (above the fold)
- Convert images to WebP format for 30–50% smaller file sizes
- Cloudflare automatically minifies HTML/CSS/JS and serves from global CDN

---

Built with ❤️ using HTML · Tailwind CSS CDN · Vanilla JavaScript
