---
title: Pytorch Tips
tags: [ComputerVision, PyTorch]
---

记录一下是用pytorch中发现的小技巧。
写的写的觉得应该也把一些python3的东西放进去。  
然后这篇就变成了写代码的笔记。🤦‍

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
  Returns a tensor filled with random numbers from a uniform distribution on the interval [0,1).The shape of the tensor is defined by the variable argument size.

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
one hot编码是将类别变量转换为机器学习算法易于利用的一种形式的过程。
如果原本的标签编码是有序的，onehot编码会丢失顺序信息。

### 2021年01月27日 21:26:36
- D.cuda()
Moves all model parameters and buffers to the GPU.
- 关于window系统路径问题
  - 可以直接复制路径，但要在前面加上r''
  - 推荐把\改成/

### 2021年01月28日 09:27:43
- torch.squeeze()
Returns a tensor with all the dimensions of input of size 1 removed.
For example, if input is of shape: (A×1×B×C×1×D) then the out tensor will be of shape: (A×B×C×D) .
- torch.stack() / torch.cat()
连接tensor的时候使用
  - torch.stack() : 增加一个新维度，理解为叠加
  - torch.cat() : 增加现有的维度，理解为续接

### 2021年01月29日 17:21:03
- numpy.transpose(a)
Reverse or permute the axes of an array; returns the modified array.
For an array a with two axes, transpose(a) gives the matrix transpose.
- pickle (python3)
模块 pickle 实现了对一个 Python 对象结构的二进制序列化和反序列化。  
  - pickle.dumps(obj, file)
  将对象 obj 封存以后的对象写入已打开的 file object file。
- matplotlib.pyplot.imread(fname, format)
Read an image from a file into an array.

### 2021年02月01日 16:04:22
- Lib/functools.py
functools 模块应用于高阶函数，即参数或（和）返回值为其他函数的函数。 
通常来说，此模块的功能适用于所有可调用对象。
- linear_attention_transformer
A fully featured Transformer that mixes (QKᵀ)V local attention with Q(KᵀV) global attention (scales linearly with respect to sequence length) for efficient long-range language modeling.
``` 
 pip install linear-attention-transformer
```
- torch.Tensor.contiguous(memory_format=torch.contiguous_format)
Returns a contiguous in memory tensor containing the same data as self tensor. If self tensor is already in the specified memory format, this function returns the self tensor.
- torch.mean(input, dim, keepdim=False)
Returns the mean value of each row of the input tensor in the given dimension dim. If dim is a list of dimensions, reduce over all of them.

### 2021年02月02日 11:26:16
- print(f" ")
要使用 格式化字符串字面值 ，请在字符串的开始引号或三引号之前加上一个 f 或 F 。在此字符串中，你可以在 { 和 } 字符之间写可以引用的变量或字面值的 Python 表达式。
```
>>> year = 2016
>>> event = 'Referendum'
>>> f'Results of the {year} {event}'
'Results of the 2016 Referendum'
```
字符串的 str.format() 方法需要更多的手动操作。你仍将使用 { 和 } 来标记变量将被替换的位置，并且可以提供详细的格式化指令，但你还需要提供要格式化的信息。
```
>>> yes_votes = 42_572_654
>>> no_votes = 43_132_495
>>> percentage = yes_votes / (yes_votes + no_votes)
>>> '{:-9} YES votes  {:2.2%}'.format(yes_votes, percentage)
' 42572654 YES votes  49.67%'
```
最后，你可以使用字符串切片和连接操作自己完成所有的字符串处理，以创建你可以想象的任何布局。字符串类型有一些方法可以执行将字符串填充到给定列宽的有用操作。