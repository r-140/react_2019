import React from 'react';

// import uuidv1 from "uuid";
import { SelectComponent } from './SelectComponent';

class FilterForm extends React.Component {

  state = {
    selectedDomain: "selectedDomain",
    selectedDomain2: "selectedDomain2",
    languages: "languages",
    workflows: "workflows",
    assettypes: "assettypes"
  }

  render() {

    // const { domains } = this.props;
    // const { domains2 } = this.props;
    // const { languages } = this.props;
    // const { workflows } = this.props;
    // const { assetTypes } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit}>

      <SelectComponent label = "Select Domain: " filterName={this.state.selectedDomain} value={this.props.value} domains={this.props.domains} onChange={this.props.onChange}/>

      <SelectComponent label = "Select Domain2: " filterName={this.state.selectedDomain2} value={this.props.value} domains={this.props.domains2} onChange={this.props.onChange}/>

      {/* <SelectComponent label = "Select Language: " filterName={this.state.languages} value={this.props.value} domains={this.props.languages} onChange={this.props.onChange}/>

      <SelectComponent label = "Select Workflow: " filterName={this.state.workflows} value={this.props.value} domains={this.props.workflows} onChange={this.props.onChange}/>

      <SelectComponent label = "Select Type: " filterName={this.state.assettypes} value={this.props.value} domains={this.props.assettypes} onChange={this.props.onChange}/> */}
        <input type="submit" value="Find Assets" /> 
      </form>
    );
  }



}

export default FilterForm;

