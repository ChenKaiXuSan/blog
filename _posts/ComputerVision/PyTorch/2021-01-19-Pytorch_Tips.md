---
title: Pytorch Tips
tags: [ComputerVision, PyTorch]
---

记录一下是用pytorch中发现的小技巧。

### 2021年01月19日 18:50:01
- .size() vs .shape, which one should be used?
  .shape is an alias for .size(), and was added to more closely match numpy
- range()显示的是一个范围，从开始到结束。只有放到list中才会显示所有生成的数。
  list(range(0, 5, 1)) #从0~4，步长1

### 2021年01月20日 11:56:07
- torch.randn 和 torch.rand 的区别
  - torch.randn
  Returns a tensor filled with random numbers from a normal distribution with mean 0 and variance 1 (also called the standard normal distribution).
  - torch.rand
  Returns a tensor filled with random numbers from a uniform distribution on the interval [0, 1)[0,1).The shape of the tensor is defined by the variable argument size.

### 2021年01月25日 11:33:44
- torch.nn.Embedding
A simple lookup table that stores embeddings of a fixed dictionary and size.  
This module is often used to store word embeddings and retrieve them using indices. The input to the module is a list of indices, and the output is the corresponding word embeddings.
- python3 enumerate()
enumerate() 函数用于将一个可遍历的数据对象(如列表、元组或字符串)组合为一个索引序列，同时列出数据和数据下标，一般用在 for 循环当中。
  ```
  >>> seasons = ['Spring', 'Summer', 'Fall', 'Winter']
  >>> list(enumerate(seasons))
  [(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')]
  >>> list(enumerate(seasons, start=1))       # 小标从 1 开始
  [(1, 'Spring'), (2, 'Summer'), (3, 'Fall'), (4, 'Winter')]
  ```
- fill_(value)
Fills self tensor with the specified value.
- torch.tensor.detach()
Returns a new Tensor, detached from the current graph.
The result will never require gradient.
- torch.nn.Upsample()
Upsamples a given multi-channel 1D (temporal), 2D (spatial) or 3D (volumetric) data.

### 2021年01月26日 12:09:26
- torch.nn.BatchNorm1d / torch.nn.BatchNorm2d
It is a method used to make artificial neural networks faster and more stable through normalization of the input layer by re-centering and re-scaling.
  - torch.nn.BatchNorm2d: Applies Batch Normalization over a 4D input (a mini-batch of 2D inputs with additional channel dimension)
  - torch.nn.BatchNorm1d: 2D and 3D input.
- torch.FloatTensor / torch.cuda.FloatTensor
前者在cpu上运算，后者在gpu上运算
- onehot编码
one hot编码是将类别变量转换为机器学习算法易于利用的一种形式的过程