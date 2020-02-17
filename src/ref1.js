import React ,{createRef,useRef}from 'react'
import {render} from 'react-dom'
// ref  reference 引用  拿组件/原生dom 
//  creactRef 每次返回的是新对象（每次ref都会更新） useRef返回的是老对象 
function Children(){
		let  ref = useRef()  // {current:{}}
		// 我们需要的属性都会挂载ref的current属性上面 
		//获取焦点的函数 
		function getfocus(){
			 console.log(ref)
			 ref.current.focus()
			 ref.current.value = '1234'
		}
    return <>
	        <input ref = {ref}/>
					<button onClick={getfocus}>点击获取焦点</button>
	      </>
}
render(<Children/>,window.root)

