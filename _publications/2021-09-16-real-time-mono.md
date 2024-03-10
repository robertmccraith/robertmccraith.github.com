---
title: "Real Time Monocular Vehicle Velocity Estimation using Synthetic Data"
collection: publications
permalink: /publication/2021-09-16-real-time-monocular-vehicle-velocity-estimation-using-synthetic-data
date: 2021-09-16
venue: 'IEEE Intelligent Vehicles'
paperurl: 'https://arxiv.org/abs/2109.07957'
---

Vision is one of the primary sensing modalities in autonomous driving. In this paper we look at the problem of estimating the velocity of road vehicles from a camera mounted on a moving car. Contrary to prior methods that train end-to-end deep networks that estimate the vehicles' velocity from the video pixels, we propose a two-step approach where first an off-the-shelf tracker is used to extract vehicle bounding boxes and then a small neural network is used to regress the vehicle velocity from the tracked bounding boxes. Surprisingly, we find that this still achieves state-of-the-art estimation performance with the significant benefit of separating perception from dynamics estimation via a clean, interpretable and verifiable interface which allows us distill the statistics which are crucial for velocity estimation. We show that the latter can be used to easily generate synthetic training data in the space of bounding boxes and use this to improve the performance of our method further.
