import React from 'react'
import ReactDOM from 'react-dom'


export default class MessageComponent extends React.Component {
	render() {
		console.log(this)
		return (
			<div>
				
					<h1>{this.props.msg}</h1>
				
			</div>
		)
	}
}