
import React from 'react'
import {render}  from 'react-dom'
let innerhtmlcontent = '<div>我是插入的html</div>'
let  b = '刘洋是人'
function f(){
	 alert('我是事件')
}
let  a = <><span onClick ={f} className='my' style={{fontSize:"16px",color:"red"}}>
	{b}
	<label htmlFor="myinput">聚焦<input id='myinput' /></label>
	 { // 这是单行注释
	 }
	 { /** 这个是多行注释 */}
</span>
<p dangerouslySetInnerHTML={{__html:innerhtmlcontent}}>
</p>
</>

//{} 必须有返回值 
let cc =  function(){
	return '我是函数'
}
let songlaoshi  = "女"
let myel = <span>介绍大括号的用法{cc()} {songlaoshi=='女'?'宋老师是女的':'宋老师是男的'}</span>
let  myspan = <span className='c' a ='1'>虚拟dom</span>
// jsx 元素 react元素 虚拟dom 
console.log(myspan)
// {type: "span",props:{className: "c",a: "1",children: "虚拟dom"}}   虚拟dom 是对象 
// 写一个render函数 把上面的对象渲染到root上  
render(myspan,document.getElementById('root'))


//Reactdom.render('hello world',window.root)
//render('hello world',window.root)