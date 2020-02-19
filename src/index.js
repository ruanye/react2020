import React, { Component } from 'react'
import {render} from 'react-dom'
// 虚拟dom好处只会更新改变的地方 
export default class Coutner extends Component {
	constructor(props){
		 super(props)
     this.state = {timer:new Date().toLocaleTimeString()}
	}
	// component 组件  Did 已完成 Mount 挂架  组件挂载完成 
	componentDidMount(){ // 只会执行一次 
    // ajax请求 异步处理 
	  this.time  = setInterval(() => {
			this.setState({timer:new Date().toLocaleTimeString()})
		},1000);
	}
	// wiil 将要 un+加在一个单词上面标示取反  卸载 
	componentWillUnmount(){
     clearInterval(this.time)
	}
	render() {
		return (
			
			<div>
				{this.state.timer}
			</div>
		)
	}
}
function Coutner2(){
	  return <>
		         Coutner2
		       </>
}
render(<><Coutner/> <Coutner2/></>,window.root)


