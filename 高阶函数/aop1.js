function say(){
	  console.log('1')
}
// 在函数执行之前执行一段逻辑  
Function.prototype.before = function(fn){
  let self = this;
	console.log('函数执行之前做的事情')
	fn.apply(self,arguments)   
}
say.before(()=>{
	 console.log('他')
})
say()