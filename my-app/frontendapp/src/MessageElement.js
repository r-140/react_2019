import React from 'react'
import ReactDOM from 'react-dom'


var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

export default class MessageElement extends React.Component {

	title = React.createElement(
		'h1',
		{id: 'title', className: 'header', style: style},
		this.props.msg
	)

	render() {
		console.log(this)
		return (
			<div>
				{this.title}
				
				
			</div>
		)
	}
}