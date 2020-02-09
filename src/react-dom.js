//导出一个render方法 渲染dom 
let  render = (content,parentnote) =>{
	//判断是不是字符串或者数字 
  if(typeof content == 'string'||typeof content =='number'){
		  return parentnote.appendChild(document.createTextNode(content))
	}
	 // type: "span" props: {a: "1",	className:'red' children: Array(1)}
  let  {type,props} = content;
  let el = document.createElement(type) // span  
	console.log(el)
	// 把chidren 渲染到span里面   如果chilren 不是数组就转成数组 
	 if(!Array.isArray(props['children'])){
      props['children'] =[props.children]; 
		 }
	 // 循环props这个对象
	 for(let key in props){
		 if(key == 'className'){
        el.setAttribute('class',props[key])
		 }else if(key == 'htmlFor'){
          el.setAttribute('for',props[key])
		 }else if(key == 'style'){
			 let style = props[key]
			  // style 是个对象     不用这种方法做出来 
				for(key in style ){
					el.style[key] = style[key]
				}
			//用csstext 今天的作业 实现添加样式的功能  
		 }
		 else if(key =='children'){
			  props[key].forEach(child => {
					 // 递归 
					 render(child,el)
				});
		 }else{
			  el.setAttribute(key,props[key])
		 }
	 }

  parentnote.appendChild(el)
}
// props 传值 state 状态 函数组件 hooks   
export default render