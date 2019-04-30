import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import {SelectComponent} from '../../tabs/tab2/content/SelectComponent';


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

const label = "label";

describe('<SelectComponent />', () => {
  let component;
  let tree;

 
  test('Should render passed list', () => {
    component = renderer.create(<SelectComponent label={label} list={list} />);
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should call onChange when changed', () => {
    const onChange = jest.fn();
    component = mount(<SelectComponent label={label} list={list} onChange={onChange}/>);

    component.find('select').simulate('change');
    // component.simulate('change');

    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toBe(list.item.pathid);
  });

});