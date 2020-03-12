import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
	return (
		<div>
			<Link to='/'>首页</Link>
			<Link to='/about'>关于我们</Link>
			<Link to='/profile'>个人中心</Link>
		</div>
	)
}

export default Nav
