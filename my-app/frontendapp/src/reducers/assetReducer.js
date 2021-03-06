

import {
     LOAD_ASSETS_SUCCESS, LOAD_ASSETS_ERROR, SORT_ASSETS, PAGINATION_REQUEST, LOAD_BY_FILTER_SUCCESS, LOAD_BY_FILTER_ERROR
} from "../actions/actions"

const initialState = {
    error: null,
    isLoaded: false,
    cols: [],
    data: [],
    currentPage: 1,
    docsPerPage: 5
  };

export const assetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ASSETS_SUCCESS:

            return {
                ...state,          
                data: [...action.payload],
                cols: [...getCols(action.payload)],            
            };

        case LOAD_BY_FILTER_SUCCESS:
            var filtereddata = action.payload;
            console.log("assetReducer filered data ", filtereddata);
            return {
                ...state,          
                data: [...filtereddata],
            };

        case LOAD_ASSETS_ERROR:
            return {                
                ...state,
                
                error: [...action.error]
            };
            // return Object.assign({}, state, {
            //     error: action.error
            // });

        case LOAD_BY_FILTER_ERROR:
            return {                
                ...state,
                
                error: [...action.error]
            };
                // return Object.assign({}, state, {
                //     error: action.error
                // });

        case SORT_ASSETS:
            var sortedData = onSort(state.data, action.sortKey, action.desc); 
            return {                
                ...state,
                
                data: [...sortedData]
            };
            
        case PAGINATION_REQUEST:
            // return {                
            //     ...state,
                
            //     currentPage: [...action.currentPage]
            // };
            return Object.assign({}, state, {
                currentPage: action.currentPage
            });  
        default:
            return state;
    }

};

function onSort(data, sortKey, desc) {

    console.log("onsort sortKey ", sortKey)
        
    const sortedData = data.sort((a,b) => { 
        if(desc===false) {                
            return a[sortKey] === null ? 1 : a[sortKey].localeCompare(b[sortKey])
        }
        else {   
                // if(b[sortKey] === null)
                //     return -1;
                // else {
                //     console.log("onSort(): b[sortKey] ", b[sortKey])
                //     return b[sortKey].localeCompare(a[sortKey])
                // }
            return b[sortKey] === null ? -1 : b[sortKey].localeCompare(a[sortKey])
        }
    });

    return sortedData;
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



// export default combineReducers({data: assetsReducer}, {domains: domainReducer})