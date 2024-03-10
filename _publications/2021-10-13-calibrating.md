---
title: "Calibrating Self-supervised Monocular Depth Estimation"
collection: publications
permalink: /publication/2021-10-13-calibrating
date: 2021-10-13
venue: 'NeurIPS Workshop on Machine Learning for Autonomous Driving (ML4AD)'
paperurl: 'https://arxiv.org/abs/2004.05821'
---

 In the recent years, many methods demonstrated the ability of neural networks to learn depth and pose changes in a sequence of images, using only self-supervision as the training signal. Whilst the networks achieve good performance, the often over-looked detail is that due to the inherent ambiguity of monocular vision they predict depth up to an unknown scaling factor. The scaling factor is then typically obtained from the LiDAR ground truth at test time, which severely limits practical applications of these methods. In this paper, we show that incorporating prior information about the camera configuration and the environment, we can remove the scale ambiguity and predict depth directly, still using the self-supervised formulation and not relying on any additional sensors.