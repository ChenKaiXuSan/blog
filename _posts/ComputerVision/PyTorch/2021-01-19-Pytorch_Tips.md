---
title: Pytorch Tips
tags: [ComputerVision, PyTorch]
---

记录一下使用pytorch中发现的小技巧。
写的写的觉得应该也把一些python3的东西放进去。  
然后这篇就变成了写代码的笔记。🤦‍

### 2021年01月19日 18:50:01
##### .size() vs .shape, which one should be used?
  .shape is an alias for .size(), and was added to more closely match numpy
##### range()显示的是一个范围，从开始到结束。只有放到list中才会显示所有生成的数。
  list(range(0, 5, 1)) #从0~4，步长1

### 2021年01月20日 11:56:07
##### torch.randn 和 torch.rand 的区别
- torch.randn
  Returns a tensor filled with random numbers from a normal distribution with mean 0 and variance 1 (also called the standard normal distribution).
- torch.rand
  Returns a tensor filled with random numbers from a uniform distribution on the interval [0,1).The shape of the tensor is defined by the variable argument size.

### 2021年01月25日 11:33:44
##### torch.nn.Embedding
A simple lookup table that stores embeddings of a fixed dictionary and size.  
This module is often used to store word embeddings and retrieve them using indices. The input to the module is a list of indices, and the output is the corresponding word embeddings.
##### python3 enumerate()
enumerate() 函数用于将一个可遍历的数据对象(如列表、元组或字符串)组合为一个索引序列，同时列出数据和数据下标，一般用在 for 循环当中。
  ```
  >>> seasons = ['Spring', 'Summer', 'Fall', 'Winter']
  >>> list(enumerate(seasons))
  [(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')]
  >>> list(enumerate(seasons, start=1))       # 小标从 1 开始
  [(1, 'Spring'), (2, 'Summer'), (3, 'Fall'), (4, 'Winter')]
  ```
##### fill_(value)
Fills self tensor with the specified value.
##### torch.tensor.detach()
Returns a new Tensor, detached from the current graph.
The result will never require gradient.
##### torch.nn.Upsample()
Upsamples a given multi-channel 1D (temporal), 2D (spatial) or 3D (volumetric) data.

### 2021年01月26日 12:09:26
##### torch.nn.BatchNorm1d / torch.nn.BatchNorm2d
It is a method used to make artificial neural networks faster and more stable through normalization of the input layer by re-centering and re-scaling.
  - torch.nn.BatchNorm2d: Applies Batch Normalization over a 4D input (a mini-batch of 2D inputs with additional channel dimension)
  - torch.nn.BatchNorm1d: 2D and 3D input.
##### torch.FloatTensor / torch.cuda.FloatTensor
前者在cpu上运算，后者在gpu上运算
##### onehot编码
one hot编码是将类别变量转换为机器学习算法易于利用的一种形式的过程。
如果原本的标签编码是有序的，onehot编码会丢失顺序信息。

### 2021年01月27日 21:26:36
##### D.cuda()
Moves all model parameters and buffers to the GPU.
##### 关于window系统路径问题
  - 可以直接复制路径，但要在前面加上r''
  - 推荐把\改成/

### 2021年01月28日 09:27:43
##### torch.squeeze()
Returns a tensor with all the dimensions of input of size 1 removed.
For example, if input is of shape: (A×1×B×C×1×D) then the out tensor will be of shape: (A×B×C×D) .
##### torch.stack() / torch.cat()
连接tensor的时候使用
  - torch.stack() : 增加一个新维度，理解为叠加
  - torch.cat() : 增加现有的维度，理解为续接

### 2021年01月29日 17:21:03
##### numpy.transpose(a)
Reverse or permute the axes of an array; returns the modified array.
For an array a with two axes, transpose(a) gives the matrix transpose.
##### pickle (python3)
模块 pickle 实现了对一个 Python 对象结构的二进制序列化和反序列化。  
  - pickle.dumps(obj, file)
  将对象 obj 封存以后的对象写入已打开的 file object file。
##### matplotlib.pyplot.imread(fname, format)
Read an image from a file into an array.

### 2021年02月01日 16:04:22
##### Lib/functools.py
functools 模块应用于高阶函数，即参数或（和）返回值为其他函数的函数。 
通常来说，此模块的功能适用于所有可调用对象。
##### linear_attention_transformer
A fully featured Transformer that mixes (QKᵀ)V local attention with Q(KᵀV) global attention (scales linearly with respect to sequence length) for efficient long-range language modeling.
``` 
 pip install linear-attention-transformer
```
##### torch.Tensor.contiguous(memory_format=torch.contiguous_format)
Returns a contiguous in memory tensor containing the same data as self tensor. If self tensor is already in the specified memory format, this function returns the self tensor.
##### torch.mean(input, dim, keepdim=False)
Returns the mean value of each row of the input tensor in the given dimension dim. If dim is a list of dimensions, reduce over all of them.


### 2021年02月06日 17:00:22
##### torch.numel(input) → int
Returns the total number of elements in the input tensor.
```
>>> a = torch.zeros(4,4)
>>> torch.numel(a)
16
```

##### torch.isnan(input) → Tensor
Returns a new tensor with boolean elements representing if each element of input is NaN or not. Complex values are considered NaN when either their real and/or imaginary part is NaN.
```
>>> torch.isnan(torch.tensor([1, float('nan'), 2]))
tensor([False, True, False])
```

