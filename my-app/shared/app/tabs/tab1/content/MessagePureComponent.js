import React from 'react'


export default class MessagePureComponent extends React.PureComponent {
	render() {
		console.log(this)
		return (
			<div>
				
					<h1>{this.props.msg}</h1>
				
			</div>
		)
	}
}