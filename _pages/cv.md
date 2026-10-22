---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Academic Appointment

**Researcher**, [Center for Computational Sciences (CCS)](https://www.ccs.tsukuba.ac.jp/eng/), University of Tsukuba, Japan  
*April 2025 – Present*

Research on computer vision and machine learning for video-based clinical gait assessment, sports motion analysis, and multi-view 3D human pose estimation.

## Education

- **Ph.D. in Engineering**, University of Tsukuba, Japan, *April 2022 – March 2025*  
  International Master's/Doctoral Program in Intelligent and Mechanical Interaction Systems (IMIS).  
  **Dissertation:** *A Study on Classifying Gait Impairment through Spatiotemporal Analysis of Video*.  
  **Supervisor:** Prof. Yoshihiro Kuroda.
- **M.Eng. in Engineering**, Kanazawa University, Japan, *April 2020 – March 2022*.
- **B.Eng. in Computer Science and Technology**, Inner Mongolia University of Technology, China, *September 2014 – June 2018*.

## Research Interests

Computer vision; human motion analysis; video understanding; multi-view 3D human pose estimation; medical image and video analysis; deep learning for sports and healthcare.

## Publications

Peer-reviewed journal articles and conference papers are listed below, most recent first within each category. The list is generated from the site's publication records; **my name is emphasized** in the citations.

{% assign sorted_publications = site.publications | sort: 'date' | reverse %}

### Journal Articles

<ol>
{% for post in sorted_publications %}
{% if post.category == 'journals' %}
{% assign paper_citation = post.citation | default: post.title %}
{% assign paper_citation = paper_citation | replace: 'Chen K X', '<strong>Chen K X</strong>' | replace: 'Chen K,', '<strong>Chen K</strong>,' | replace: 'K. Chen', '<strong>K. Chen</strong>' %}
<li>{{ paper_citation }} {% if post.paperurl %}<a href="{{ post.paperurl }}">[Paper]</a>{% endif %} <a href="{{ base_path }}{{ post.url }}">[Details]</a></li>
{% endif %}
{% endfor %}
</ol>

### Conference Papers

<ol>
{% for post in sorted_publications %}
{% if post.category == 'conferences' %}
{% assign paper_citation = post.citation | default: post.title %}
{% assign paper_citation = paper_citation | replace: 'Chen K X', '<strong>Chen K X</strong>' | replace: 'Chen K,', '<strong>Chen K</strong>,' | replace: 'K. Chen', '<strong>K. Chen</strong>' %}
<li>{{ paper_citation }} {% if post.status == 'accepted' %}<em>(Accepted; forthcoming.)</em>{% endif %} {% if post.paperurl %}<a href="{{ post.paperurl }}">[Paper]</a>{% endif %} <a href="{{ base_path }}{{ post.url }}">[Details]</a></li>
{% endif %}
{% endfor %}
</ol>

For the latest bibliographic information, see my [Google Scholar profile]({{ site.author.googlescholar }}).

## Research Support

- **FY2025 — Young Researcher Support Program (First Call)**, Cybermedicine Research Center, University of Tsukuba. Research support awarded: **¥1,000,000**.

## Selected Research Projects

- **Interpretable clinical gait analysis:** Video-based adult spinal deformity assessment using phase-aware motion representations and clinical knowledge-guided attention, including *PhaseMix*, *FilterNet*, and related clinical gait studies.
- **3D human motion analysis for outdoor skiing:** Human-centric canonicalization and calibration-free dual-view 3D pose fusion from moving-camera video (*CanonFuse3D*, MMSports 2026, accepted).
- **Compensatory head motion during driving:** Multi-view analysis of head movement and visual-scanning behavior under simulated visual-field limitations (*ongoing*).
- **Image-guided electrosurgical navigation:** Collaborative work on CNN-based identification of instrument–tissue contact frames for tracing incision trajectories.

## Industry Experience

- **Artificial Intelligence Intern**, GHELIA Inc., Japan — *June 2023 – April 2025*. Computer vision and pattern recognition research and development.
- **Artificial Intelligence Intern**, RICOH Company, Ltd., Japan — *February – April 2024*. Applied computer vision and machine learning.
- **Artificial Intelligence Intern**, Toshiba Corporation, Japan — *August – October 2023*. AI and computer vision prototyping with Python and PyTorch.
- **Web Application Engineer Intern**, Rakuten Group, Inc., Japan — *July – August 2023*. Web application development.
- **Java Software Engineer**, Accenture (Shanghai), China — *July 2018 – April 2019*. Enterprise software development.

## Technical Skills

- **Programming:** Python, Java.
- **Deep learning and data science:** PyTorch, PyTorch Lightning, Hugging Face, scikit-learn, pandas.
- **Computer vision:** Spatiotemporal video models, 2D/3D human pose estimation, multi-view geometry, and motion analysis.
- **Tools and computing:** Git, Docker, Linux.

## Languages

- **Chinese (Mandarin):** Native.
- **English:** Fluent.
- **Japanese:** Advanced.
