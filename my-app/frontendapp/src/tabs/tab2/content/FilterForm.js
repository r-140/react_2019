import React from 'react';
import { connect } from "react-redux";

import uuidv1 from "uuid";


import {loadDomains} from "../../../actions/filterActions"

class FilterForm extends React.Component {

  // constructor(props) {
  //   super(props)
  

  // };

  componentDidMount() {
    this.props.loadDomains();
    
}

render() {

   const { domains } = this.props;

  return (
    <form onSubmit={this.props.handleSubmit}>
      <label>
        Select Domain:
        <select value={this.props.selectedDomain} onChange={this.props.handleChange}>       

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



function mapStateToProps(state) {
  return {
    domains: state.filterReducer.domains,
    
    error: state.filterReducer.error    
  };
}

export default connect(
  mapStateToProps,
  { loadDomains }
  // mapDispatchToProps
  
)(FilterForm)