import React from 'react'

export default class AssetDetailInfo extends React.Component {

	state = {
		data: []
	}

	componentDidMount(){
		// todo prbably it i=need to use componentDidupdate instead
		// todo specify id via params
		const id = 1;
		fetch(`http://localhost:63145/api/assets/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        
                        data: result,
                        
                    });
                },
                (error) => {
                    this.error = error;
                }
            )
	}
	render() {
		console.log(this)
		return (
			<div>				
                <div>{this.props.assetId}</div>				
			</div>
		)
	}
}