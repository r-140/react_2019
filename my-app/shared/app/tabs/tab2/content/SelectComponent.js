import React from 'react'

import uuidv1 from "uuid";

export class SelectComponent extends React.Component {

	state = {
		defaultValue: null
	}
	

	render() {
		const { list, label } = this.props;

		return (
			<label>
				{label}
				<select value={this.props.value || ''} onChange={e => this.props.onChange(this.props.filterName, e.target.value)}>
				<option value=''></option>
				{
					// <option value=''></option>
					list.map(item => (
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