##### torch.Tensor.uniform_(from=0, to=1) → Tensor
Fills self tensor with numbers sampled from the continuous uniform distribution:

$$
P(x) = \dfrac{1}{\text{to} - \text{from}}
$$
​	
##### torch.Tensor.expand(*sizes) → Tensor
Returns a new view of the self tensor with singleton dimensions expanded to a larger size.
Passing -1 as the size for a dimension means not changing the size of that dimension.
Tensor can be also expanded to a larger number of dimensions, and the new ones will be appended at the front. For the new dimensions, the size cannot be set to -1.
```
>>> x = torch.tensor([[1], [2], [3]])
>>> x.size()
torch.Size([3, 1])
>>> x.expand(3, 4)
tensor([[ 1,  1,  1,  1],
        [ 2,  2,  2,  2],
        [ 3,  3,  3,  3]])
>>> x.expand(-1, 4)   # -1 means not changing the size of that dimension
tensor([[ 1,  1,  1,  1],
        [ 2,  2,  2,  2],
        [ 3,  3,  3,  3]])
```

##### torch.acos(input, *, out=None) → Tensor
Computes the inverse cosine of each element in input.
$$
\text{out}_{i} = \cos^{-1}(\text{input}_{i})
$$

##### torch.norm(input, p='fro', dim=None, keepdim=False, out=None, dtype=None)
Returns the matrix norm or vector norm of a given tensor.

### 2021年02月09日 14:55:55
##### torchvision.transforms.Lambda(lambd)
Apply a user-defined lambda as a transform. This transform does not support torchscript.

##### torch.nn.functional.interpolate(input, size=None, scale_factor=None, mode='nearest', align_corners=None, recompute_scale_factor=None)
Down/up samples the input to either the given size or the given scale_factor
The algorithm used for interpolation is determined by mode.

##### torch.flip(input, dims) → Tensor
Reverse the order of a n-D tensor along given axis in dims.
```
>>> x = torch.arange(8).view(2, 2, 2)
>>> x
tensor([[[ 0,  1],
         [ 2,  3]],

        [[ 4,  5],
         [ 6,  7]]])
>>> torch.flip(x, [0, 1])
tensor([[[ 6,  7],
         [ 4,  5]],

        [[ 2,  3],
         [ 0,  1]]])
```

##### torch.rsqrt(input, *, out=None) → Tensor
Returns a new tensor with the reciprocal of the square-root of each of the elements of input.
$$
\text{out}_{i} = \frac{1}{\sqrt{\text{input}_{i}}}
$$
```
>>> a = torch.randn(4)
>>> a
tensor([-0.0370,  0.2970,  1.5420, -0.9105])
>>> torch.rsqrt(a)
tensor([    nan,  1.8351,  0.8053,     nan])
```

##### permute(*dims) → Tensor
Returns a view of the original tensor with its dimensions permuted.
```
>>> x = torch.randn(2, 3, 5)
>>> x.size()
torch.Size([2, 3, 5])
>>> x.permute(2, 0, 1).size()
torch.Size([5, 2, 3])
```

### 2021年02月10日 18:46:39
##### torch.nn.ModuleList(modules: Optional[Iterable[torch.nn.modules.module.Module]] = None)
Holds submodules in a list.

ModuleList can be indexed like a regular Python list, but modules it contains are properly registered, and will be visible by all Module methods.

```
class MyModule(nn.Module):
    def __init__(self):
        super(MyModule, self).__init__()
        self.linears = nn.ModuleList([nn.Linear(10, 10) for i in range(10)])

    def forward(self, x):
        # ModuleList can act as an iterable, or be indexed using ints
        for i, l in enumerate(self.linears):
            x = self.linears[i // 2](x) + l(x)
        return x
```

### 2021年02月16日 15:08:08
##### torch.nn.init.uniform_(tensor, a=0.0, b=1.0)
Fills the input Tensor with values drawn from the uniform distribution
$$ \mathcal{U}(a, b) $$
```
>>> w = torch.empty(3, 5)
>>> nn.init.uniform_(w)
```

##### torch.nn.init.constant_(tensor, val)
Fills the input Tensor with the value $ \text{val} $.
```
>>> w = torch.empty(3, 5)
>>> nn.init.constant_(w, 0.3)
```

##### torch.pow(input, exponent, *, out=None) → Tensor
Takes the power of each element in input with exponent and returns a tensor with the result.

exponent can be either a single float number or a Tensor with the same number of elements as input.

When exponent is a scalar value, the operation applied is:
$$
\text{out}_i = x_i ^ \text{exponent}
​$$
 
When exponent is a tensor, the operation applied is:
$$
\text{out}_i = x_i ^ {\text{exponent}_i}
​$$

When exponent is a tensor, the shapes of input and exponent must be broadcastable.
```
>>> a = torch.randn(4)
>>> a
tensor([ 0.4331,  1.2475,  0.6834, -0.2791])
>>> torch.pow(a, 2)
tensor([ 0.1875,  1.5561,  0.4670,  0.0779])
>>> exp = torch.arange(1., 5.)

>>> a = torch.arange(1., 5.)
>>> a
tensor([ 1.,  2.,  3.,  4.])
>>> exp
tensor([ 1.,  2.,  3.,  4.])
>>> torch.pow(a, exp)
tensor([   1.,    4.,   27.,  256.])
```