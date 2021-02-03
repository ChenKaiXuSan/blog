---
title: Pytorch Tips
tags: [ComputerVision, PyTorch]
---

记录使用过的Linux的命令。
有些Linux命令真的是又臭又长，只能记住有这个东西，但是具体用法就只能再查看了。

### 2021年02月03日 15:55:15
##### python脚本后台运行
- &符号
```
python3 file.py > python.log &
```
1. \> 表示把标准输出(stdout)重定向到指定文件。
2. &表示在后台执行脚本。
这样可以达到目的，但是，退出shell窗口的时候，程序也会被关闭。

- nohup(not hang up)
```
nohup python3 file.py > python.log 2>%1 &
```
1. 1是标准输出(stdout)的文件描述符，2是标准错误(stderr)的文件描述符。
2. 2>&1 表示把标准错误重定向到标准输出，这里&1表示标准输出。
现在可以关闭shell窗口，而不会杀死进程。

##### jobs



