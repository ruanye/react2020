import React,{useState,useEffect} from 'react'
import {render} from 'react-dom'
//useEffect 副作用 dom操作 定时器 
// 统计我点击了多少次  显示到title上 
//1. useEffect里的函数会在组件挂载完成后，或者组件更新完成后进行调用

function App(){
	let [number,addN] = useState(0)
	useEffect(()=>{
		document.title =`我点击了${number}次` 
	})
   return <> 
	          <span>{number}</span>
						<button onClick={()=>addN(number+1)}>点击点击</button>
	        </>
}
// 清理副作用 有2种办法(用一个即可)  1 返回一个清理函数  2 使用依赖项 
function App1(){
	let [number,addN] = useState(0)
	// 依赖项没有变话 useEffect就不会重新执行 
	useEffect(()=>{
		let timer =setInterval(() => {
			 addN(number =>number+1)
		}, 1000)
		// useEffect会返回一个清理函数 当组件卸载的时候进行清理 
		// return ()=>{
    //    clearInterval(timer)
		// }
	},[]
)
    return <> 
	          <span>{number}</span>
						<button onClick={()=>addN(number+1)}>点击点击</button>
	        </>
}
render(<App1></App1>,window.root)