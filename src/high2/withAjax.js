 import React from 'react'
  //count 的组件传递过来this.props.val 拿到翻译过来的中文名  传递给uselocal
 export default function(Com){ //Com 是Count组件 
	 return class extends React.Component{
		 constructor(props){
			  super(props)
				this.state= {
					name:''
				}
		 }
		 componentDidMount(){
			 fetch('http://localhost:3000/user.json').then(res=>res.json()).then(data=>{
				 console.log(data)
				 //this.props.val  lilei  
				 this.setState({name:data[this.props.val]})
	        console.log(this.state)
			 })
			 
		 }
		 render(){
			  return <Com name = {this.state.name}></Com>
		 }
	 }
 }