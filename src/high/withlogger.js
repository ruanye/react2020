import React  from 'react'
export default function(Componet){ //Componet传入的组件 
  return class extends React.Component{
    UNSAFE_componentWillMount(){
			this.start = Date.now()
		}
		componentDidMount(){
			console.log(Date.now()-this.start+'ms')
		}
		// 我们要把传入的老组件组件渲染出来  
		render(){
			 return <Componet {...this.props}/>
		}
	}
}