---
layout: article
title: collections
tag: [Algorithm, libs]
show_author_profile: true
---

# collections

实现了特定目标的容器，以提供内建容器dict,list,set和tuple的代替选择。

link: https://docs.python.org/zh-cn/3.10/library/collections.html?highlight=collections#module-collections

- deque

## deque
class collections.deque([iterable[, maxlen]])

返回一个新的双向队列对象，从左到右初始化，从iterable数据创建。
如果iterable没有指定，新队列为空。

Deque支持线程安全，内存高效添加（append）和弹出（pop），从两端都可以。

方法
