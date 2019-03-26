import React from 'react';

import uuidv1 from "uuid";

class FilterForm extends React.Component {

 

  render() {

    const { domains } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Select Domain:
        <select value={this.props.value || ''} onChange={e => this.props.onChange(e.target.value)}>

            {

              domains.map(item => (

                <option key={uuidv1()} value={item.pathid}>
                  {item.name}
                </option>
              ))
            }
          </select>
        </label>
        <input type="submit" value="Find Assets" />
      </form>
    );
  }



}

export default FilterForm;

