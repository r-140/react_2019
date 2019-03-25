import React from 'react';

import { connect } from "react-redux";

import { bindActionCreators } from 'redux'


import TableFromJson from './content/TableFromJson';
import ErrorBoundary from './ErrorBoundary';
import FilterForm from './content/FilterForm'
import { loadByFilter } from "../../actions/actions";

export class Tab2Content extends React.Component {

constructor(){
  super();
  // super(props);

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

}

  state = {
    selectedDomain: ""
  }


  handleChange(event) {    
    this.setState({selectedDomain: event.target.value});
  }

  // handleDelete = id => {
  //   this.props.deleteMessage(id)
  // }

  handleSubmit = event => {

    event.preventDefault();
    const {selectedDomain} = this.state;
    console.log("selecteddomain ", selectedDomain);


    this.props.loadByFilter({selectedDomain} );
  }


  render() {
    return (
        <div id = "rootstr">
          <ErrorBoundary>            
              <FilterForm handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>            
              <br/>            
              <TableFromJson/>
          </ErrorBoundary>
        </div>
    )
  }
}

// const mapStateToProps = state => state


// const mapDispatchToProps = dispatch => (
  
//   {
  
//     loadByFilter: selectedDomain => dispatch(loadByFilter(selectedDomain)),
//   }
// )


// const mapDispatchToProps = dispatch => {

//   return { 
//       loadByFilter: (...selectedDomain) => {
//              dispatch(loadByFilter(...selectedDomain))
//        }, 
      
//    }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadByFilter }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
  
)(Tab2Content)


