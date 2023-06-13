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


## count 


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
