// purecomponent
import React, { Component,PureComponent,createRef } from 'react'
import {render}  from 'react-dom'
// PureComponent 对比组件前后状态 进行的是浅比较 只比较对象的第一层 
class My extends PureComponent {
	constructor(props){
		 super(props)
		 this.inref = createRef()
		 this.state = {count:{number:0},tiltle:'标题1'}
	}
	add = ()=>{
		let inval =parseFloat(this.inref.current.value)   
    this.setState({count:{...this.state.count,number:this.state.count.number+inval}})
	}
	render() {
		console.log('render')
		return (
			<div>
				  {this.state.count.number}
					<input ref ={this.inref}/>
				  <button onClick={this.add}>加</button>
					<Tiltle1 tiltle ={this.state.tiltle}></Tiltle1>
			</div>
		)
	}
}
function Tiltle(props){
	  console.log(' tiltle  render')
   return <div>{props.tiltle}</div>
}
function memo1(FunComponnt){
   return class extends PureComponent{
		  render(){
				return  <FunComponnt {...this.props}></FunComponnt>
			}
	 }
}
//一个函数  返回一个新的把组件作为参数组件   叫做高阶组件  
function memo2(funComponnt){
    class My extends PureComponent{
		  render(){
				return funComponnt(this.props)
			}
	 }
	 return My
}

const Tiltle1 =memo2(Tiltle)

render(<My/>,document.getElementById('root'))
