# gcalacoci.github.io

Personal website, built with [Hugo](https://gohugo.io/) and the
[Coder](https://github.com/luizdepra/hugo-coder) theme (dark by default).

## Local development

```sh
git clone --recurse-submodules https://github.com/gcalacoci/gcalacoci.github.io.git
cd gcalacoci.github.io
hugo server -D        # http://localhost:1313, live reload
```

Hugo extended is required (version pinned in `.github/workflows/pages-deploy.yml`).

## Content

- `content/posts/` — blog posts (`hugo new posts/my-post.md`)
- `content/talks.md`, `content/resume.md`, `content/about.md` — pages
- YouTube embeds: `{{< youtube VIDEO_ID >}}`

## Deploy

Pushing to `main` builds and deploys via GitHub Actions (GitHub Pages source must be
set to **GitHub Actions** in the repository settings).
