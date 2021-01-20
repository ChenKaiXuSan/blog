---
title: Pytorch小tips
tags: [ComputerVision, PyTorch]
---

记录一下是用pytorch中发现的小技巧。

### 2021年01月19日 18:50:01
- .size() vs .shape, which one should be used?
  - .shape is an alias for .size(), and was added to more closely match numpy
- range()显示的是一个范围，从开始到结束。只有放到list中才会显示所有生成的数。
  - list(range(0, 5, 1)) #从0~4，步长1

### 2021年01月20日 11:56:07
- torch.randn 和 torch.rand 的区别
  - torch.randn
    - Returns a tensor filled with random numbers from a normal distribution with mean 0 and variance 1 (also called the standard normal distribution).
  - torch.rand
    - Returns a tensor filled with random numbers from a uniform distribution on the interval [0, 1)[0,1).The shape of the tensor is defined by the variable argument size.
- 