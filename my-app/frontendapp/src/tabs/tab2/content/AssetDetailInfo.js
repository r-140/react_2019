import React from 'react'

import { Link } from 'react-router-dom';

export class AssetDetailInfo extends React.Component {

	state = {
		asset: { name: '' }
		
	};


	componentDidMount(){
		const { match: { params } } = this.props;

		fetch(`http://localhost:63145/api/assets/asset/${params.id}`)
            .then(res => res.json())
            .then(
                (asset) => {
                    
                    this.setState({
                        asset: asset[0]
                    });
                },
                (error) => {
                    this.error = error;
                }
            )
	}
	render() {
		
		const {asset} = this.state;
		console.log("asset name ", asset);
		return (
			<div >
				<div>
					<div>ID: {asset.id}</div>

					<div>Name: {asset.name}</div>	

					<div>Domain: {asset.domain}</div>	

					<div>Domain2: {asset.domain2}</div>	

					<div>Author: {asset.created_by}</div>	
				</div>

				<div>
					<Link to="/assets">
							<button >Close</button >
					</Link>
				</div>
			</div>
		)
	}
	
}