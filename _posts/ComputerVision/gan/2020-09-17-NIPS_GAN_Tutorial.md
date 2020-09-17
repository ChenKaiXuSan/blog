---
title: NIPS 2016 Tutorial:Generative Adversarial Networks
tag: [ComputerVision]
modify_date: 2020-09-17
---

## 摘要
这篇论文总结了在NIPS2016上作者提出的向导。  
这个向导主要包括：
1. 为什么生成模型值得研究
2. 生成模型怎么工作，以及GANs与其他生成模型的比较
3. GANs工作的一些细节
4. GAN相关的研究课题
5. 结合GAN与其他发放的最先进图像模型
最后，这篇向导为读者提供了3个练习，以及练习的答案。

# 介绍
这个报告总结了在2016NIPS大会上关于GANs的内容。为了确保这个向导对观众最有用，这个向导主要面向去确定在大会初期由观众提出的问题。这个向导不计划全面的介绍GANs的领域；很多出彩的论文没有在这里被提及，只是因为这些论文没有对频繁出现的问题作出解释，另外因为这个向导被设置为2个小时的口述演讲，也没有无限的时间覆盖所有的研究内容。

这个向导将介绍：
1. 为什么生成模型是一个值得研究的题目
2. 生成模型是如何工作的，以及GAN与其他生成模型的区别
3. GANs工作的细节
4. GANs的相关研究课题
5. 最先进的包含GANs和其他方法的图像模型
最后，这个向导包含3个练习给读者完成，同时提供了这3个练习的答案。

此向导的幻灯片可以查看在PDF和Keynote格式在下面的链接中：
http://www.iangoodfellow.com/slides/2016-12-04-NIPS.pdf 
http://www.iangoodfellow.com/slides/2016-12-04-NIPS.key

视频被NIPS基金会录制，可以在稍后进行观看。
https://channel9.msdn.com/Events/Neural-Information-Processing-Systems-Conference/Neural-Information-Processing-Systems-Conference-NIPS-2016/Generative-Adversarial-Networks

生成对抗网络是生成模型的一个分类。生成模型在很多方面有应用。在这个向导中，这个模型指的是用某种方式去学习并表达针对一个训练数据集分布的估计，也就是$p_{data}$,然后学习描绘一个估计对于一些分布。结果是一个概率分布$p_{model}$。在一些例子中，模型明确的估计$p_{model}$，就像图一那样。在其他情况下，模型只可能从$p_{model}$中生成样本，如图2。一些模型可以两个都做。GANs主要关注在样本生成，尽管可以设计GANs都做两者。  
![Image](/image/gan/201704/28/fig01.png)
{:.border}
Figure1:有些生成模型通过密度估计。这些模型通过从未知的数据生成分布$p_{data}$来获取训练数据样本，然后得到此未知分布的估计。$p_{model}$估计可以给一个特殊的x值进行估计以获得对于真实密度$p_{model}(x)$的$p_{model}(x)$估计。这个图片展示了一个一维数据收集样本的过程，和一个高斯模型。
![Image](/image/gan/201704/28/fig02.png)
{:.border}
Figure2:一些生成模型可以从模型分布中生成样本。此图介绍的过程中，我们展示了ImageNet数据集中的样本。
