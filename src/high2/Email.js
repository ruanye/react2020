import React, { Component } from 'react'
import withLocal from './withLocal'
  class Email extends Component {
   render() {
		return (
			<div>
			  邮箱  <input defaultValue={this.props.val}/>
			</div>
		)
	}
}

export default withLocal(Email,'email')