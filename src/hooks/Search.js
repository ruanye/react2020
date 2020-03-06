import React, { useState } from 'react';
import  useSearch from './useSearch'
import useTilte from './useTilte'
function useColor (color){
  return {color}
}
let  useC  = c=>({color:c})
// 自定义hooks 抽离代码 封装公用功能  
function Search() {
	useTilte('hooksajax请求封装')
  let [query, setQuery] = useState('redux');
  let [data,isLoading,setUrl] = useSearch()
  return (
    <>
		<div style={useColor('green')}>这是颜色使用1</div>
		 <div style={useC('red')}>这是颜色使用</div>
      <input defaultValue={query} onChange={e => setQuery(e.target.value)} />
      <button
        onClick={() =>
          setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        点击搜索
      </button>
      {isLoading ? (
        <div>loading</div>
      ) : (
			 
        <ul>
          { data.hits.map((item, index) => (
            <li key={item.objectID}>{item.title}</li>
          )) }
        </ul>
      )}
    </>
  );
}

export default Search;
