// 有一个西瓜 一次吃一口 2口吃完 
function after(time,callback){
	return function(){
    if(--time==0){
			callback()
		}
	}
}
let eat = after(3,()=>{
	console.log('吃完了')
})
eat()
eat()
eat()
