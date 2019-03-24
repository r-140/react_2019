import React from 'react';


import TableFromJson from './content/TableFromJson';
import ErrorBoundary from './ErrorBoundary';
import FilterForm from './content/FilterForm'


export default class Tab2Content extends React.Component {

  render() {
    return (
        <div>
          <ErrorBoundary>
            <div>
              <FilterForm/>
            </div>
            <div>
              <TableFromJson/>
            </div>
          </ErrorBoundary>
        </div>
    )
  }
}





