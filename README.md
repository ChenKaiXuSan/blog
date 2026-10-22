# Kaixu Chen — Academic Website

**Personal academic website of Kaixu Chen (陈凯旭)**  
Researcher, [Center for Computational Sciences (CCS)](https://www.ccs.tsukuba.ac.jp/eng/), University of Tsukuba, Japan.

[**Visit Website**](https://chenkaixusan.github.io/blog/) · [Research](https://chenkaixusan.github.io/blog/research/) · [Publications](https://chenkaixusan.github.io/blog/publications/) · [Academic CV](https://chenkaixusan.github.io/blog/cv/) · [Google Scholar](https://scholar.google.com/citations?user=kpNboagAAAAJ)

This repository contains the source of my academic website, built with **Jekyll** and [AcademicPages](https://github.com/academicpages/academicpages.github.io) and hosted on **GitHub Pages**. It presents my research, publications, academic background, and writing.

个人学术网站，介绍计算机视觉、人体运动分析、医学人工智能方面的研究，以及论文与学术履历。

## Research Areas

- **Clinical Gait Analysis & Medical AI:** Video-based assessment of adult spinal deformity, spatiotemporal modeling, and clinically guided attention.
- **Sports Analytics & 3D Human Pose:** Multi-view motion understanding and calibration-free pose fusion, particularly for outdoor skiing.
- **Driver Behavior & Human-Centered Vision:** Analysis of head movements and visual scanning under restricted visibility.
- **Haptic & Multisensory Interaction:** Collaborative research linking visual understanding with physical feedback.

For current projects and results, visit the [Research](https://chenkaixusan.github.io/blog/research/) and [Publications](https://chenkaixusan.github.io/blog/publications/) pages.

## Repository Structure

| Path | Purpose |
| --- | --- |
| `_pages/about.md` | Homepage and recent news |
| `_pages/cv.md` | Academic CV |
| `_publications/` | Journal and conference publication entries |
| `_research/` | Research area descriptions |
| `_posts/` | Blog posts and archives |
| `_config.yml` | Jekyll configuration and author links |
| `_data/navigation.yml` | Header navigation |
| `images/`, `files/`, `assets/` | Images, publication PDFs, and site assets |

Most updates only require editing Markdown files. Publication entries use YAML front matter; keep their `category` values consistent with the existing journal (`journals`) and conference (`conferences`) records. Mark accepted-but-not-yet-published papers accordingly.

## Local Preview

Requires **Ruby**, **Bundler**, and **Git**.

```bash
git clone https://github.com/ChenKaiXuSan/blog.git
cd blog
bundle install
bundle exec jekyll serve
```

Open **http://localhost:4000/blog/**. The `/blog` path comes from `baseurl` in `_config.yml`.

If Ruby gem installation encounters a permissions error, install dependencies within the project instead:

```bash
bundle config set --local path vendor/bundle
bundle install
```

Alternatively, the repository includes a `Dockerfile` and `docker-compose.yaml` for container-based development; these are optional.

## Publishing

The **`academic`** branch is the source for GitHub Pages. Content changes pushed to that branch are built and deployed to:

**https://chenkaixusan.github.io/blog/**

Check deployment results under [GitHub Actions](https://github.com/ChenKaiXuSan/blog/actions). The published website uses the original AcademicPages layout.

## Credits and License

The website is adapted from [AcademicPages](https://github.com/academicpages/academicpages.github.io), which builds on the [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) Jekyll theme. The included [MIT license](LICENSE) retains the original theme copyright notice.

Research articles, figures, and third-party materials remain subject to their respective authors' and publishers' rights.

## Contact

[Email](mailto:chenkaixusan@gmail.com) · [Google Scholar](https://scholar.google.com/citations?user=kpNboagAAAAJ) · [ORCID](https://orcid.org/0009-0003-8698-8899) · [GitHub](https://github.com/ChenKaiXuSan)
