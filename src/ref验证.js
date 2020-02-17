import React ,{createRef,useRef,useState}from 'react'
import {render} from 'react-dom'
// 验证creactRef 和 useRef 返回的是否是新对象 
function Parent(){
	let [N,SetN] = useState(0)
  return  <>
	          <Children></Children>
						<span>{N}</span>
						<button onClick={()=>SetN(N+1)}>点击加1</button>
	     </>
}
let inputref;
function Children(){
		let  ref = createRef()  // {current:{}}
	   console.log('inputref==ref',inputref==ref)
		 inputref = ref;
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
render(<Parent/>,window.root)

