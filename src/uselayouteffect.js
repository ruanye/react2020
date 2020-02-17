import React ,{useState,useLayoutEffect,useEffect}from 'react'
import {render} from 'react-dom'
// domtree  cssstyle  => rendertree  useeffect 
// 布局结束之后 useLayoutEffect 同步进行dom操作 
function Parent(){
  let [color,setColor] = useState('red')
  useLayoutEffect(()=>{
	  document.getElementById('mydiv').style.backgroundColor ='pink'
  })
	useEffect(() => {
    	console.log(color,'color') 
	 })
	return (<>
	         <div id='mydiv' style={{backgroundColor:color,height:'100px'}}></div> 
					 <button onClick={()=>setColor('red')}>红</button>
					 <button onClick={()=>setColor('yellow')}>黄</button>
					 <button onClick={()=>setColor('blue')}>蓝</button>
	       </>)
	  
}


render(<Parent/>,window.root)

