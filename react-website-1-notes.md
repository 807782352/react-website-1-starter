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

       