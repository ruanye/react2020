import React, { Component } from 'react'
import withLocal from './withLocal'
class Count extends Component {
render() {
  return (
			<div>
				 用户 
			   <input defaultValue={this.props.val}/>
			</div>
		)
	}
}
export default withLocal(Count,'user')