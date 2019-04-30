import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import FilterForm from '../../tabs/tab2/content/FilterForm';


const list = [
  {
    pathid: 'root.',
    name: 'Root',
  },
  {
    pathid: 'root.krone.',
    name: 'krone',
  },
];

// const filter: {selectedDomain: null, selectedDomain2: null, selectedLanguage: null, selectedWorkflow:null, selectedAssettype:null};

// const label = "label";

{/* <FilterForm domains={this.props.domains} domains2 ={this.props.domains2} 
languages ={this.props.languages} workflows ={this.props.workflows} assettypes ={this.props.assettypes}
value={this.state.filter}
onChange={this.handleChange}
handleSubmit={this.handleSubmit} /> */}

describe('<FilterForm />', () => {
  let component;
  let tree;


  test('Should render passed list', () => {
    component = renderer.create(<FilterForm domains={list} languages={list} workflows={list} domains2={list} assettypes={list}/>);
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  

});