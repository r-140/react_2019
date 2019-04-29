import React from 'react';

// import uuidv1 from "uuid";
import { SelectComponent } from './SelectComponent';

class FilterForm extends React.Component {

  state = {
    selectedDomain: "selectedDomain",
    selectedDomain2: "selectedDomain2",
    selectedLanguage: "selectedLanguage",
    selectedWorkflow: "selectedWorkflow",
    selectedAssettype: "selectedAssettype"
  }

  render() {

     return (
      <form onSubmit={this.props.handleSubmit}>

        <SelectComponent label = "Select Domain: " filterName={this.state.selectedDomain} value={this.props.value.selectedDomain} list={this.props.domains} onChange={this.props.onChange}/>

        <SelectComponent label = "Select Domain2: " filterName={this.state.selectedDomain2} value={this.props.value.selectedDomain2} list={this.props.domains2} onChange={this.props.onChange}/>

        <SelectComponent label = "Select Language: " filterName={this.state.selectedLanguage} value={this.props.value.selectedLanguage} list={this.props.languages} onChange={this.props.onChange}/>

        <SelectComponent label = "Select Workflow: " filterName={this.state.selectedWorkflow} value={this.props.value.selectedWorkflow} list={this.props.workflows} onChange={this.props.onChange}/>

        <SelectComponent label = "Select Type: " filterName={this.state.selectedAssettype} value={this.props.value.selectedAssettype} list={this.props.assettypes} onChange={this.props.onChange}/>
        
        <input type="submit" value="Find Assets" /> 
      </form>
    );
  }



}

export default FilterForm;

