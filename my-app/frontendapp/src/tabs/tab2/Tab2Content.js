import React from 'react';

import { connect } from "react-redux";


import TableFromJson from './content/TableFromJson';
import ErrorBoundary from './ErrorBoundary';
import FilterForm from './content/FilterForm'
import { loadByFilter } from "../../actions/actions";

export class Tab2Content extends React.Component {

constructor(){
  super();
  // super(props);

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

}

  state = {
    selectedDomain: ""
  }


  handleChange(event) {    
    this.setState({selectedDomain: event.target.value});
  }

  handleSubmit(event) {

    event.preventDefault();

    console.log("selecteddomain ", this.state.selectedDomain);

    this.props.loadByFilter(this.state.selectedDomain );
  }


  render() {
    return (
        <div id = "rootstr">
          <ErrorBoundary>            
              <FilterForm handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>            
              <br/>            
              <TableFromJson/>
          </ErrorBoundary>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadByFilter: filter => dispatch(loadByFilter(filter)),
  };
}


export default connect(
  null,
  mapDispatchToProps
  
)(Tab2Content)


