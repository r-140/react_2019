import React from 'react'

import uuidv1 from "uuid";

export class SelectComponent extends React.Component {

	

	render() {
		const { domains, label } = this.props;

		return (
			<label>
				{label}
				<select value={this.props.value || ''} onChange={e => this.props.onChange(this.props.filterName, e.target.value)}>
					{
						domains.map(item => (
							<option key={uuidv1()} value={item.pathid}>
							{item.name}
							</option>
						))
					}
				</select>
			</label>
		)
	}
	
}