import React, { Component,PureComponent, Children } from 'react'
import {render} from 'react-dom'
// 解决class里面this的三种方案 
//1 通过bind解决 this.add.bind(this)
//2.解决通过箭头函数 onClick ={()=>this.add()}
//3. 把方法定义到类上  

//PureComponent 组件状态不变就不会重新渲染 
//  react 里面数据是向下流动的 props是不能被子组件修改的 
// props 父->子 姓 props   state 心情很好 
export default class Hello extends PureComponent {
	constructor(props){ //类组件的构造函数 
	 super(props)// this.props = props
	 //这里初始化this.state 
	 this.state= {number:1,a:'你好'}
	 this.add1 = this.add1.bind(this)
	}
	add1(){
		// setState的回调函数写法 基于上次的值  state 表示上次的状态 
  	this.setState((state)=>({
			number:state.number+1
		}),()=>{
			 console.log(this.state.number) //2 3 
			 //第二个回调函数会返回最新的值 
			 console.log(this.state)
		})
		this.setState((state)=>({
			number:state.number+1
		}))
	}
	add=()=>{
		//this.state只能通过this.Setstate进行修改 会自动合并状态  进行render  
		// setState是异步的 通过队列来实现操作的 
		// this.state.number = 2 
		 //this.forceUpdate() //强制更新 了解 
      this.setState({number:1})
	}
	// render 
	render() {
	  return (
			<>
			<div >
				 {this.state.number}
			</div>
		  <Child name = {this.props.name} number = {this.state.number}></Child>
			<button onClick ={this.add}>加号</button>
			<button onClick ={this.add1}>加号</button>
			</>
		)
	}
}
function Child(props){
	 return <div>{props.name} {props.number}</div>
}

render(<Hello name='lilei'></Hello>,window.root)