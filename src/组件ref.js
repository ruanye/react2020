import React, { Component,createRef } from 'react'
import {render} from 'react-dom'
// 函数组件执行完就销毁了没有this  
class Refcom extends Component {
	constructor(props){
    super(props)
		this.refA = createRef()
	}
	getFocus=()=>{
    this.refA.current.refA.current.focus()
	}
	render() {
		return (
			<div>
				<TextInput ref={this.refA} />
				<button onClick= {this.getFocus}>获取焦点</button>
			</div>
		)
	}
}
class TextInput extends Component {
	constructor(props){
     super(props)
		this.refA = createRef()
	}
	render() {
		return (
			<div>
			   <input  ref= {this.refA}/>
			</div>
		)
	}
}
render(<><Refcom/></>,window.root)

