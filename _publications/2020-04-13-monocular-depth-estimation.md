---
title: "Monocular Depth Estimation with Self-supervised Instance Adaptation"
collection: publications
permalink: /publication/2020-04-13-monocular-depth-estimation-with-self-supervised-instance-adaptation
venue: 'ArXiv'
date: 2020-04-13
paperurl: 'https://arxiv.org/abs/2004.05821'
---

Recent advances in self-supervised learning have demonstrated that it is possible to learn accurate monocular depth reconstruction from raw video data, without using any 3D ground truth for supervision. However, in robotics applications, multiple views of a scene may or may not be available, depending on the actions of the robot, switching between monocular and multi-view reconstruction. To address this mixed setting, we proposed a new approach that extends any off-the-shelf self-supervised monocular depth reconstruction system to usemore than one image at test time. Our method builds on a standard prior learned to perform monocular reconstruction, but uses self-supervision at test time to further improve the reconstruction accuracy when multiple images are available. When used to update the correct components of the model, this approach is highly-effective. On the standard KITTI bench-mark, our self-supervised method consistently outperforms all the previous methods with an average 25% reduction in absolute error for the three common setups (monocular, stereo and monocular+stereo), and comes very close in accuracy when compared to the fully-supervised state-of-the-art methods.