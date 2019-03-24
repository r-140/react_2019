import React from 'react';
import { connect } from "react-redux";

// import { reduxForm } from 'redux-form';

import {loadDomains} from "../../../actions/filterActions"

import { loadByFilter } from "../../../actions/actions";


class FilterForm extends React.Component {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  state = {
    selectedDomain: null
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
    console.log("componentDid mount props: ", this.props);
    this.props.loadDomains();
}

render() {

  console.log("filter props: ", this.props);

  const { data } = this.props.data;

  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Select Domain:
        <select value={this.state.selectedDomain} onChange={this.handleChange}>


          {
            data.map(item => (
              <option key={item.pathid}>
                 {item.name}
              </option>
            ))
          }
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}


}

function mapDispatchToProps(dispatch) {
  return {
    loadByFilter: filter => dispatch(loadByFilter(filter)),
  };
}

function mapStateToProps(state) {
  console.log("mapStateToProps: state ", state)
  return {
    data: state.domains,
    isLoaded: state.isLoaded,
    error: state.error    
  };
}


const FiltersForm = connect(mapStateToProps, mapDispatchToProps, {loadDomains})(FilterForm);
export default FiltersForm;


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
//   { loadDomains }
// )(FilterForm)