import React from 'react';
import { connect } from "react-redux";

import { Link } from 'react-router-dom';

import './styles/tablestyle.css';

import {loadAssets, sortAssets, paginationRequest} from "../../../actions/actions"

import 'font-awesome/css/font-awesome.min.css';

import { EmptyResult } from "./EmptyResult";

// import {AssetDetailInfo} from './AssetDetailInfo'

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

    componentWillReceiveProps({ location = {} }) {
        if (location.pathname === '/assets' && location.pathname !== this.props.location.pathname) {
            this.props.loadAssets();
        }
    }

   render() {

    const { data, cols, currentPage, docsPerPage } = this.props;

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
        
        return currentDocs.map(function(item) {
            // handle the column data within each row            
            const cells = cols.map(function (colData) {                   
                return colData === 'id' ? <td key = {Math.random}><Link  to={`/assets/${item.id}`} >{item.id}</Link></td> : <td key={Math.random()}>{item[colData]}</td>;
            });
            return <tr key={Math.random()} >{cells}</tr>;
        });
    }

}

function mapStateToProps(state) {
    return {
      data: state.assetsReducer.data,
      isLoaded: state.assetsReducer.isLoaded,
      cols: state.assetsReducer.cols,
      error: state.assetsReducer.error,
      currentPage: state.assetsReducer.currentPage,
      docsPerPage: state.assetsReducer.docsPerPage
      
    };
  }
  export default connect(
    mapStateToProps,
    { loadAssets, sortAssets, paginationRequest }
  )(TableFromJson)





