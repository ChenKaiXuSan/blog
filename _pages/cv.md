---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Research Profile

Researcher at the **Center for Computational Sciences, University of Tsukuba**. My research covers computer vision, deep learning, human motion analysis, medical gait assessment, and multi-view 3D human pose estimation.

## Education

- **Ph.D. in Engineering**, University of Tsukuba, Japan (Apr 2022 – Mar 2025). International Master's/Doctoral Program in Intelligent and Mechanical Interaction Systems (IMIS). Supervisor: Prof. Yoshihiro Kuroda.
- **M.Eng.**, Kanazawa University, Japan (Apr 2020 – Mar 2022).
- **B.Eng. in Computer Science and Technology**, Inner Mongolia University of Technology, China (Sep 2014 – Jun 2018).

## Professional Experience

- **Researcher**, Center for Computational Sciences, University of Tsukuba (Apr 2025 – Present). Video-based clinical gait analysis, interpretable motion models, and multi-view 3D human motion for sports analysis.
- **AI Intern**, GHELIA Inc. (Jun 2023 – Apr 2025). Research and development in computer vision and pattern recognition.
- **AI Intern**, RICOH Company, Ltd. (Feb – Apr 2024). Applied computer vision and machine learning research.
- **AI Intern**, Toshiba Corporation (Aug – Oct 2023). Applied AI and computer vision prototyping.
- **Web Application Engineer Intern**, Rakuten Group, Inc. (Jul – Aug 2023). Web application development.
- **Java Software Engineer**, Accenture, Shanghai (Jul 2018 – Apr 2019). Enterprise software development.

## Research Highlights

- **Clinical gait assessment:** Video-based adult spinal deformity classification with spatiotemporal modeling, periodic motion fusion, and clinical knowledge-guided attention.
- **3D pose estimation:** Calibration-free, human-centric fusion of 3D pose streams from multiple moving camera views for outdoor skiing.
- **Medical navigation:** Collaborative work on CNN-based identification of surgical tool–tissue contact for incision trajectory tracing.
- **Driver behavior:** Multi-view analysis of compensatory head movement under simulated restricted visibility (ongoing research).

## Technical Skills

- **Programming:** Python, Java
- **Machine learning:** PyTorch, PyTorch Lightning, scikit-learn, Hugging Face
- **Computer vision:** Human pose estimation, multi-view geometry, video understanding, medical motion analysis
- **Tools:** Linux, Docker, Git, pandas

## Languages

Chinese (native) · English (fluent) · Japanese (advanced)

## Publications

{% assign cv_papers = site.publications | sort: "date" | reverse %}
<ul class="cv-publications">
{% for paper in cv_papers %}
  <li><a href="{{ base_path }}{{ paper.url }}">{{ paper.title }}</a>. <em>{{ paper.venue }}</em>, {{ paper.date | date: "%Y" }}{% if paper.status == "accepted" %} (accepted){% endif %}.</li>
{% endfor %}
</ul>
