import React,{useState,useContext,createContext} from 'react'
import {render} from 'react-dom'

// useContext 使用上下文 多层传值 
function Child(){
	  //3 通过useContext拿到上下文 
		let {number,addNumber} = useContext(MyContext) 
	 return  <>
	          <span>{number}</span>
						<button onClick={()=>addNumber(number+1)}>
							上下文的点击加1 
						</button>
	       </>
}
// 1 创建一个上下文 
let MyContext  = createContext()
function App(){
	   let [number,addNumber] = useState(0)
		 // 2 提供者 通过value提供给外部使用 
    return <MyContext.Provider value={{number,addNumber}} >
		         <Child></Child>
	</MyContext.Provider>
}
render(<App></App>,window.root)