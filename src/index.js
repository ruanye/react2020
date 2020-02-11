import React,{useState,memo,useMemo,useCallback} from 'react'
import {render} from 'react-dom'
// useState 的基本用法   
function Couter1(){
	 let  [number,addNumber] = useState(123) // 会返回一个数组第一个表示变量 第二个表示操作变量的方法  useState的参数表示变量的初始值  
	   return <>
	          <div>这是我看到的数字{number}</div>
						<button onClick={()=>addNumber(number+1)}>点击加1</button>
	        </>
}
// useState 函数式更新  惰性初始化的函数 只会初始化一次 
function Couter2(){
 let  [number,addNumber] = useState(0) // 会返回一个数组第一个表示变量 第二个表示操作变量的方法  useState的参数表示变量的初始值  
   function lazy(){
		 setTimeout(()=>{
			 // 函数式更新 
        addNumber(number =>number+1)
		 },3000)
	 }
	   return <>
	          <div>这是我看到的数字{number}</div>
						<button onClick={()=>addNumber(number+1)}>点击加1</button>
						<button onClick={lazy}>延迟点击</button>
	        </>
}
function Couter3(props){
	 function initstate(){
		 console.log('函数执行')
     return {number:1,age:0}
		}
	 let [count,changecount] = useState(initstate)
	  return <>
	          <div>这是我看到的数字{count.number}</div>
						<button onClick={()=>changecount({...count,number:count.number+1})}>点击加1</button>
			    </>
}
function SubCount(props){
  console.log('subCount的渲染')
	console.log(props)
	 return <div>
		 我是subCount组件
    <span>{props.data.N}</span>
		<button onClick={()=>props.onClick()}>点击加1</button>
	  </div>
}
//记事本 没有没有状态更新组件就不需要重新渲染 
  SubCount = memo(SubCount)
  function Couter4(){
	  console.log('couter4 的渲染')
		let [name,changname]= useState('a')
		let [N,addN] = useState(55)
		let data = useMemo(()=>({N}),[N])//数组里面表示的是依赖项 依赖表示你需要改变的是什么数据 使用useMemo之后会记忆数据 不改变的话不会重新渲染  
    let addClick = useCallback(
			() => {
			   addN(N+1)
			},
	    [N],
		)
		return <>
		    <input value={name} onChange ={(e)=>{changname(e.target.value)}}/>
				 <SubCount data= {data} onClick={addClick}></SubCount>
		  </>
	}
// usememo  usecallback 属于优化项 



render(<Couter4/>, window.root)
