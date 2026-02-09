# Kaixu Chen's Academic Blog

**个人学术博客网站 / Personal Academic Blog and Portfolio**

![Website](https://img.shields.io/website?url=https%3A%2F%2Fchenkaixusan.github.io%2F)
[![GitHub Pages](https://github.com/ChenKaiXuSan/blog/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/ChenKaiXuSan/blog/actions/workflows/pages/pages-build-deployment)

这是一个基于 Jekyll 和 Academic Pages 模板构建的个人学术网站，用于展示研究成果、学术出版物和博客文章。

This is a personal academic website built with Jekyll and the Academic Pages template, showcasing research work, academic publications, and blog posts.

## 🌐 Website

访问网站 / Visit the website: [https://chenkaixusan.github.io/](https://chenkaixusan.github.io/)

## 👤 About

我是陈凯旭（Kaixu Chen），筑波大学的研究员，专注于 AI、深度学习和机器学习在视频和图像处理中的应用。

I am Kaixu Chen, a researcher at the University of Tsukuba, specializing in the application of AI, DL, and ML to video and image processing.

## 📚 Content

本网站包含以下内容 / This website includes:

- 📝 Research Publications / 研究出版物
- 💡 Blog Posts / 博客文章
- 👨‍🔬 Research Projects / 研究项目
- 📊 Academic CV / 学术简历

## 🛠️ Technology Stack

- **Static Site Generator**: Jekyll
- **Template**: Academic Pages
- **Hosting**: GitHub Pages
- **Languages**: HTML, CSS, JavaScript, Markdown

## 🚀 Development Setup

### Local Development

### Prerequisites (先决条件)

1. Clone the repository and make updates as detailed above.

### Using IDE (使用 IDE)
1. Make sure you have ruby-dev, bundler, and nodejs installed
    
    On most Linux distribution and [Windows Subsystem Linux](https://learn.microsoft.com/en-us/windows/wsl/about) the command is:
    ```bash
    sudo apt install ruby-dev ruby-bundler nodejs
    ```
    If you see error `Unable to locate package ruby-bundler`, `Unable to locate package nodejs `, run the following:
    ```bash
    sudo apt update && sudo apt upgrade -y
    ```
    then try run `sudo apt install ruby-dev ruby-bundler nodejs` again.

    On MacOS the commands are:
    ```bash
    brew install ruby
    brew install node
    gem install bundler
    ```
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.

    If you see file permission error like `Fetching bundler-2.6.3.gem ERROR:  While executing gem (Gem::FilePermissionError) You don't have write permissions for the /var/lib/gems/3.2.0 directory.` or `Bundler::PermissionError: There was an error while trying to write to /usr/local/bin.`
    Install Gems Locally (Recommended):
    ```bash
    bundle config set --local path 'vendor/bundle'
    ```
    then try run `bundle install` again. If succeeded, you should see a folder called `vendor` and `.bundle`.

1. Run `jekyll serve -l -H localhost` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change to Markdown (*.md) and HTML files, while changes to the core template and configuration (i.e., `_config.yml`) will require stoping and restarting Jekyll.
    You may also try `bundle exec jekyll serve -l -H localhost` to ensure jekyll to use specific dependencies on your own local machine.

If you are running on Linux it may be necessary to install some additional dependencies prior to being able to run locally: `sudo apt install build-essential gcc make`

## 🐳 Using Docker

Working from a different OS, or just want to avoid installing dependencies? You can use the provided `Dockerfile` to build a container that will run the site for you if you have [Docker](https://www.docker.com/) installed.

You can build and execute the container by running the following command in the repository:

```bash
chmod -R 777 .
docker compose up
```

You should now be able to access the website from `localhost:4000`.

### 💻 Using DevContainer in VS Code (在 VS Code 中使用开发容器)

If you are using [Visual Studio Code](https://code.visualstudio.com/) you can use the [Dev Container](https://code.visualstudio.com/docs/devcontainers/containers) that comes with this Repository. Normally VS Code detects that a development container configuration is available and asks you if you want to use the container. If this doesn't happen you can manually start the container by **F1->DevContainer: Reopen in Container**. This restarts your VS Code in the container and automatically hosts your academic page locally on http://localhost:4000. All changes will be updated live to that page after a few seconds.

## 📝 Contributing

本项目基于 [Academic Pages](https://github.com/academicpages/academicpages.github.io) 模板。如需了解更多信息，请访问原始模板仓库。

This project is based on the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template. For more information, please visit the original template repository.

## 📄 License

This repository was forked from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/), which is © 2016 Michael Rose and released under the MIT License (see LICENSE file).

## 🔗 Links

- 🌐 Website: [https://chenkaixusan.github.io/](https://chenkaixusan.github.io/)
- 👨‍💼 LinkedIn: [chenkaixusan](https://linkedin.com/in/chenkaixusan)
- 🐙 GitHub: [@ChenKaiXuSan](https://github.com/ChenKaiXuSan)
- 🎓 Google Scholar: [Profile](https://scholar.google.com/citations?user=kpNboagAAAAJ&hl=zh-CN)
- 🆔 ORCID: [0009-0003-8698-8899](https://orcid.org/0009-0003-8698-8899)

---

<div align="center">
Made with ❤️ using Jekyll and GitHub Pages
</div>
