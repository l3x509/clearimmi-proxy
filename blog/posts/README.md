# blog/posts/

Markdown source files for posts written through `/admin/` go here, one
`<slug>.md` per post. `scripts/build-blog.js` reads everything in this
directory and renders it into `blog/<slug>.html`.

This directory does not contain the site's 11 original hand-authored
posts — those are plain HTML files directly in `blog/`, edited by hand,
and this pipeline never touches them. See README.md's "Blog build
pipeline" section for the full design.
