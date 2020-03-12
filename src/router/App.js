import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Nav  from './Nav'
// Link 导航标签  a标签 
// 路由最外层的组件 Router 
// BrowserRouter as Router as 表示前面变量的别名
//BrowserRouter history模式  hashRouter hash模式
//Route 单路由标签 path   
// Switch 只匹配一个  
// Route上面加exact 表示严格确切的匹配   
function App() {
	return (
		<Router>
		  <Nav></Nav>
			<Switch>
		   <Route path='/' exact>
				 <Home/>
			 </Route>
		   <Route path='/about'>
         <About/>
			 </Route>
		   <Route path = '/profile'>
          <Profile/>
			 </Route>
			 </Switch>
		</Router>
	)
}
function Home() {
	return (
		<div>
			  这是主页 
		</div>
	)
}
function About() {
	return (
		<div>
			  关于我们 
		</div>
	)
}
function Profile() {
	return (
		<div>
			  个人中心  
		</div>
	)
}



export default App
