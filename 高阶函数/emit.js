// 发布订阅
let obj = {
	cbs:[], // 存放on里面的回调函数  
	args:[],
	on(cb){// 订阅
    this.cbs.push(cb)
	},
  emit(a){ // 发布  每次发布事件把参数存到cbs的数组里面 
    this.args.push(a)
		this.cbs.forEach(fn=>fn(this.args))
	}
}
// 先吃饭 在喝水 然后去上学 
setTimeout(()=>{
    obj.emit('吃饭')  
},1000) 
setTimeout(()=>{
    obj.emit('喝水')  
},2000) 

obj.on((args)=>{
	if(args.length===2){
		console.log('上学')
	}
})

