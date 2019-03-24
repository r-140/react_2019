import React from 'react';
import { connect } from "react-redux";

import './styles/tablestyle.css';

import {loadAssets, sortAssets, paginationRequest} from "../../../actions/actions"

import 'font-awesome/css/font-awesome.min.css';

import { EmptyResult } from "./EmptyResult";


export class TableFromJson extends React.Component {

    handleClick=(event)=> {
        this.props.paginationRequest(event.target.id);
    }

    onSort(event, sortKey, desc){
        this.props.sortAssets(sortKey, desc);
    }

    componentDidMount() {
        this.props.loadAssets();
    }

  render() {
    
    const { data, cols, currentPage, docsPerPage } = this.props.data;

    if(data.length === 0) {
        return (
            <EmptyResult/>
        )
    } else {

      const indexOfLastDoc = currentPage * docsPerPage;
      const indexOfFirstDoc = indexOfLastDoc - docsPerPage;
      const currentDocs = data.slice(indexOfFirstDoc, indexOfLastDoc);

      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(data.length / docsPerPage); i++) {
          pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
          return (
              <li
                  key={number}
                  id={number}
                  onClick={this.handleClick}
              >
                  {number}
              </li>
          );
      });

      return (
          <div id="resTable">
              <table>
                  <thead>{this.generateHeaders(cols)}</thead>
                  <tbody>{this.generateRows(cols, currentDocs)}</tbody>
              </table>
              <ul id="page-numbers">
                  {renderPageNumbers}
              </ul>
          </div>

      )
    };
  }

    generateHeaders = (cols) =>{
        
        return <tr>{cols.map((colData) => {
            return <th key={colData} >
                <span>{colData}</span>
                <span>
                    <i className="fa fa-sort-asc" onClick={e => this.onSort(e, colData, false)}/>
                    <i className="fa fa-sort-desc" onClick={e => this.onSort(e, colData, true)} />
                </span>
            </th>            
        })
    }</tr>
    };

    generateRows(cols, currentDocs) {
        
        function confirmRoute(id) {
            // console.log(id)
        }

        return currentDocs.map(function(item) {
            // handle the column data within each row
            
            const cells = cols.map(function (colData) {

                return <td key={Math.random()}>{item[colData]}</td>;
            });
            return <tr key={Math.random()} onClick={confirmRoute(item.id)} >{cells}</tr>;
        });
    }

}

function mapStateToProps(state) {
    return {
      data: state.data,
      isLoaded: state.isLoaded,
      cols: state.cols,
      error: state.error,
      currentPage: state.currentPage,
      docsPerPage: state.docsPerPage
      
    };
  }
  export default connect(
    mapStateToProps,
    { loadAssets, sortAssets, paginationRequest }
  )(TableFromJson)





