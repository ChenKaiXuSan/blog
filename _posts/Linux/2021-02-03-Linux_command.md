---
title: Linux commands
tags: [Linux]
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
jobs命令用于显示Linux中的任务列表及任务状态，包括后台运行的任务。该命令可以显示任务号及其对应的进程号。
```
jobs -l -p <pid>
```

##### tmux(terminal multiplexer)
###### 会话操作
```
tmux
```
启动窗口，底部有一个状态栏。
ctrl+d 或者 输入exit，就可以退出窗口。
- 新建会话
第一个启动的窗口编号是0，第二个是1。
使用编号不方便，更好的是给会话起名字。
```
tmux new -s <session-name>
```
- 分离会话
ctrl+b, d 或输入 tmux detach， 就会将当前会话与窗口分离。
```
tmux detach
```
- 查看会话
```
tmux ls 
tmux list-session
```
- 接入会话
```
# 使用会话编号
tmux attach -t 0
# 使用会话名称
tmux attach -t <session-name>
```
- 杀死会话
```
# 使用会话编号
tmux kill-session -t 0
# 使用会话名称
tmux kill-session -t <session-name>
```
- 切换会话
```
tmux switch -t 0
tmux switch -t <session-name>
```
- 重命名会话
```
tmux rename-session -t 0 <new-name>
```
- 会话快捷键
  - ctrl+b, d ：分离当前会话
  - ctrl+b, s : 列出所有会话
  - ctrl+b, & : 重命名当前会话

###### 窗格操作
可以将窗口分成多个窗格(pane)，每个窗格运行不同命令。
- 划分窗格
```
# 划分上下两个窗格
tmux split-window
# 划分左右两个窗格
tmux splt-window -h
```
- 移动光标
```
# 光标移动到上方窗格
tmux select-pane -U
(D, L, R)
```
- 交换窗格位置
```
# 当前窗格上移
tmux swap-pane -U (-D)
```
- 窗格快捷键
  - Ctrl+b \<arrow key>：光标切换到其他窗格。<arrow key>是指向要切换到的窗格的方向键，比如切换到下方窗格，就按方向键↓。
  - Ctrl+b x：关闭当前窗格。
  - Ctrl+b z：当前窗格全屏显示，再使用一次会变回原来大小。
  - Ctrl+b q：显示窗格编号。
  - Ctrl+b Ctrl+\<arrow key>：按箭头方向调整窗格大小。
###### 其他命令
```
# 列出所有快捷键，及其对应的命令
tmux list-keys

# 列出所有的命令及其参数
tmux list-commands

# 列出当前所有的会话信息
tmux info

# 重新加载当前配置
tmux source-file ~/.tmux.conf
```






