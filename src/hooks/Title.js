
import React,{useEffect,useState} from 'react'
// rfce 自动生成函数默认导出快捷键  
function Title() {
	let [Count,setCount]= useState(0)
	useEffect(()=>{
   document.title = `你点击了${Count}次`
	},[Count])
	return (
		<div>
			  这是title 
				<button onClick={()=>setCount(Count+1)}>
					点击
				</button>
		</div>
	)
}

export default Title



