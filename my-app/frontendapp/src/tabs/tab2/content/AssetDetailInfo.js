import React from 'react'

import { Button, Image, Modal } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

export class AssetDetailInfo extends React.Component {

	state = {
		assets: []
	}

	componentDidMount(){
		// todo prbably it i=need to use componentDidupdate instead

		const { match: { params } } = this.props;

		fetch(`http://localhost:63145/api/assets/${params.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        assets: result,
                    });
                },
                (error) => {
                    this.error = error;
                }
            )
	}
	render() {
		const {asset} = this.state;
		return (
			<Modal open dimmer="blurring">				
	
				<Modal.Header>{asset.name}</Modal.Header>
				<Modal.Content>
				<Modal.Description>
				{/* name, domain, domain2, created_by, creation_date */}
					<p>Name: {asset.name}</p>
					<p>domain: {asset.domain}</p>
					<p>domain2: {asset.domain2}</p>
					<p>created_by: {asset.created_by}</p>
					<p>creation_date: {asset.creation_date}</p>
				</Modal.Description>
				</Modal.Content>

				<Modal.Actions>
					<Link to="/assets">
						<Button>Close</Button>
					</Link>
        </Modal.Actions>			
			</Modal>
		)
	}
}