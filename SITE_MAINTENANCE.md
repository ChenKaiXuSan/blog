# Academic website maintenance

This repository is a customized, lightweight Jekyll/AcademicPages website.

## Branches and GitHub Pages

- `academic`: preserved pre-redesign version. Do not delete or rewrite it.
- `academic-lite`: streamlined version maintained as the intended GitHub Pages publishing branch.
- GitHub Pages must be set to **Deploy from a branch → academic-lite → /(root)** in [Settings → Pages](https://github.com/ChenKaiXuSan/blog/settings/pages). This is a repository setting, not a Jekyll file.
- To return to the older site, choose `academic` in GitHub Pages Settings and save. Changing the GitHub repository's default branch is not necessary.

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
