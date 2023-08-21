Some notes

1. npx create-react-app ./   
   1. 在当前目录下创建react脚手架
   2. 确保 当前目录下是空的

2. npm i react-icons  
   1. 安装react-icons

3. 想要删除一个包： 
   1. npm uninstall xxx
   2. 可以在package.json 中查看包的情况

4. npm i react-router-dom

5. 文件夹：
   1. pages 文件夹： 装【动】态路由？
   2. components文件夹： 装【静】态小组件？

6. Nav标签 （HTML5 新特性）

   <nav> 标签**定义导航链接的部分**。

   并不是所有的 HTML 文档都要使用到 <nav> 元素。<nav> 元素只是作为标注一个导航链接的区域

   ```html
   <nav>
     <a href="/html/">HTML</a> |
     <a href="/css/">CSS</a> |
     <a href="/js/">JavaScript</a> |
     <a href="/jquery/">jQuery</a>
   </nav>
   ```

   

7. react-icons 

   1.  https://react-icons.github.io/react-icons/search?q=bars 找到对应的icon

   2. 引入写法：

      ```react
      import {FaBars} from 'react-icons/fa'
      ```

      - 一般来说，前两个字母就是 所在的包下

   3. 使用：

      <FaBars />  直接使用组件

8. CSS 变量 / CSS 属性

9. HSL 颜色

   ==hsl (*hue*, *saturation*, *lightness*)==

   - **Hue** is a degree on the **color wheel** from 0 to 360.   ==0 is red, 120 is green, and 240 is blue.==
   - **Saturation** is a percentage value. ==0% means a shade of gray, and 100% is the full color.==
   - **Lightness** is also a percentage. ==0% is black, 50% is neither light or dark, 100% is white==

10. font-style:

    - https://fonts.google.com/ 查看

    - montserrat 作者选用

    - 点击并添加所选样式 [300, normal 400, bold 700等]

    - 然后右侧 复制Link到 public/index.html中

      ```
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      ```

    - 记得 **font-family** 加载

      ```
      body {
          font-family: 'Montserrat', sans-serif;
      }
      ```

11. Router中的 a 和 link 标签 关系

    - 从**【最终渲染】的 DOM 来看，这两者都是链接，【都是 `<a>` 标签】**。

    - 区别是：
      - `<Link>` 是 react-router 里实现路由跳转的链接，一般配合 `<Route>` 使用，react-router **【接管了其默认的链接跳转行为】**，区别于传统的页面跳转，**`<Link>` 的“跳转”行为只会触发相匹配的 `<Route>` 对应的页面内容更新，而不会刷新整个页面**。
      - 而 `<a>` 标签就是**普通的超链接**了，用于从当前页面跳转到 href 指向的另一个页面（非锚点情况）。

    

12. object-fit css属性 使用

    https://www.w3schools.com/css/css3_object-fit.asp

13. ### vw/vh

    目标：能够使用vw单位设置网页元素的尺寸
    它们是 **相对单位，对视口的尺寸计算结果**

    l vw：viewport width
    1vw = 1/100视口宽度

    l vh：viewport height
    1vh = 1/100视口高度。
    我们若想刚好实现一屏的话可以用100vh来实现，可以适用于不同的分辨率。
    *注：vw和vh在同一个选择器中不能同时出现，同一选择器中只能出现一个。

14. Flex 布局

    https://www.w3schools.com/cssref/playdemo.php?filename=playcss_align-content

    - place-items  简写属性

      https://developer.mozilla.org/zh-CN/docs/Web/CSS/place-items

15. grid-template-columns

    https://blog.csdn.net/u013565133/article/details/102912734

    用于**设置网格布局中的【列数】及宽度**

    - **1fr** 【一种新的长度单位】

      在CSS Grid 网格布局中，引入了一种新的长度单位**fr(fraction)**。 它表示Grid 布局中中剩余空间(leftover space)的一部分(fraction)。 一般来说1fr 的意思是“**100%的剩余空间**”

    - **1fr 1fr** 可以简单理解为1比1

16. grid 中的 **gap**

    可以设置 网格之间的距离

