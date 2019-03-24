import React from 'react'

export default class AssetDetailInfo extends React.Component {
	render() {
		console.log(this)
		return (
			<div>				
                <div>{this.props.assetId}</div>				
			</div>
		)
	}
}