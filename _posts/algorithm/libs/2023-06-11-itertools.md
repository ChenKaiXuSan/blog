---
layout: article
title: itertools
tag: [Algorithm, libs]
show_author_profile: true
---

# itertools 

为高效循环而创建迭代器的函数
link: https://docs.python.org/zh-cn/3.10/library/itertools.html

# 无穷迭代器

- count()
- cycle()
- repeat()


## count(start=0, step=1)

Make an iterator that returns evenly spaced values starting with number start.

```
count(10) --> 10 11 12 13 14 ...
```

# 根据最短输入序列长度停止的迭代器

- groupby()

## groupby(iterable, key=None)

创建一个迭代器，返回 iterable 中连续的键和组。key 是一个计算元素键值函数。如果未指定或为 None，key 缺省为恒等函数（identity function），返回元素不变。一般来说，iterable 需用同一个键值函数预先排序。

```
import itertools

groups = []
uniquekeys = []
data = sorted('AAAABBBCCDAABBB')
for k, g in itertools.groupby(data):
    groups.append(list(g))
    uniquekeys.append(k)

print(uniquekeys)
print(groups)

['A', 'B', 'C', 'D']
[['A', 'A', 'A', 'A', 'A', 'A'], ['B', 'B', 'B', 'B', 'B', 'B'], ['C', 'C'], ['D']]

```
# 排列组合迭代器

- product()
- permutations()
- combinations()

## combinations(iterable,r)

返回由输入iterable中元素组成长度为r的子序列。
需要使用list包裹才能输出正常，否则返回地址。
从前开始组合，后面的会忽视前面的值。

```  
> list(combinations('abcd', 2))
[('a', 'b'), ('a', 'c'), ('a', 'd'), ('b', 'c'), ('b', 'd'), ('c', 'd')]
```

## permutations(iterable, r=None)

返回由iterable元素生成长度为r的排列。
如果r未指定或为None，r默认设置为iterable的长度，这种情况下，生成所有全长排列。
从前开始组合，后面的值也会和前面的值进行组合。

```
> list(permutations('abcd', 2))
[('a', 'b'), ('a', 'c'), ('a', 'd'), ('b', 'a'), ('b', 'c'), ('b', 'd'), ('c', 'a'), ('c', 'b'), ('c', 'd'), ('d', 'a'), ('d', 'b'), ('d', 'c')]
```