17. place-items: center 实现在父类内 **完美居中**
    1. place-items 是同时设置 align-items 和 justify-items 的快速方法。通过将其设置为 center ， align-items 和 justify-items 都将设置为 center。
    2. https://blog.csdn.net/ljtjianting/article/details/121679976



18. filter 滤镜属性

    [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) **`filter`** 属性将**模糊blur()**或**颜色偏移等图形效果(e.g. contrast() ）**应用于元素。滤镜通常用于调整图像、背景和边框的渲染。



19. **transition 效果**

    https://www.runoob.com/css3/css3-transitions.html

    里面有个属性： **transition-timing-function**, 可以看下

    https://www.runoob.com/cssref/css3-pr-transition-timing-function.html

    

20. <small>标签： html中 字体变小的一种标签
21. flex 和 grid的区别：
    1. flex 用于 **一维**
    2. grid 用于 **二维**

22. margin-inline 的用法

    https://blog.csdn.net/YopenLang/article/details/124892727 **[margin、border、padding 前缀都一样]**

    - `border-inline`实际上`border-inline-start`和`border-inline-end`的缩写形式。
    - 不仅`writing-mode`，逻辑属性还会受`direction`和`text-orientation`影响。

23. margin-inline: auto;

    1. 相当于 margin-inline-start 和 margin-inline-end 都是auto

24. useState用法！！

    1. https://juejin.cn/post/6844903999083118606

    2. 小结一波

       - 调用`useState()` Hook 来启用函数组件中的状态。
       - `useState(initialValue)`的**第一个参数**`initialValue`是**状态的初始值**。
       - `[state, setState] = useState(initialValue)`**返回**一个包含`2`个元素的数组:**状态值**和**状态更新函数**。
       - 使用新值**调用状态更新器函数`setState(newState)`更新状态**。或者，可以**使用一个回调`setState(prev => next)`来调用状态更新器**，该回调将返回基于先前状态的新状态。
       - 调用状态更新器后，React 确保重新渲染组件，以使新状态变为当前状态。

       

25. flex 布局 和 grid布局

    - https://fe.zuo11.com/css/flex-grid.html#%E9%A1%B9%E7%9B%AE%E5%B1%9E%E6%80%A7

    - https://medium.com/@SampanPeng/%E7%BD%91%E6%A0%BC%E5%B8%83%E5%B1%80-grid-%E6%98%AF%E4%B8%80%E7%A7%8D%E5%B0%86%E7%BD%91%E9%A1%B5%E5%88%92%E5%88%86%E6%88%90%E7%BD%91%E7%8A%B6%E7%9A%84%E6%A0%BC%E5%AD%90%E7%9A%84%E4%B8%80%E7%A7%8D%E5%B8%83%E5%B1%80%E6%96%B9%E6%A1%88-%E5%8F%AF%E4%BB%A5%E6%83%B3%E8%B1%A1%E6%88%90%E8%A1%A8%E6%A0%BC-%E5%8D%95%E5%85%83%E6%A0%BC%E4%B9%8B%E9%97%B4%E5%8F%AF%E4%BB%A5%E8%B7%A8%E8%A1%8C%E6%88%96%E8%80%85%E8%B7%A8%E5%88%97%E5%90%88%E5%B9%B6-%E5%8F%AF%E4%BB%A5%E6%AF%94flex%E7%BB%84%E5%90%88%E5%87%BA%E6%9D%A5%E6%9B%B4%E5%8A%A0%E5%A4%8D%E6%9D%82%E7%9A%84%E7%BD%91%E9%A1%B5%E5%B8%83%E5%B1%80-1bdbe1474887

    

    **记忆：** 

    - justify - 和主轴（一般水平维度）有关  

    - align - 和侧轴（一般垂直维度）有关

    - content - 和整体布局有关

    - items - 和成员个体有关

      

    - grid-template-columns 和 grid-template-rows

    - grid-gap 

    

26. align-items 和 align-content 区别

    **总结**

    回到定义，align-items 和 align-content 的差异可以总结为如下两点。

    1. **align-items 的【上下文是行内】**，**align-content 的【上下文是弹性盒子容器】**；

    2. align-items 控制成员的对齐行为，align-content 控制所有行的对齐行为。

       

    具体差异可以看如下截图：（以conter为例）

    ![img](https://img-blog.csdnimg.cn/ec25f0b0fac3402fbaabb913abbb4d24.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBALS3lsbHmsLTkuIDnqIstLQ==,size_10,color_FFFFFF,t_70,g_se,x_16)

    

    图0

    当align-items=“conter”；【上下文是**行内（即对每一行而言）**】

    ![img](https://img-blog.csdnimg.cn/9354881a570748cfb05355cfda22c0ce.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBALS3lsbHmsLTkuIDnqIstLQ==,size_12,color_FFFFFF,t_70,g_se,x_16)

    图1

    当align-content=“conter”；【上下文是整个容器】

    ![img](https://img-blog.csdnimg.cn/4509786d75f44381a139b4edda57102c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBALS3lsbHmsLTkuIDnqIstLQ==,size_11,color_FFFFFF,t_70,g_se,x_16)

    

27. display: flex 和 inline-flex 的区别

    https://www.jianshu.com/p/4d596708f61b

    默认情况下：若没设置宽高：

    1. flex：  宽度自动100% 
    2. inline-flex:  宽度和高度自适应

    

28. fit-content

    可以用在width、height等上面；这意味着盒子会使用可用的空间，但永远不会超过 [`max-content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-content)



29. svg  【可缩放矢量图形文件】

    - PNG & JPEG  光栅图像 =》 他们将图像存储在 彩色正方形的网格中。他们**具有固定的分倍率**，增加大小会降低图像的质量
    - SVG & PDF 矢量图形 => 他们由一组点和点之间的线，由数学公式来决定这些点和线的位置和形状。 所以他们**放大或缩小，仍会保持着他们的空间关系**

    

30. border-box    vs   content-box（默认）
    - border-box 的Width =  实际设置的width 【这个教程用的是它】
    - content-box 的width = 设置的width + border + padding【默认】

31. 为什么 **a标签** 最好一定要加  **rel = "noopener noreferer" 属性** 

    - 注：现在 绝大部分浏览器上 **noopener 和 noreferrer 其实是【默认】属性**，所以不加也可以。

    - 当给链接加上 `target="_blank"` 后， 目标网页会在新的标签页中打开， 此时在新打开的页面中可通过 `window.opener` 获取到源页面的 `window` 对象， 这就埋下了安全隐患。

      具体来说,

      - 你自己的网页 A 有个链接是打开另外一个三方地址 B
      - **B 网页通过 `window.opener` 获取到 A 网页的 `window` 对象**， ==进而可以使得 A 页面跳转到一个钓鱼页面 `window.opener.location.href ="abc.com"`， 用户没注意地址发生了跳转， 在该页面输入了用户名密码后则发生信息泄露==

    - 具体操作可以看 https://www.youtube.com/watch?v=wWzlN096DvA

    - 或者看文章 https://zhuanlan.zhihu.com/p/366736912

32. grid 和 flex 应该选择哪种形式展示？

    https://juejin.cn/post/7197279149337395260#heading-11

    在选择其中一种布局时，可以考虑以下问题：

    --    组件的子项如何显示？ 内联还是作为列和行？

    --    组件如何在各种尺寸的屏幕上显示？

    

    - 如果组件的子项都以**内联inline**的形式显示 => Flex 布局可能就很好
      - 比如： 网站导航、操作列表、Tab菜单、内容居中等
    - 如果需要多个列和行 **block形式** => Grid布局可能就很好
      - 比如：侧边栏 +  内容区域、卡片网格等
    - 【但个人感觉： Grid可以替换掉Flex】

33. **transform： skew(15deg)** 可以让图片倾斜15度

34. 关于 @media and (max-width: xxx) 的说法：

    1. max-width 可以理解为 <=

    2. min-width 可以理解为 >= 

    3. 而我们知道css中 **后面的属性如果和前面的重复，是会覆盖的**

       如果 先写 max-width:1024px； 后写 max-width: 600px; 那么 画区间可以得知，后面的会 **继承覆盖**前面的 【但影响不到前面的，因为后面的无法包裹住前面的】

       但反过来，如果先 max-width: 600px;  后max-width:1024px，那么前面的600px将会**失效** 【后面的会覆盖掉前面的，因为后面的包裹住了前面的】。
