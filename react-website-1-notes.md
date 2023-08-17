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