import React from 'react'

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