import React from 'react';
import { connect } from "react-redux";

import uuidv1 from "uuid";


import {loadDomains} from "../../../actions/filterActions"

import { loadByFilter } from "../../../actions/actions";


class FilterForm extends React.Component {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  state = {
    selectedDomain: ""
  }


  handleChange(event) {
    console.log("selectedDomain: ", event.target.id)
    this.setState({selectedDomain: event.target.id});
  }

  handleSubmit(event) {
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }


  componentDidMount() {
    this.props.loadDomains();
    
}

render() {

   const { domains } = this.props;

  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Select Domain:
        <select value={this.state.selectedDomain} onChange={this.handleChange}>
        

          {
             
            domains.map(item => (
              
              <option key={uuidv1()}>
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



// generateOptions(cols, currentDocs) {
        
//   return currentDocs.map(function(item) {
//       // handle the column data within each row
      
//       const cells = cols.map(function (colData) {

//           return <td key={Math.random()}>{item[colData]}</td>;
//       });
//       return <tr key={Math.random()} onClick={confirmRoute(item.id)} >{cells}</tr>;
//   });
// }

}

// function mapDispatchToProps(dispatch) {
//   return {
//     loadByFilter: filter => dispatch(loadByFilter(filter)),
//   };
// }

function mapStateToProps(state) {
  return {
    domains: state.filterReducer.domains,
    
    error: state.filterReducer.error    
  };
}


// const FiltersForm = connect(mapStateToProps, mapDispatchToProps, {loadDomains})(FilterForm);
// export default FiltersForm;


export default connect(
  mapStateToProps,
  { loadDomains }
  // mapDispatchToProps
  
)(FilterForm)