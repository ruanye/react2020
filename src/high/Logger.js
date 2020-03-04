import React from 'react'
import WithLoger from './withlogger'
// 高阶组件 传入一个老组件 返回一个新组件 高阶组件一般用来处理通用逻辑  
class App extends React.Component {
	render() {
		return (
			<div>
				高阶组件
			</div>
		)
	}
}
//高阶组件的返回值是我们要渲染的组件 
export default WithLoger(App)