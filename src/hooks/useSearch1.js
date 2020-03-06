import React,{useState,useEffect} from 'react'
// 自定义hooks  
function useSearch(url) {
	let [data,setData] = useState({hits:[]})
	let [isLoading,setIsLoading] =useState(false)
	useEffect(()=>{

	},[url])
  	
}

export default useSearch
