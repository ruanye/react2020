import React, {useState, useEffect} from 'react'
import {render} from 'react-dom'
// use开头 开头的函数 自定义hooks  封装公用逻辑 每次hooks调用会产生一个副本(公用逻辑，不共用数据) hooks只能在函数组件里面使用 
function useNumber(){
	let  [num,setnum] = useState(0)
	 useEffect(()=>{
		 setInterval(()=>{
			  setnum(num=>num+1)
		 },1000)
	 },[])
	return [num,setnum]
}
function APP1(){
	 let [num,setnum] = useNumber()
   return <>
	         <div>{num}</div>
					  <button onClick={()=>setnum(num+100)}>组件1按钮</button>
	       </>
}
function APP2(){
	let [num,setnum] = useNumber()
	return <>
	 	       <div>{num}</div>
					 <button onClick={()=>setnum(num+200)}>组件2按钮</button>
		    </>
}
render(<><APP1/><APP2/></>,window.root)
