import React from 'react'

import uuidv1 from "uuid";

export class SelectComponent extends React.Component {

	state = {
		defaultValue: null
	}
	

	render() {
		const { list, label } = this.props;
		console.log("list is empty ", isEmpty(list));
		return (
			<label>
				{label}
				<select value={this.props.value || ''} onChange={e => this.props.onChange(this.props.filterName, e.target.value)}>
				<option value=''></option>
				
				if(isEmpty(list)===false)
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
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

SelectComponent.defaultProps = {
	list: {},
	filterName: 'filterName',
	label: 'select',
	onChange: () => {}
  };