// children 可能是一个也可能是多个 一个的时候就是字符串 多个的时候是个数组 
function ReactElment(type,props){
	return {type,props}
}
function createElement(type,props,...arg){ 
	 //{a: "1"}
	let config = {}; //config 拷贝props对象上的所有属性 
  for (let key in props){
		config[key] = props[key]
	}
	//arguments 是类数组   
	// 类数组转数组 1 Array.from(es6方法) 2 拓展预算符(es6）3. [].slice.call()/Array.prototype.slice.call()
	// childs 就是需要渲染的文本节点或者子元素 
	let childs  = Array.from(arguments).slice(2)
	if(childs.length==1){
		config['children'] = childs[0]
	}else if(childs.length>1){
			config['children'] = [childs]
	}
  return ReactElment(type,config)  
}
//导出一个方法叫做createElement 这个方法的作用是导出一个对象 
export default {createElement}