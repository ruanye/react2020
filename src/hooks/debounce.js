import React,{useState}from 'react'
import useDebouns from './usedebouns'
// react-use  
function Debounce() {
	let [a,seta] = useState('')
	let [b,setb] = useState('') //b的值是一个防抖显示 
	// eslint-disable-next-line no-unused-vars 
	let [cancel] = useDebouns(()=>{
		 setb(a)
	},1000,[a])
	return (
		<div>
			 <input onChange={(e)=>seta(e.target.value)}/>
			 {a}
			 <br></br>
			 {b}
			
		</div>
	)
}

export default Debounce
