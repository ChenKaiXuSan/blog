# 旭的博客

#### Author: Xu
这里是chenkaixu的博客。  
记录一些心情，记录一些生活的琐事。  

托管在GitHub pages上，模板fork自[TeXt Theme](https://tianqi.name/jekyll-TeXt-theme/)

自己进行了一些改进，之后有时间的话准备在这个基础上开发自己的网站。  
谢谢作者提供的模板。

## Tips
- 运行命令
```
bundle exec jekyll server
```

- 运行后可以看到草稿
```
bundle exec jekyll server --drafts
```
- 当在Gemfile里面添加新的插件时。
```
rm Gemfile.lock
bundle install
```
安装新添加的插件。

- 启用gitalk的时候，需要给每个博客在YAML信息里面添加key值，而且不能重复。本地运行时不会显示评论，只有上传之后才能看到。
```
    https://github.com/ChenKaiXuSan/blog
    例如，上面这样的仓库网址。
    ChenKaiXuSan是owner。GitHub repo是blog。这样配置才对
```