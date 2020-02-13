import React,{useReducer} from 'react'
import {render} from 'react-dom'
// Reducer 状态管理器   useReducer处理复杂的逻辑  要通过dispatch去派发事件 
 // intialstate 初始化的数据 
 let intialstate= 0;
function reducer(state=intialstate,action){
	  //根据action的事件类型进行处理 action.type可以判断事件类型 通过事件类型的不同来对state 进行修改 
		switch(action.type){
       case 'ADD':
			   return {...state,number:state.number+action.payload} 
		  case 'MINUS':
			  return  {...state,number:state.number-1}
			default:
				 break; 
		}
}
function App(){
	//state 操作的数据  dispatch 派发事件的方法  
	// usereducer有三个参数 reducer函数(操作state) intialstate初始化的数据  如果需要第三个参数会把第三个参数的返回值作为reducer 里面state的初始值 
	const [state,dispatch] = useReducer(reducer,intialstate,()=>({number:intialstate}))
	return  <>
	          <span>{state.number}</span>
						  {
							  // 派发了一个ADD事件到reducer type 表示事件类型/事件名   dispath里面派发的东西我们叫做action 动作 动作会派发到reducer  payload 载荷  需要传参的话用payload 
								
							}
						<button onClick={()=>dispatch({type:'ADD',payload:5})}>点击加一</button>
			
						<button onClick={()=>dispatch({type:'MINUS'})}>点击减一</button>
	         </>
}
render(<App></App>,window.root)