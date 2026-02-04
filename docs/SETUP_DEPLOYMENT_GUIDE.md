# 🚀 Setup & Deployment Guide

Complete guide for setting up and deploying your personal website.

---

## Table of Contents

1. [Local Development Setup](#local-development-setup)
2. [Customization Guide](#customization-guide)
3. [Deployment Options](#deployment-options)
4. [Performance Optimization](#performance-optimization)
5. [SEO Best Practices](#seo-best-practices)
6. [Troubleshooting](#troubleshooting)

---

## 🖥️ Local Development Setup

### Prerequisites

- Git installed ([Download](https://git-scm.com/))
- Any text editor (VS Code recommended)
- Web browser
- Terminal/Command Prompt

### Step 1: Clone the Repository

```bash
git clone https://github.com/devanjaniraj/anjaniraj.live.git
cd anjaniraj.live
```

### Step 2: Open Locally

**Option A: Simple (No setup needed)**
```bash
# Just double-click index.html
# Works in any browser
```

**Option B: VS Code Live Server**
1. Install [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `index.html` → "Open with Live Server"
3. Browser will open automatically with live reload

**Option C: Python HTTP Server**
```bash
# Python 3
python3 -m http.server 8000

# Python 2 (if needed)
python -m SimpleHTTPServer 8000

# Then visit: http://localhost:8000
```

**Option D: Node.js HTTP Server**
```bash
# Install globally (one time)
npm install -g http-server

# Run in project directory
http-server

# Visit: http://localhost:8080
```

### Step 3: Start Editing

Open `index.html` and other files in your editor and start customizing!

---

## 🎨 Customization Guide

### Essential Files to Update

#### 1. **index.html** - Main Content
```html
<!-- Update these meta tags for SEO -->
<title>Your Name — Personal Website</title>
<meta name="description" content="Brief description of yourself">
<meta name="author" content="Your Name">

<!-- Update your content -->
<h1>Your Name</h1>
<p>Your tagline or profession</p>

<!-- Update social links -->
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
```

#### 2. **styles/style.css** - Styling
```css
/* Update color scheme */
:root {
  --primary-color: #your-color;
  --background-color: #your-bg;
  --text-color: #your-text;
}

/* Modify font if desired */
body {
  font-family: 'Your Font', sans-serif;
}

/* Adjust spacing and sizing */
```

#### 3. **js/script.js** - Interactions
Add any JavaScript functionality you need:
```javascript
// Example: Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
```

#### 4. **assets/** - Media Files
- `images/` - Replace with your photos/graphics
- `icons/` - Custom icons (optional)
- `fonts/` - Local fonts (optional)

### Customization Checklist

```
Essential Updates:
├─ [ ] Page title (in <title> tag)
├─ [ ] Meta description
├─ [ ] Your name and tagline
├─ [ ] Profile photo/image
├─ [ ] Social media links
├─ [ ] Email/contact info
├─ [ ] Bio/about section
└─ [ ] Color scheme

Optional Enhancements:
├─ [ ] Dark mode toggle
├─ [ ] Additional sections
├─ [ ] Contact form
├─ [ ] Animation effects
├─ [ ] Blog section
├─ [ ] Project showcase
└─ [ ] Newsletter signup
```

### Color Scheme Update

**Option 1: CSS Variables (Recommended)**
```css
:root {
  --primary: #0078D4;      /* Main color */
  --secondary: #50E6FF;    /* Accent color */
  --background: #FFFFFF;   /* Background */
  --text: #1F2937;         /* Text color */
  --border: #E5E7EB;       /* Border color */
}
```

**Option 2: Find and Replace**
```css
/* Find all instances of current colors and replace */
/* Example: Replace #0078D4 with your brand color */
```

### Typography Updates

```css
/* Change default font */
body {
  font-family: 'Your Font', sans-serif;
}

/* Update heading styles */
h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
}

/* Adjust spacing */
p {
  line-height: 1.6;
  letter-spacing: 0.5px;
}
```

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

**For a user site (`yourusername.github.io`):**

1. Create new repository named `yourusername.github.io`
2. Push your code to the repository
3. Your site will be live at `https://yourusername.github.io`

```bash
# Steps
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main

# Wait 1-2 minutes for deployment
# Visit: https://yourusername.github.io
```

**For a project site:**

1. Push code to any repository
2. Go to Settings → Pages
3. Select `main` branch as source
4. Your site will be at `https://yourusername.github.io/repo-name`

### Option 2: Custom Domain with GitHub Pages

**Prerequisites:**
- Domain registered (Namecheap, GoDaddy, etc.)
- GitHub Pages setup (see Option 1)

**Steps:**

1. **Add CNAME file** to your repository:
```
yourdomain.com
```

2. **Configure DNS** at your domain provider:
   - **For subdomain** (e.g., www.yourdomain.com):
     ```
     CNAME: yourusername.github.io
     ```
   - **For root domain** (e.g., yourdomain.com):
     ```
     A Record: 185.199.108.153
     A Record: 185.199.109.153
     A Record: 185.199.110.153
     A Record: 185.199.111.153
     ```

3. **Verify in GitHub:**
   - Go to Settings → Pages
   - Should show "DNS configured"

4. **Enable HTTPS** (automatic after DNS setup):
   - Settings → Pages → Enforce HTTPS

### Option 3: Netlify

**Free deployment with automatic HTTPS:**

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Configure build settings (leave blank for static sites)
6. Deploy!

**Advantages:**
- Easy custom domain setup
- Automatic HTTPS
- Free SSL certificates
- Form handling available

### Option 4: Vercel

**Alternative to Netlify:**

1. Create account at [Vercel](https://vercel.com)
2. Connect GitHub repository
3. Click "Deploy"
4. Your site is live

---

## ⚡ Performance Optimization

### Image Optimization

**Compress images:**
```bash
# Using ImageOptim (Mac)
# Using TinyPNG online tool
# Using CLI tools like imagemin
npm install -g imagemin-cli
imagemin assets/images/* --out-dir assets/images/optimized
```

**Use modern formats:**
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

**Lazy loading:**
```html
<img src="image.jpg" alt="Description" loading="lazy">
```

### Code Optimization

**Minify CSS and JavaScript:**
```bash
# Using online tools or build tools
# Or manually clean up code
```

**Remove unused CSS:**
```bash
npm install -g purgecss
purgecss --css styles/style.css --content index.html
```

**Lazy load non-critical resources:**
```javascript
// Load fonts with async
const link = document.createElement('link');
link.href = 'fonts.css';
link.rel = 'stylesheet';
document.head.appendChild(link);
```

### Performance Checklist

- [ ] Images are optimized (< 100KB each)
- [ ] CSS is minified
- [ ] JavaScript is minified
- [ ] Unused CSS is removed
- [ ] Fonts are subset or system fonts
- [ ] No render-blocking resources
- [ ] Images use WebP format
- [ ] Lazy loading implemented
- [ ] Cache headers configured
- [ ] Gzip compression enabled

**Test performance:**
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 🔍 SEO Best Practices

### Essential SEO Setup

**1. Meta Tags** (in `<head>`):
```html
<!-- Essential -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Your site description (150-160 chars)">
<meta name="keywords" content="keyword1, keyword2, keyword3">

<!-- Author & Copyright -->
<meta name="author" content="Your Name">
<meta name="copyright" content="© 2026 Your Name">

<!-- Open Graph (Social Media) -->
<meta property="og:title" content="Your Name">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yoursite.com/image.jpg">
<meta property="og:url" content="https://yoursite.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Name">
<meta name="twitter:description" content="Your description">
<meta name="twitter:image" content="https://yoursite.com/image.jpg">
```

**2. Semantic HTML:**
```html
<!-- Good semantic structure -->
<header>
  <nav>Navigation</nav>
</header>

<main>
  <article>
    <h1>Page Title</h1>
    <section>Content</section>
  </article>
</main>

<footer>Footer</footer>
```

**3. Schema Markup:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "description": "Your profession",
  "url": "https://yoursite.com",
  "sameAs": [
    "https://github.com/yourprofile",
    "https://linkedin.com/in/yourprofile"
  ]
}
</script>
```

**4. Robots & Sitemap:**
```
robots.txt:
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

```xml
<!-- sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2026-02-04</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

**5. SEO Checklist:**
- [ ] Unique, descriptive page title
- [ ] Meta description (150-160 chars)
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] Alt text on images
- [ ] Internal links with descriptive anchor text
- [ ] External links to authority sites
- [ ] Mobile responsive
- [ ] Fast loading speed
- [ ] HTTPS enabled
- [ ] Schema markup added
- [ ] Sitemap.xml created
- [ ] robots.txt configured
- [ ] Google Analytics setup
- [ ] Google Search Console verification

---

## 🐛 Troubleshooting

### Issue: Site won't load locally

**Solution 1:** Use a local server
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

**Solution 2:** Check file paths
- Use relative paths: `./styles/style.css`
- Not absolute paths: `/styles/style.css`

### Issue: Styles not loading

**Checklist:**
- [ ] CSS file path is correct
- [ ] File name matches exactly (case-sensitive)
- [ ] Browser cache is cleared (Ctrl+Shift+Delete)
- [ ] Link tag is in `<head>` section

```html
<!-- Correct -->
<link rel="stylesheet" href="./styles/style.css">

<!-- Check if file exists at that path -->
```

### Issue: Images not showing

**Checklist:**
- [ ] Image file exists in assets/images/
- [ ] File name and extension are correct
- [ ] Path is correct and relative
- [ ] Image format is supported (JPG, PNG, WebP)

```html
<!-- Correct -->
<img src="./assets/images/photo.jpg" alt="Photo">

<!-- Verify path -->
```

### Issue: GitHub Pages not deploying

**Checklist:**
- [ ] Repository name is `yourusername.github.io`
- [ ] Code is pushed to `main` branch
- [ ] Settings → Pages shows "Published"
- [ ] Wait 1-2 minutes for deployment
- [ ] Clear browser cache

### Issue: Custom domain not working

**Checklist:**
- [ ] CNAME file exists with your domain
- [ ] DNS records are configured correctly
- [ ] Wait 24-48 hours for DNS propagation
- [ ] HTTPS is enabled in Settings → Pages

```bash
# Check DNS propagation
dig yourdomain.com
nslookup yourdomain.com
```

### Issue: Slow loading performance

**Steps:**
1. Optimize images (reduce size)
2. Minify CSS and JavaScript
3. Remove unused code
4. Enable browser caching
5. Use CDN for assets (optional)

**Test:** [Google PageSpeed Insights](https://pagespeed.web.dev/)

---

## 📚 Additional Resources

### Learning Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web Dev Fundamentals](https://web.dev/)

### Tools
- [VS Code](https://code.visualstudio.com/) - Code editor
- [GitHub Desktop](https://desktop.github.com/) - Git GUI
- [Netlify](https://netlify.com/) - Hosting
- [Google Domains](https://domains.google/) - Domain registration

### SEO Tools
- [Google Search Console](https://search.google.com/search-console/)
- [Google Analytics](https://analytics.google.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

<div align="center">

**Need help?** [Open an issue](https://github.com/devanjaniraj/anjaniraj.live/issues) or [start a discussion](https://github.com/devanjaniraj/anjaniraj.live/discussions)

</div>
