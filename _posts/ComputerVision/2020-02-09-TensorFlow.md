---
title: TensorFlow安装
tags: [ComputerVision, TensorFlow]

---

安装手顺适用于Ubuntu 
{:.warning}
## 检查版本号
``` 
python3 --version
pip3 --version
virtualenv --version
```
如果没有的话，安装
```
sudo apt update
sudo apt install python3-dev python3-pip
sudo pip3 install -U virtualenv  # system-wide install
```
## 安装virtual environment
这一步为了给TensorFlow创建一个单独的运行环境。推荐。
### 创建新的虚拟环境
存放在./venv文件下。用python当作解释程序
```
virtualenv --system-site-packages -p python3 ./venv
```
### 启动虚拟环境
```
source ./venv/bin/activate  # sh, bash, ksh, or zsh
```
如果启动成功，在命令符前会出现(venv)
### 升级pip
```
pip install --upgrade pip

pip list  # show packages installed within the virtual environment
```
## 安装TensorFlow pip packag
```
pip install --upgrade tensorflow
```
### 确认安装成功
```
python -c "import tensorflow as tf;print(tf.reduce_sum(tf.random.normal([1000, 1000])))"
```
## 安装结束，可以开始使用啦！

## 退出venv
```
deactivate  # don't exit until you're done using TensorFlow
```
在运行TensorFlow的时候，应该一直使用虚拟环境