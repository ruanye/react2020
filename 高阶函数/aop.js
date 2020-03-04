// aop 函数切片
let arr  = [1,2,3,4]

let  slice = Array.prototype.slice

Array.prototype.slice = function(arg){
	 console.log('更新')
   slice.apply(...arg)
}
arr.slice(0)