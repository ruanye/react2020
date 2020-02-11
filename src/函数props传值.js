import React from 'react'
import {render} from 'react-dom'
// 2、11  1、 函数的props 传值 
// 函数组件 首字母大写的函数就是函数组件 函数组件里面会返回一个jsx元素  渲染的时候把函数名当做标签 
// props 传值只能从上到下传递 只能父传子 
function Child(props){
	return <div >我姓props.child</div>
}
}
function Welcome(props){
	console.log(props) //props是个对象 里面集合所有传过来的参数 
	 return <div>
		 欢迎{props.name}来听课
		 <Child child ='王'></Child>
	 </div>
}
let obj =  {name:'刘洋',age:89,hot:'足球',weight:'250g'}
// 当我们需要传递的属性有特别多的时候  可以使用拓展运算符  
// 函数组件可以传参 props传值 属性传递 
render(< Welcome {...obj} />,window.root)
