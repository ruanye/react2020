// 受控组件 和非受控组件 //受react控制的组件 只能state修改组件状态 
import React, { Component } from 'react'
import {render} from 'react-dom'
export default class Sum extends Component {
	constructor(props){
		super(props)
		this.state= {
			 a:1,
			 b:1,
			 c:''
		}
	}
	geta=(e)=>{
    this.setState({a:e.target.value})
		console.log(this.state.a)
	}
	getb=(e)=>{
    this.setState({b:e.target.value})
		console.log(this.state.b)
	}
	getSum=()=>{
		let a = parseFloat(this.state.a)
		let b = parseFloat(this.state.b)
    this.setState({c: a +b})
	}
	render() {
		return (
			<div>
				 <input onChange={this.geta} value= {this.state.a} />
				 <input value= {this.state.b} onChange={this.getb}/>
				  <button onClick={this.getSum}>=</button>
				 <input defaultValue= {this.state.c}/>
			</div>
		)
	}
}

render(<Sum></Sum>,window.root)