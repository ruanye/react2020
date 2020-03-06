import React,{useState,useEffect} from 'react'
import {render} from 'react-dom'
import axios from 'axios'
// 自定义hooks 公用的函数  use开头  自定义ajax 
function useAjax(url){
	let [data,setdata] = useState(null)
	  useEffect(()=>{
	    let fetchData = async ()=>{
				 let res =  await axios.get(url)
				 setdata(res.data)
			}
			fetchData()
	}
,[url])
	  
   return data
}
function App(){
  let data =  useAjax('http://localhost:3000/user.json')

	if(data===null){
		return <div>loading...</div>
	}
	return <div>{data.lilei}</div>
}
render(<App>
  
</App>,window.root)