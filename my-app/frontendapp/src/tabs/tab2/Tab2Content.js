import React from 'react';

import { connect } from "react-redux";

import TableFromJson from './content/TableFromJson';
import ErrorBoundary from './ErrorBoundary';
import FilterForm from './content/FilterForm'
import { loadByFilter } from "../../actions/actions";
import { loadDomains, loadAssetTypes, loadDomains2, loadLanguages, loadWorkflows } from "../../actions/filterActions"

class Tab2Content extends React.Component {

  state = {
    filter: {selectedDomain: null, selectedDomain2: null, languages: null, workflows:null, assetTypes:null}
    // selectedDomain: null
  }

  componentDidMount() {
    this.props.loadDomains();
    this.props.loadDomains2();
    this.props.loadAssetTypes();
    this.props.loadLanguages();
    this.props.loadWorkflows();
  }


  handleChange = (filterKey, value) => {
    console.log("handleChange filterKey ", filterKey);
    console.log("handleChange value ", value);
    this.setState({ selectedDomain: value });
  }


  handleSubmit = event => {

    event.preventDefault();
    console.log("handleSubmit() filter ", this.state.selectedDomain)

    this.props.loadByFilter(this.state.selectedDomain);
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
      <div key="rootstr">
        <ErrorBoundary>
          <FilterForm domains={this.props.domains} domains2 ={this.props.domains2} 
                      languages ={this.props.languages} workflows ={this.props.workflows} assettypes ={this.props.assettypes}
            value={this.state.selectedDomain}
             onChange={this.handleChange}
             handleSubmit={this.handleSubmit} />
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
    domains2: state.filterReducer.domains2,
    languages: state.filterReducer.languages,
    workflows: state.filterReducer.workflows,
    assettypes: state.filterReducer.assetTypes,

    error: state.filterReducer.error
  };
}

export default connect(
  mapStateToProps,
  { loadByFilter, loadDomains, loadDomains2, loadLanguages, loadAssetTypes, loadWorkflows }

)(Tab2Content)


