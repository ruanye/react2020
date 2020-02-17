import React ,{createRef,useRef,useState,forwardRef}from 'react'
import {render} from 'react-dom'
// 父组件如何拿到子组件的ref  
// forwardRef 转发ref   
//forwardRef 包装过后组件会有2个属性props 和ref 
function Children(props,Pref){
    return <>
	        <input ref = {Pref}/>
			</>
}
let ForwardChild= forwardRef(Children) //返回是一个包装过的组件 
function Parent(){
  let Pref = useRef() 
	function Setval(){
		Pref.current.value  = '我是ref'
	}
  return  <>
	        {/**Pref 是通过 ForwardChild传递过去的*/}
	         <ForwardChild ref={Pref}></ForwardChild>
						<span></span>
						<button onClick = {Setval}>点击获取焦点</button>
	     </>
}


render(<Parent/>,window.root)

