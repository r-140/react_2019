import React from 'react';
import { connect } from "react-redux";

import './styles/tablestyle.css';

import {loadAssets, sortAssets} from "../../../actions/actions"

import 'font-awesome/css/font-awesome.min.css';

// import SortableTable from 'react-sortable-table';


export class TableFromJson extends React.Component {


    handleClick=(event)=> {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    onSort(event, sortKey, desc){

        this.props.sortAssets(sortKey, desc);

        // handleSubmit(event) {
        //     event.preventDefault();
        //     const { title } = this.state;
        //     const id = uuidv1();
        //     this.props.addArticle({ title, id });
        //     this.setState({ title: "" });
        //   }
        
        // const {data} = this.props.data;

        // const sortedData = data.sort((a,b) => { 
        //     if(desc===false) {                
        //         return a[sortKey] === null ? 1 : a[sortKey].localeCompare(b[sortKey])
        //     }
        //     else {                
        //         return b[sortKey] === null ? -1 : b[sortKey].localeCompare(a[sortKey])
        //     }
        // });

        // this.setState({data: sortedData})
    }

    componentDidMount() {
        this.props.loadAssets();

        // fetch("http://localhost:63145/api/assets")
        //     .then(res => res.json())
        //     .then(
        //         (data) => {
        //                 this.setState({
        //                 isLoaded: true,
        //                 data: data,
        //                 cols: getCols(data)
        //             });
        //         },
        //         (error) => {
                    
        //             this.error = error;
        //         }
        //     )
    }

  render() {
    // const { data, cols, currentPage, docsPerPage } = this.state;
      const { data, cols, currentPage, docsPerPage } = this.props.data;

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

      );
  }

    generateHeaders = (cols) =>{
        // const cols = this.state.cols;
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
        // const cols = this.state.cols;  // [{key, label}]

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
    //   cols: getCols(state.data),
      cols: state.cols,
      error: state.error,
      currentPage: state.currentPage,
      docsPerPage: state.docsPerPage
      
    };
  }
  export default connect(
    mapStateToProps,
    { loadAssets, sortAssets }
  )(TableFromJson)





