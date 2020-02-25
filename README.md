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


##  函数组件hooks  react 16.8版本之前   
只在顶层调⽤Hooks
1. Hooks的调⽤尽量只在顶层作⽤域进⾏调⽤ 不要在循环，条件或者是嵌套函数中调⽤Hook，否则可能会⽆ 法确保每次组件渲染时都以相同的顺序调⽤Hook 
2. 只在函数组件调⽤Hooks

React Hooks⽬前只⽀持函数组件，所以⼤家别在class组件或 者普通的函数⾥⾯调⽤Hook钩⼦函数 React Hooks的应⽤场景如下

1. 函数组件 
2. ⾃定义hooks 

函数组件 ⾃定义hooks 在未来的版本React Hooks会扩展到class组件，但是现阶段不能 再class⾥使⽤





1. 旧版上下文 

import React, { Component } from 'react'
import PropTypes from 'prop-types';
class Header extends Component {
    //定义子上下文对象的属性和类型
    static childContextTypes = {
        name:PropTypes.string,
        age:PropTypes.number
    }
    //返回或者说定义真正的子上下文
    getChildContext(){
        return {
            age:10,
            name:'Header' 
        }
    }
    render() {
        console.log(this.context)
        return <div style={{ border: '5px solid green', padding: '5px' }}>
            
            <Title></Title>
        </div>
    }
}
class Title extends Component {
    //表示或者 说指定我要获取哪些上下文对象
    static contextTypes = {
        color: PropTypes.string,
        name:PropTypes.string,
        age:PropTypes.number
    }
    render() {
        console.log(this.context)
        return <div style={{ border: '5px solid orange', padding: '5px',color:this.context.color }}>
            Title
        </div>
    }
}
class Main extends Component {
    render() {
        return <div style={{ border: '5px solid blue', padding: '5px' }}>
            Main
            <Content></Content>
        </div>
    }
}
class Content extends Component {
    static contextTypes = {
        color: PropTypes.string,
        name:PropTypes.string,
        age:PropTypes.number,
        setColor:PropTypes.func
    }
    render() {
        return <div style={{ border: '5px solid pink', padding: '5px',color:this.context.color }}>
            Content
            <button onClick={()=>this.context.setColor('red')}>变红</button>
            <button onClick={()=>this.context.setColor('green')}>变绿</button>
        </div>
    }
}
export default class Page extends Component {

    constructor() {
        super();
        this.state = { color: 'gray'};
    }
    //定义子上下文对象的属性和类型
    static childContextTypes = {
        name:PropTypes.string,
        color:PropTypes.string,
        setColor: PropTypes.func
    }
    //返回或者说定义真正的子上下文
    getChildContext(){
        return {
            color:this.state.color,
            setColor:this.setColor,
            name:'Page' 
        }
    }
    setColor = (color)=>{
        this.setState({color});
    }
    render() {
        return (
            <div style={{ border: '5px solid red', padding: '5px' }}>
                Page
                <Header>
                    <Title>

                    </Title>
                </Header>
                <Main>
                    <Content>

                    </Content>
                </Main>
            </div>
        )
    }
}

新版上下文 
static contextType = ThemeContex