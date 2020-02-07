# react 
1. 创建项目 
npx create-react-app 项目名  
npm  uninstall create-react-app -g 
2. 启动项目
cd 项目名  npm start/yarn start 

3. 项目目录
nodemoules  依赖的包 
public 静态资源 
src  主要文件
gitignore git忽略文件
package.json  依赖版的版本 脚本运行   
4. 入口文件是src/index.js  
   src下只保留index.js
5. window.root 拿到是index.html里面的divid为root元素  
window.root = document.getElementById('root')
document.createTextNode 创建文本节点 
6. 同级元素不想用标签包裹的时候 可以用 <></> 去包裹 
  和 <React.Fragment> 的使用完全相等 
	---
// react 主要负责逻辑层 
// reactdom 主要负责渲染  
- jsx js +xml(html)  的特点
 1. 只能有一个根元素
 2. jsx的特性  <> 表示html标签 {} 表示js 
 3. class className js里面class是关键字  
 4. label 的for 属性改成htmlFor  for是关键字  
 5. style => 对象形式{fontSize:"16px",color:"red"}  双括号 第一个括号表示这是一个js表达式 第二个括号表示这是一个对象 
 6. innerhtml  dangerouslySetInnerHTML  =  vue  v-html 
 7. jsx 语法注释的写法  
 ```js
 	 { 
		// 这是单行注释 
	 }
	 { /** 这个是多行注释 */}
```
8. 事件 事件名 on后面跟事件的驼峰命名 
9. { } 必须有返回值 
## 编程单词 
 Invalid  无效的    property 属性  dangerously 危险的 