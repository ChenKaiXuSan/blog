---
title: "Sports Analytics & Multi-View 3D Human Pose"
excerpt: "Body-centered 3D motion analysis from mobile and uncalibrated camera views, with an emphasis on real-world skiing."
collection: research
order: 2
---

## Research Overview

Quantitative sports analysis requires reliable measurements of posture and motion, even when athletes move rapidly through large outdoor environments. Fixed calibrated cameras are often impractical in these settings, and monocular 3D pose estimates can suffer from depth ambiguity, occlusion, and jitter.

My current work develops **calibration-free, human-centric fusion** of multiple independently estimated 3D pose streams. By normalizing poses to a shared body-centered representation and combining complementary viewpoints, the goal is to recover more consistent joint motion without assuming a fixed camera rig or known camera geometry at the fusion stage.

### Skiing Motion Analysis

For **outdoor skiing**, I study moving-camera video processing, cross-view pose alignment, confidence-aware fusion, and temporal refinement. The broader objective is to enable quantitative analysis of body posture, joint kinematics, and movement technique under realistic capture conditions.

### Publication

- **CanonFuse3D (MMSports 2026, accepted):** *Human-Centric Canonical Fusion for Calibration-Free Dual-View 3D Pose Estimation in Skiing Videos.* [Paper on OpenReview](https://openreview.net/forum?id=3wYSjU8saK) · [ACM Multimedia 2026 program](https://2026.acmmm.org/site/technical-programme.html)

This work is ongoing; evaluation protocols and recording setups continue to be refined for robust outdoor motion analysis.
