/* eslint-disable react-hooks/exhaustive-deps */
import {useRef,useEffect} from 'react'
// 自定义防抖的hooks 
function useDebouns(fn,wait=1000,deps=[]){
  let timeout = useRef() //{} ref  为了保证是同一个变量  
  	useEffect(() => {
			 if(timeout.current)clearTimeout(timeout.current)
	     timeout.current = setTimeout(()=>{
				 fn()
			 },wait)
    }, deps)
		// 需要有个清除的防抖作用的函数
	 let cancel = ()=>{
		 	clearTimeout(timeout.current)
      timeout=null;
		}
	 return [cancel]
}
export default useDebouns