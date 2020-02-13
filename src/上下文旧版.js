import React,{useState,useContext,createContext} from 'react'
import {render} from 'react-dom'

// 老版本写法  大家使用的时候用useContext就行了 
function Child(){
	//Consumer 消费 
	  return <MyContext.Consumer>
     { 
		 (value)=>
		       <>
					   <span>{value.number}</span>
						 <button onClick={()=>value.addNumber(value.number+1)}>点击点1</button>
					 </>
			}
		</MyContext.Consumer> 
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