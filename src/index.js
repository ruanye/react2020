
import React from './react'
import render from './react-dom'
//let  a=<span a='1'><div>123</div>hello</span> //jsx元素其实是对象   

// jsx 元素创建是调用React.creatElement 这个方法  jsx 语法糖 
let copya =React.createElement("span", {
  a: "1",
	className:'red',
	style:{
		color:'red',
		fontSize:"30px"
	}
}, "hello");;
console.log(copya)
//React.creatElement 方法调用  是一个对象 
// {type: "span",props:{className: "c",a: "1",children: "虚拟dom"}}   虚拟dom 是对象
render(copya,window.root)
