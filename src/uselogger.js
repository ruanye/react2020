//usereducer 的logger 中间件 
import React,{useReducer,useEffect} from 'react'
import {render} from 'react-dom'
let initialState = {
	number:1
}
function reducer(state={},action){
  switch(action.type){
		case 'ADD':
		return {number:state.number+1}
		default:
		break
	}
}
// 日志中间件 
function useLogger(reduer,initialState){
	let [state,dispacth] = useReducer(reduer,initialState) //这个dispath 是我们真正要派发的dispach 
	function logdispatch(action){
    console.log(state,'老状态')
		dispacth(action)
	}
  useEffect(() => {
	   console.log(state,'新状态')
	}, [state])
  return [state,logdispatch]
}
 function Reducecompont() {
	 const [state, logdispatch] = useLogger(reducer, initialState)
	return (
		<div>
			  <span >{state.number}</span>
				<button onClick={()=>logdispatch({type:'ADD'})}>点击加一</button>
		</div>
	)
}
render(<Reducecompont></Reducecompont>,window.root)
