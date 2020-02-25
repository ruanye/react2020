import React, { Component,createContext } from 'react'
import {render} from 'react-dom'

// class 新版本上下文 
//1 创建一个上下文对象 返回2个组件 Provider(提供者)  Consumer(消费者)
let myContext = createContext() 
class Page extends Component {
	constructor(){
		super()
		this.state = {color:'green'}
	}
  render() {
		return (
			// 2 使用Provider组件 定义value值  用来传递上下文的的对象
			<myContext.Provider value={{color:"red"}}>
				<Content>
					<Tittle></Tittle>
				</Content>
			 	<Content>
				  <Header></Header>
				</Content>
			</myContext.Provider>
		)
	}
}
class Content extends Component {
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
    //3. 拿到上下文对象 定义一个静态属性等于我们创建的上下文对象 就可以拿到this.context这个上下文对象了 
	static contextType = myContext
	render() {
		return (
			<>
			<div style={{color:this.context.color}}>
				  我是标题组件
			</div>
			</>
		)
	}
}
// 3 新版上下文Consumer方式使用  返回一个函数 value值是函数的参数 
class Header extends Component {
  // static contextType = myContext
	render() {
		return (
			<myContext.Consumer>
			   {value=>{
					 return <div style={{color:value.color}}>
				  我是头部组件
			     </div>
				 }}
			</myContext.Consumer>
		)
	}
}


 

render(<Page/>,window.root)