// 非受控组件 ref 
// ref是个字符串 通过ref直接拿到dom 
// ref 是个函数
// createRef 
import React, { Component,createRef } from 'react'
import {render} from 'react-dom'
class Sum extends Component {
  getSum=()=>{
    let a =  this.refs.a.value 
    let b =  this.refs.b.value 
		this.refs.result.value = a+b
	}
	render() {
		return (
			<div>
				 <input  ref='a'/>
				 <input  ref='b'/>
				  <button onClick={this.getSum}>=</button>
				 <input ref='result'/>
			</div>
		)
	}
}
 class Sum1 extends Component {
  getSum1=()=>{
    let  a = this.a.value;
	  let b = this.b.value
	  this.c.value = a+b
	}
	render() {
		return (
			<div>
				 <input  ref={a=>this.a=a}/>
				 <input  ref={b=>this.b=b}/>
				  <button onClick={this.getSum1}>=</button>
				 <input  ref= {c=>this.c=c}/>
			</div>
		)
	}
}
// 最新版本
 class Sum2 extends Component {
	 constructor(props){
     super(props)
		 this.refa = createRef() //{current:null}
		 this.refb = createRef()
     this.refc = createRef()
	 }
  getSum2=()=>{
		let a = this.refa.current.value;
		let b = this.refb.current.value
    this.refc.current.value = a+b
	}
	render() {
		return (
			<div>
				 <input ref={this.refa}/>
				 <input ref={this.refb} />
				  <button onClick={this.getSum2}>=</button>
				 <input ref={this.refc}/>
			</div>
		)
	}
}

render(<>组件1<Sum/><br/>组件2<Sum1/><br/>组件3<Sum2/></>,window.root)