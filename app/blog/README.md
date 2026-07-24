# Blog (static HTML)

No CMS or backend. Each post is a standalone HTML file; `blog.html` at the site root is the index.

**Full site update guide:** see `../EDITING.md` (contact info, projects, resume, uploads).

## Add a new post

1. Copy `blog/posts/_template.html` to `blog/posts/your-slug.html` (kebab-case filename).
2. Update metadata in the post file:
   - `<title>` and `<meta name="description">`
   - `<time datetime="YYYY-MM-DD">` and visible date
   - `<h1 class="post-title">`
   - `<ul class="post-tags">` list items
   - Body content inside `.post-body`
3. Add a new `<li>` at the **top** of the list in `blog.html` (newest first).
4. Keep dates and tags in sync between the index and the post.

## Files

| File | Purpose |
|------|---------|
| `blog/posts/_template.html` | Reusable template (not linked from index) |
| `blog/posts/*.html` | Published posts |

Paths from posts use `../../` to reach site root assets (`css/`, `js/`, other pages).

## GitHub Pages

Posts and assets use relative paths so they work at `https://<username>.github.io/` when the repo is named `<username>.github.io`. See the root `README.md` for deploy steps.
