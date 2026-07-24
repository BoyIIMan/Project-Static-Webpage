# Personal Website

Static portfolio site for [Kanaan Wray](https://github.com/BoyIIMan) — projects, blog, resume, and contact. Built with HTML, CSS, and minimal JavaScript. No build step, no backend, no CMS.

**Live site (after deploy):** `https://<username>.github.io/`

---

## Project structure

```
.
├── index.html          # Home
├── about.html
├── projects.html
├── blog.html           # Blog index
├── contact.html
├── resume.html
├── EDITING.md          # How to update content (start here)
├── css/styles.css
├── js/script.js
├── assets/
│   ├── images/
│   └── files/          # e.g. resume.pdf
├── blog/
│   ├── README.md
│   └── posts/          # One HTML file per post
├── .nojekyll           # Disables Jekyll on GitHub Pages
└── README.md
```

All internal links use **relative paths** (e.g. `css/styles.css`, `blog/posts/my-post.html`, `../../blog.html` from posts). That keeps the site working locally, on GitHub Pages user sites, and without a build tool.

---

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
# macOS
open index.html

# optional: simple local server (Python 3)
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Deploy to GitHub Pages (`<username>.github.io`)

This site is meant for a **user site** repository. GitHub serves it at the root of `https://<username>.github.io/` (not under a subpath).

### 1. Create the repository

On GitHub, create a **new public** repository named exactly:

```text
<username>.github.io
```

Replace `<username>` with your GitHub username (e.g. `jane` → `jane.github.io`).

Do **not** add a README, license, or `.gitignore` from GitHub if you already have this project locally—you will push your existing files.

### 2. Push your site to `main`

From this project folder (first time only):

```bash
git init
git add .
git commit -m "Initial site for GitHub Pages"
git branch -M main
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
3. **Branch:** `main` · **Folder:** `/ (root)` → **Save**.

After a minute or two, the site is live at:

```text
https://<username>.github.io/
```

Future updates: commit and push to `main`; Pages redeploys automatically.

### 4. Checklist before you push

| Item | Notes |
|------|--------|
| `index.html` at repo root | Required for the homepage |
| Relative paths only | No leading `/` on local assets (e.g. use `css/styles.css`, not `/css/styles.css`) |
| `.nojekyll` present | Stops Jekyll from processing the repo; keeps `_template.html` and static paths predictable |
| Resume (optional) | Place PDF at `assets/files/resume.pdf` |
| Content guide | See `EDITING.md` for blog, projects, resume, and uploads |

---

## Adding content

See **`EDITING.md`** in the site folder for step-by-step instructions.

- **Blog post:** Copy `blog/posts/_template.html` → new slug file; add a `<li>` at the top of `blog.html`.
- **Project:** Copy `projects/_project-card-snippet.html` into `projects.html`.
- **Resume:** Edit `resume.html`; replace `assets/files/resume.pdf` to update the download.
- **Images / files:** `assets/images/` and `assets/files/`.

---

## Not using `<username>.github.io`?

If you deploy a **project site** instead (repo name `my-site`, URL `https://<username>.github.io/my-site/`), root-relative paths would break and you would need a different setup (e.g. publish only from `/docs` or adjust paths). This project is configured for a **user site** at the domain root—keep the repo name `<username>.github.io` for the simplest deploy.

---

## License

Add a license file if you want one (e.g. MIT). Otherwise, all rights reserved by default.
