import React from 'react';


import './styles/tablestyle.css';

import {loadAssets} from "../../../reducers"

import 'font-awesome/css/font-awesome.min.css';

// import SortableTable from 'react-sortable-table';


export default class TableFromJson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cols: [],
            data: [],
            currentPage: 1,
            docsPerPage: 10
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    onSort(event, sortKey){
        console.log(sortKey);
        const {data} = this.state;
        const sortedData = data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]));
        this.setState({data: sortedData})
    }

    componentDidMount() {
        // const {result} = loadAssets(5000);
        // console.log("resultr" + result);
        // this.setState({data: result});
        fetch("http://localhost:63145/api/assets")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.data,
                        cols: getCols(result.data)
                    });
                },
                (error) => {
                    this.error = error;
                }
            )
    }

  render() {
      const { data, currentPage, docsPerPage } = this.state;

      console.log('data ---- ', this.state.data);
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
                  <thead>{this.generateHeaders()}</thead>
                  <tbody>{this.generateRows(currentDocs)}</tbody>
              </table>
              <ul id="page-numbers">
                  {renderPageNumbers}
              </ul>
          </div>

      );
  }

    generateHeaders = () =>{
        const cols = this.state.cols;
        return cols.map((colData) => {
            return <th key={colData} >
                <span>{colData}</span>
                <span>
                    <i className="fa fa-sort-asc" onClick={e => this.onSort(e, colData)}/>
                    <i className="fa fa-sort-desc" onClick={e => this.onSort(e, colData)} />
                </span>
            </th>;
        });
    };

    generateRows(currentDocs) {
        const cols = this.state.cols;  // [{key, label}]

        function confirmRoute(id) {
            // console.log(id)
        }

        return currentDocs.map(function(item) {
            // handle the column data within each row
            const cells = cols.map(function (colData) {

                return <td>{item[colData]}</td>;
            });
            return <tr key={item.id} onClick={confirmRoute(item.id)} >{cells}</tr>;
        });
    }

}





function getCols(obj) {
    let propArr = obj[0];
    let arr = [];
    for (const propName in propArr) {
        if (propArr[propName] !== null || propArr[propName] !== undefined) {
            arr.push(propName);
        }
    }
    return arr;
}


