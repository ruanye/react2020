import React, { Component } from 'react'
import withLocal from './withLocal'
import withAjax from './withAjax'
class Count extends Component {
render() {
  return (
			<div>
				 用户 
			   <input defaultValue={this.props.name}/>
			</div>
		)
	}
}
let userAjax = withAjax(Count)
export default  withLocal(userAjax,'user')