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