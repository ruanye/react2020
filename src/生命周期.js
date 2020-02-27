import React, { Component } from 'react'
import {render} from 'react-dom'
// 只有类组件有生命周期  
// 首次挂载的生命周期  
class Lifecycle extends Component {
	constructor(){
    super()
		this.state = {
			 number:1
		}
    console.log('0 construtor')
	}
 shouldComponentUpdate(){ //组件是否需要更新 可以返回true/falsed的值  如果返回值false 则组件不更新(状态改变 但是视图不更新)
  console.log('shouldComponentUpdate', this.state)
	if(this.state.number%2===0){
     return false
	 }
	 return true 
 }

	componentDidMount(){
	  console.log('2 partent componentDidMount')
	}
	add = ()=>{
		this.setState({number:this.state.number+1})
	}
	// //获取更新前的快照 参数是老的属性和老的状态  会有一个返回值 这个返回值 会作为componentDidUpdate的第三个参数  
	// getSnapshotBeforeUpdate(prevProps, prevState){
	// 	console.log('getSnapshotBeforeUpdate')
  //   return 300
	// }
	// componentDidUpdate(prevProps, prevState, snapshot){ //组件更新完成 
	//    console.log('componentDidUpdate')
  //    console.log('componentDidUpdate的参数',snapshot)
	// }
	UNSAFE_componentWillMount(){ //组件即将卸载   17.x 版本将会被废弃  
   console.log('  componentWillMount')
	}
	render() {
		console.log('1 render')
		return (
			<div>
				生命周期 
				 {this.state.number}
				 <button onClick= {this.add}>点击加1</button>
		    <Child></Child>
			</div>
		)
	}
}
class Child extends Component{
	constructor(props){
		super(props)
		this.state= {
			number:0
		}
	}

   componentDidMount(){
	  console.log(' child componentDidMount')
	}
		//根据新的属性（props）和老的状态（state）派发 一个新的状态（state）
	static getDerivedStateFromProps(nextprops,prevstate){
      console.log('nextprops',nextprops, 'prevstate',prevstate)
			return {N:prevstate.number+nextprops.number}
	}

	render(){
	return (
		<>
			<div>
				我是子组件 
				 {//派发出来的新的状态
				 }
				 {this.state.N}
			
			</div>
	
		</>	
	 )
	}
}
render(<Lifecycle/>,window.root)

