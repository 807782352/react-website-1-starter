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