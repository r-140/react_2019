import React from 'react';

// import uuidv1 from "uuid";
import { SelectComponent } from './SelectComponent';

class FilterForm extends React.Component {

  render() {

    // const { domains } = this.props;
    // const { domains2 } = this.props;
    // const { languages } = this.props;
    // const { workflows } = this.props;
    // const { assetTypes } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit}>

      <SelectComponent label = "Select Domain: " value={this.props.value} domains={this.props.domains} onChange={this.props.onChange}/>

      <SelectComponent label = "Select Domain2: " value={this.props.value} domains={this.props.domains2} onChange={this.props.onChange}/>
        {/* <label>
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
        */}
        <input type="submit" value="Find Assets" /> 
      </form>
    );
  }



}

export default FilterForm;

