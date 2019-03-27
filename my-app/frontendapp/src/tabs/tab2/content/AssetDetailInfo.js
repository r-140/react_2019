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
				<div> {asset.name}</div>	

				<div>
				<Link to="/assets">
						<button >Close</button >
					</Link>
				</div>
			</div>
		)
	}
	
}