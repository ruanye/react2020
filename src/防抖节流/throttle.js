// 节流  窗口 滚动等频繁触发的事件 点的时间每1秒只能触发一次  
// 节流函数
function throttle(fn,wait){ //fn要执行的时间 wait 需要隔多久执行一次
   // 定义开始的时间 第一次进来就是0    
	 let  previos =0 
	 let that = this; //因为this指针会改变 所以需要存this  this是谁 只和执行有关 和定义无关   
   return function(){
		  //定义现在的时间 
			let now = Date.now()
			// 现在的时间减去开始的时间 大于 wait 就让fn执行 
			if(now - previos>wait){
				 fn.apply(that,arguments)
				 // 第二次点击的的开始时间变成了now
				 previos= now 
			}
	 }
}




let btn = document.getElementById("btn")


function fn(){
	console.log(1)
}
btn.addEventListener('click',throttle(fn,1000),false)