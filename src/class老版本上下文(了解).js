import React, { Component } from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types';
// class 的旧版上下文 爷爷=>父=>子 (不要求掌握)
// 组件跨层级(一级以上)传递数据  上下数据定义 如果上层组件有重复定义 以最近的上下文为准  如果上级多层组件定义了不一样的上下文 则会放在一个对象上 
class Page extends Component {
	constructor(){
		super()
		this.state = {color:'red'}
	}
	// 父组件定义 定义子上下文对象的属性和类型
  static	childContextTypes ={
    color:PropTypes.string,
		setColor:PropTypes.func
  }
	//返回或者说定义真正的子上下文
	 getChildContext(){
    return  {
			 color:this.state.color,
			 setColor:this.setColor
		}
	 }
	 setColor=(color)=>{
     this.setState({color})
	 }
	render() {
		return (
			<div>
				<Content>
					<Tittle></Tittle>
				</Content>
			 	<Content>
						<Header></Header>
				</Content>
			</div>
		)
	}
}
class Content extends Component {
		// 父组件定义 定义子上下文对象的属性和类型
  // static	childContextTypes ={
  //   color:PropTypes.string 
  // }
	// //返回或者说定义真正的子上下文
	//  getChildContext(){
  //   return  {
	// 		 color:"green"
	// 	}
	//  }
	render() {
		return (
			<div>
				  {
					 //this.props.children 表示所有子组件 
					}
			 		{this.props.children}
			</div>
		)
	}
}

class Tittle extends Component {
	 //指定我要获取哪些上下文对象
	static contextTypes = {
		color:PropTypes.string,
		setColor:PropTypes.func
	}
	render() {
	console.log(this.context)
	// this.context 就是我们获取到的上下文对象 
		return (
			<>
			<div style={{color:this.context.color}}>
				  我是标题组件
			</div>
			<button onClick={()=>this.context.setColor('green')}>变绿</button>
			<button onClick={()=>this.context.setColor('pink')}>变粉</button>
			</>
		)
	}
}
class Header extends Component {
	static contextTypes = {
		color:PropTypes.string
	}
	render() {
		return (
			<div style={{color:this.context.color}}>
				  我是头部组件
			</div>
		)
	}
}

 

render(<Page/>,window.root)