import React, { Component,createContext,useContext } from 'react'
import {render} from 'react-dom'
// 在项目不建议使用上下文  容易造成混乱 
// 函数不能使用静态属性 函数没有this
// 函数使用上下文 
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
					 <Header></Header>
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

// 函数组件使用上下文方式 1  
function Header1() {
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
// 函数组件使用上下文方式 2 使用hooks 钩子函数 
function Header() {
	  let ctx = useContext(myContext) // useContext参数就是我们定义的上下文对象 
		return <div style ={{color:ctx.color}}>
				      我是头部组件
					  </div>
			
}


 

render(<Page/>,window.root)