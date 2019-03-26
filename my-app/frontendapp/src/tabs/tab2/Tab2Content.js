import React from 'react';

import { connect } from "react-redux";

import { bindActionCreators } from 'redux'


import TableFromJson from './content/TableFromJson';
import ErrorBoundary from './ErrorBoundary';
import FilterForm from './content/FilterForm'
import { loadByFilter } from "../../actions/actions";
import { loadDomains } from "../../actions/filterActions"

class Tab2Content extends React.Component {



  state = {
    selectedDomain: null
  }

  componentDidMount() {
    this.props.loadDomains();
  }


  handleChange = (value) => {
    console.log({ value })
    this.setState({ selectedDomain: value });
  }


  handleSubmit = event => {

    event.preventDefault();
    const { selectedDomain } = this.state;
    console.log("selecteddomain ", selectedDomain);


    this.props.loadByFilter({ selectedDomain });
  }

  componentDidUpdate(prevProps) {
    if (this.props.domains !== prevProps.domains) {
      this.setState({
        selectedDomain: this.props.domains[0].pathid
      });
    }
  }


  render() {
    return (
      <div id="rootstr">
        <ErrorBoundary>
          <FilterForm domains={this.props.domains} value={this.state.selectedDomain} onChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <br />
          <TableFromJson />
        </ErrorBoundary>
      </div>
    )
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
  { loadByFilter, loadDomains }

)(Tab2Content)


