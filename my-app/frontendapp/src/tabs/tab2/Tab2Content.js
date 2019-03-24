import React from 'react';


import TableFromJson from './content/TableFromJson';
import ErrorBoundary from './ErrorBoundary';
import FiltersForm from './content/FilterForm'


export default class Tab2Content extends React.Component {

  render() {
    return (
        <div>
          <ErrorBoundary>
            {/* <FiltersForm/> */}
            <TableFromJson/>
          </ErrorBoundary>
        </div>
    )
  }
}





