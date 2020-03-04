//函数里面返回函数 把函数作为参数  2个箭头以上的函数 
function _toString(str){
	 return Object.prototype.toString.call(str).slice(8,-1)
}
function isType(type){
  return function(str){
      return type === _toString(str)
	}
}
let obj ={}
let arr = ['String','Number','Array','Object']
arr.forEach(type=>{
  obj[`is${type}`] = isType(type)
})
console.log(obj.isString('a'))
console.log(obj.isNumber(124))