import React from 'react';


import TableFromJson from './content/TableFromJson';
import ErrorBoundary from './ErrorBoundary';
import FilterForm from './content/FilterForm'


export default class Tab2Content extends React.Component {

  render() {
    return (
        <div id = "rootstr">
          <ErrorBoundary>            
              <FilterForm/>            
              <br/>            
              <TableFromJson/>
          </ErrorBoundary>
        </div>
    )
  }
}





