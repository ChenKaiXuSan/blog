# Academic website maintenance

This repository is a customized, lightweight Jekyll/AcademicPages website.

## Branches and GitHub Pages

- `academic`: main/default and intended GitHub Pages publishing branch, containing the streamlined website.
- `academic-lite`: development branch used to prepare the redesign, retained for reference.
- `academic-backup-2026-10-21`: exact snapshot of the pre-redesign `academic` branch; keep it as a rollback point.
- GitHub Pages should use **Deploy from a branch → academic → /(root)** in [Settings → Pages](https://github.com/ChenKaiXuSan/blog/settings/pages). This is a repository setting, independent of which branch is marked the repository default.
- For rollback, copy the snapshot from `academic-backup-2026-10-21` back onto `academic` (prefer a new reviewable PR) or temporarily select the backup branch in Pages Settings.

## Adding a publication

Add a Markdown file to `_publications/journal/` or `_publications/conference/` with these fields:

```yaml
---
title: "Publication title"
collection: publications
category: journals  # or conferences
permalink: /publication/unique-paper-slug/
date: 2026-10-21
venue: "Publication venue"
paperurl: "https://doi.org/..."
citation: "Full citation"
---
```

The **Publications** and **CV** pages read these entries automatically.
To include a paper on the homepage, add:

```yaml
featured: true
featured_rank: 1
```

Optionally add `codeurl: "https://github.com/..."`. Choose distinct featured ranks to control the homepage order.

## Updating news

Edit `_data/news.yml`. Entries must be **newest first**; the homepage displays up to four automatically.

## Styling and scripts

- `assets/css/main.scss`: AcademicPages Sass imports and small site overrides.
- `assets/js/site.js`: the dependency-free navigation/theme/sidebar script.
- No npm bundling is required.
- MathJax/Mermaid are only requested on pages with matching content or explicit `math: true` / `mermaid: true` front matter.

## Validation

The `Validate academic website` GitHub Actions workflow runs on pushes to `academic-lite`; run it manually from the Actions tab if needed. It builds the Jekyll site and checks the critical pages.
