//props-types 验证属性 
import React, { Component } from 'react'
import {render} from 'react-dom'
import  PropTypes from 'prop-types'
 // PropTypes 类型检查 
export default class Person extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props){
		super(props)
	}
	//如果不传值给的默认值 
	static defaultProps = {
		age:25
	}
	// eslint-disable-next-line react/no-typos
	static propTypes = {
    age:PropTypes.number.isRequired, //isRequired 必传
		sex:PropTypes.oneOf(['男','女']),
		pos:PropTypes.shape({ //形状  
			x:PropTypes.number,
			y:PropTypes.number
		}),
		// 自定义验证器 
	age:function(props,propName,componentName){
		if(props[propName]<18){
			  return new Error(`Invalid prop ${propName}  supplied to ${componentName}. Validation failed.`)
		}
	}
		
	}
	render() {
		return (
			<div>
				 {this.props.age}
				 {this.props.sex}
			</div>
		)
	}
}
let personobj = {
	 //只能大于18岁 必传 数字
	 sex:'女',//只能男或者女 其中一个 
	 hobby:['吃饭','睡觉'], 
	 pos:{ //具有xy 属性构成的对象 
		 x:120,
		 y:400
	 }
	}
render(<Person {...personobj}/>,window.root)

