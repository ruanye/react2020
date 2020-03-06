import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Search() {
  // 1 请求的时候需要有数据和设置数据的方法
  let [data, setData] = useState({ hits: [] });
  //2 请求数据的时候需要考虑等待时间做loading 默认是loading不显示
  let [isLoading, setIsLoading] = useState(false);
  //3 需要有请求的url和修改请求url的方法
  let [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux'
  ); //query 后面是你要搜索什么
  // 4 搜索框的内容和设置内容的方法
  let [query, setQuery] = useState('redux');
  useEffect(() => {
    // 发送请求 写发送请求的方法
    let fetData = async () => {
      setIsLoading(true); // 表示正在请求中
      let result = await axios.get(url); //result 请求回来的结果
      // 把请求回来的数据给data
      setData(result.data);
      setIsLoading(false); // 表示请求结束 不在显示loading状态
    };
    fetData();
  }, [url]);

  return (
    <>
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
          {data.hits.map((item, index) => (
            <li key={item.objectID}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Search;
