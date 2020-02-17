import React ,{createRef,useRef,useState,forwardRef,useImperativeHandle}from 'react'
import {render} from 'react-dom'
// 
function Children(props,Pref){
	let inputref = useRef() // 1 
	let input2ref = useRef()
	//使用命令式操作  useImperativeHandle 可以选择性暴露给父组件一些属性  
	useImperativeHandle(Pref,()=>{
		//返回的对象就是我们说的ref的current 
		 return {
			 
        F(){
				  inputref.current.focus() 	
				},
				changeV(text){
          input2ref.current.value =  text
				}
		 }
		}) 
    return <>
	        <input ref = {inputref}/>
					<input ref={input2ref} ></input>
			</>
}
let ForwardChild= forwardRef(Children) //返回是一个包装过的组件 
function Parent(){
  let Pref = useRef() 
	function Setval(){
		Pref.current.changeV('这是改值的ref')
	}
	function getFocus(){
		 Pref.current.F()
		//Pref.current.inputref.current.focus()
	}
  return  <>
	        {/**Pref 是通过 ForwardChild传递过去的*/}
	         <ForwardChild ref={Pref}></ForwardChild>
						<span></span>
						<button onClick = {Setval}>点击设置值</button>
			 			<button onClick = {getFocus}>获取焦点</button>
	         </>
}


render(<Parent/>,window.root)

