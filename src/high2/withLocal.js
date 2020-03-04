 import React from 'react'
 // hooks 去解决了 
 export default function(Com,key){ //key本地存储的key  Com组件是useAjax  
	  return class extends React.Component{
		 constructor(props){
			 super(props)
			 this.state = {val:''}
		 }
     componentDidMount(){
			 this.setState({val:localStorage.getItem(key)})
			
		 }
		 render(){
			 // 通过props 把val值传给了 count 和email组件  
			 return <Com {...this.props} val={this.state.val}/> 
		 }
	 }
 }