import {useState,useEffect} from 'react'
import axios from 'axios'
// 自定义hooks  
function useSearch() {
	let [data,setData] = useState({hits:[]})
	let [isLoading,setIsLoading] =useState(false)
	let [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux'
  );
	useEffect(()=>{
     let fetData = async () => {
      setIsLoading(true); // 表示正在请求中
      let result = await axios.get(url); //result 请求回来的结果
      // 把请求回来的数据给data
		  setData(result.data);
		  setIsLoading(false); // 表示请求结束 不在显示loading状态
    };
    fetData();
	},[url])
	return [data,isLoading,setUrl]
  	
}

export default useSearch
