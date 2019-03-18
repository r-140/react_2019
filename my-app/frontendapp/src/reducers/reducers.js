import {combineReducers} from  "redux"
import {
     LOAD_ASSETS_SUCCESS, LOAD_ASSETS_ERROR, SORT_ASSETS
} from "../actions/actions"

const initialState = {
    error: null,
    isLoaded: false,
    cols: [],
    data: [],
    currentPage: 1,
    docsPerPage: 5
  };

const assetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ASSETS_SUCCESS:
        return {
            ...state,          
            data: [...state.data,...action.payload],
            cols: [...state.cols,...getCols(action.payload)],            
        };

        case LOAD_ASSETS_ERROR:
            return Object.assign({}, state, {
                error: state.error.concat(action.payload)
            });

        case SORT_ASSETS:
            var sortedData = onSort(state.data, action.sortKey, action.desc);
            console.log("reducer() sorted List ", sortedData);
            return {
                ...state,          
                data: [...state.data,...sortedData]                
            }    
        default:
            return state;
    }

};

function onSort(data, sortKey, desc) {
        
    const sortedData = data.sort((a,b) => { 
        if(desc===false) {                
            return a[sortKey] === null ? 1 : a[sortKey].localeCompare(b[sortKey])
        }
        else {                
            return b[sortKey] === null ? -1 : b[sortKey].localeCompare(a[sortKey])
        }
    });

    return sortedData;

    // this.setState({data: sortedData})
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



export default combineReducers({data: assetsReducer})