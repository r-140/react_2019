import React from 'react';


import TableFromJson from './content/TableFromJson';
import ErrorBoundary from './ErrorBoundary';
import {FilterForm} from './FilterForm'


export default class Tab2Content extends React.Component {

  render() {
    return (
        <div>
          <ErrorBoundary>
            <FilterForm/>
            <TableFromJson/>
          </ErrorBoundary>
        </div>
    )
  }
}





