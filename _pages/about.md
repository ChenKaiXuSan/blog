---
permalink: /
title: Home
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<section class="home-intro">
  <p class="home-eyebrow">Researcher · Center for Computational Sciences · University of Tsukuba</p>
  <h1>Kaixu Chen</h1>
  <p class="home-tagline">Computer Vision · Human Motion Analysis · Medical AI</p>
  <p>
    I develop robust, interpretable video-based methods for understanding human
    movement, spanning <strong>clinical gait assessment</strong>,
    <strong>sports motion analysis</strong>, and
    <strong>multi-view 3D human pose estimation</strong>.
    I received my Ph.D. in Engineering from the University of Tsukuba in 2025.
  </p>
  <p class="home-action-links">
    <a href="{{ base_path }}/publications/">Publications</a>
    <a href="{{ base_path }}/research/">Research</a>
    <a href="{{ base_path }}/cv/">CV</a>
    <a href="{{ site.author.googlescholar }}">Google Scholar</a>
  </p>
</section>

## Research

{% assign research_topics = site.research | sort: "order" %}
<div class="research-grid">
{% for topic in research_topics %}
  <article class="research-card">
    <h3><a href="{{ base_path }}{{ topic.url }}">{{ topic.title }}</a></h3>
    <p>{{ topic.excerpt }}</p>
  </article>
{% endfor %}
</div>

## Selected Publications

{% assign featured_papers = site.publications | where: "featured", true | sort: "featured_rank" %}
<div class="featured-publications">
{% for paper in featured_papers limit:4 %}
  <article class="featured-publication">
    <h3><a href="{{ base_path }}{{ paper.url }}">{{ paper.title }}</a></h3>
    <p class="pub-venue">{{ paper.venue }} · {{ paper.date | date: "%Y" }}{% if paper.status == "accepted" %} · Accepted{% endif %}</p>
    <p class="paper-links">
      {% if paper.paperurl %}<a href="{{ paper.paperurl }}">Paper</a>{% endif %}
      {% if paper.codeurl %}<a href="{{ paper.codeurl }}">Code</a>{% endif %}
    </p>
  </article>
{% endfor %}
</div>
<p class="section-more"><a href="{{ base_path }}/publications/">View all publications →</a></p>

## News

<ul class="news-list">
{% for item in site.data.news limit:4 %}
  <li><span class="news-date">{{ item.date }}</span> {{ item.text }}{% if item.url %} <a href="{{ item.url }}">{{ item.link_label | default: "Details" }}</a>{% endif %}</li>
{% endfor %}
</ul>
<p class="site-updated">Last updated: October 2026</p>
