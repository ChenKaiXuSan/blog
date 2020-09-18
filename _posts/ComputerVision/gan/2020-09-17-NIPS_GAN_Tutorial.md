---
title: NIPS 2016 Tutorial:Generative Adversarial Networks
tag: [ComputerVision]
modify_date: 2020-09-17
---

### 摘要
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

[//]: # (使用GitHub图片的网络链接，用相对链接不能显示图片不知道为什么。)
![Image](https://raw.githubusercontent.com/ChenKaiXuSan/blog/master/image/gan/201704/28/fig01.png)  
{:.border}

Figure1:有些生成模型通过密度估计。这些模型通过从未知的数据生成分布$p_{data}$来获取训练数据样本，然后得到此未知分布的估计。$p_{model}$估计可以给一个特殊的x值进行估计以获得对于真实密度$p_{model}(x)$的$p_{model}(x)$估计。这个图片展示了一个一维数据收集样本的过程，和一个高斯模型。

![Image](https://raw.githubusercontent.com/ChenKaiXuSan/blog/master/image/gan/201704/28/fig02.png)  
{:.border}

Figure2:一些生成模型可以从模型分布中生成样本。此图介绍的过程中，我们展示了ImageNet数据集中的样本。

[//]: # (这样的写法可以在GitHubpage上显示出来，但是在本地无法显示)
[//]: ![Image](/image/gan/201704/28/eq01.jpg)

# 为什么学习生成模型？
一个可能合理的解释对于这个问题，仅仅是因为生成模型可能比提供的密度函数估计有更好的表现。毕竟，当适用于图像时，模型只是尝试提供更多的图片，但是世界并不缺乏图片。  
这里有一些学习生成模型的原因，包括：  
- 从生成模型训练和采样是一个很好的测试对于我们的能力在表现和控制高纬度概率分布上。高纬度概率分布是一个重要的课题，在宽广的多样化的应用数学和工程领域。
- 生成模型可以在很多方面被应用到增强学习中（reinforcement learning)。增强学习算法可以分成两类；model-base和model-free，model-base算法包含一个生成模型。时间序列数据的生成模型可以被应用到模拟可能的未来。例如模型可以被应用到计划(planning)，和在多样化方面的增强学习。一个生成模型应用到计划(planning)可以通过未来世界的状态学习到一个条件分布，给定当前世界的状态和一个agent可能采取的假设行动座位输入。agent可以询问模型用不同的潜在行为，然后选择行动倾向于产生与自己期望状态一致的模型的预测行为。最近一个模型的例子，Finn et al(2016b)，然后最近的一个例子应用于planning模型，Finn and Levine(2016)。另一方面生成模型可能应用于增强学习使他可以学习一个虚幻的环境，错误的行动不会对agent产生伤害。生成模型还可以用于引导探索保持足迹对于提前企图被观测的或不同的行动有多大的不同情况。生成模型，特别是GANs，还可以用于反向增强学习(inverse reinforcement learning)。关于增强学习的内容在5.6节会有更多的描述。
- 