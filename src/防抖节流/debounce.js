// 防抖  点击按钮 如果在一定时间内继续点击了则不执行事件 最后一次点击如果超过了一定时间则执行事件 
// 大家在等电梯  电梯关门当做一个事件 第一人进来了 如果2秒内没有人继续进来则电梯关门  有人继续进来则重新开始2秒计时 依次类推    

function debounce(fn,wait){
	let timeout; 
	let that = this;
	console.log('进来了一个人')
  return function(){
		// 如果在2秒之内点击了按钮 则清除上次的计时器  重新计时  
		if(timeout)clearTimeout(timeout)
    timeout = setTimeout(()=>{
			 fn.apply(that,arguments)
		 },wait)
	}
}
let btn = document.getElementById("btn")


function fn(){
	console.log('电梯关门')
}
btn.addEventListener('click',debounce(fn,2000),false)