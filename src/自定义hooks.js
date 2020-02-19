import React ,{useState}from 'react'
import {render} from 'react-dom'
// 自定义hooks  规则 use开头 hooks 钩子 
// 自定义hooks 共用的只是逻辑  数据会单独生成新的副本  
function useNumber(){
  let [number,setnumber] = useState(0)
   return [number,setnumber]
}
function Parent1(){
	 let  [number,setnumber] = useNumber()
   return <>
	          <div>组件1{number} </div>
						<button onClick={()=>setnumber(number+100)}>加100</button>
	       </>
	  
}
function Parent2(){
 	 let  [number,setnumber] = useNumber()
   return <>
	          <div>组件1 {number}</div>
						<button onClick={()=>setnumber(number+500)}>加500</button>
	       </>
	  
}

render(<><Parent1></Parent1><Parent2></Parent2></>,window.root)

