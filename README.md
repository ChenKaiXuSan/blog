# Chen's Blog

Welcome to my personal blog.  
Here, I write about everyday thoughts, life moments, and whatever else I feel like sharing.

This site is hosted on **GitHub Pages** and originally forked from the excellent [TeXt Theme](https://github.com/kitian616/jekyll-TeXt-theme).

I've made some personal modifications, and someday I plan to build my own theme based on this foundation.  
Many thanks to the original author for providing such a great starting point.

---

## 🛠️ Tips & Notes

- Start the local development server:
  ```bash
  bundle exec jekyll server
  ```

- To preview draft posts locally:
  ```bash
  bundle exec jekyll server --drafts
  ```

- When adding new plugins to the `Gemfile`, run the following:
  ```bash
  rm Gemfile.lock
  bundle install
  ```

- If you're using **Gitalk** for comments, make sure each post includes a unique `key` in the YAML front matter.  
  Note: Comments won't show when running locally — they only appear after deploying the site.

  Example repository settings:
  ```
  Repository URL: https://github.com/ChenKaiXuSan/blog
  Owner: ChenKaiXuSan
  Repo Name: blog
  ```
  Be sure to set these correctly in your Gitalk configuration.

---