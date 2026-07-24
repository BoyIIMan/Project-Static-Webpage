# How to update this site

Static HTML site — no CMS. Edit files in your editor, commit, and push to redeploy on GitHub Pages.

## Site-wide contact info (update everywhere)

When you change email, GitHub, or LinkedIn, search the `app/` folder for these values and update each match:

| Field | Current value |
|-------|----------------|
| **Email** | `kanaanwray@gmail.com` |
| **GitHub username** | `BoyIIMan` → `https://github.com/BoyIIMan` |
| **LinkedIn** | `https://www.linkedin.com/in/kanaan-wray-a2bbb0235/` |

**Files that include footer / social links:**

- `index.html` (hero buttons + footer)
- `about.html`, `contact.html`, `resume.html`, `projects.html`, `blog.html`
- `blog/posts/*.html` and `blog/posts/_template.html`

Look for HTML comments: `<!-- EDIT: Site-wide ... -->`

---

## Resume

| What | Where |
|------|--------|
| **Web page (formatted text)** | Edit `resume.html` |
| **PDF download** | Replace `assets/files/resume.pdf` (same filename keeps links working) |

After updating the PDF, refresh the “Download PDF” link on `resume.html` if you rename the file.

---

## Blog posts

1. Copy `blog/posts/_template.html` → `blog/posts/your-slug.html` (kebab-case).
2. Fill in `POST_TITLE`, `POST_DESCRIPTION`, date, tags, and body (see comments in the template).
3. Add a new `<li>` at the **top** of the list in `blog.html` (newest first).

Details: `blog/README.md`

---

## Projects

1. Open `projects.html`.
2. Find `<!-- ADD PROJECT: copy from projects/_project-card-snippet.html -->`.
3. Paste a new `<article class="card project-card">` block and fill in title, description, tech stack, GitHub URL, optional demo link.
4. Optionally duplicate a featured card on `index.html` under `<!-- EDIT: Featured projects -->`.

Snippet file: `projects/_project-card-snippet.html`

---

## Images & uploads

| Type | Folder | Example path in HTML |
|------|--------|----------------------|
| Photos, avatars, thumbnails | `assets/images/` | `assets/images/avatar.jpg` |
| PDFs, downloads | `assets/files/` | `assets/files/resume.pdf` |

Drop files into those folders, then reference them with **relative** paths from the page you edit (`../../assets/...` from blog posts).

---

## About page

Edit `about.html`:

- `<!-- EDIT: Bio -->` — introduction paragraphs
- `<!-- EDIT: Skills -->` — `<li>` items in `.skill-list`
- `<!-- EDIT: Interests -->` — interests section

---

## Quick checklist for a new blog post

- [ ] New file in `blog/posts/`
- [ ] New entry at top of `blog.html`
- [ ] Post footer links match site-wide URLs (or copy from `_template.html` after you update it)
