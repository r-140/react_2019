import {combineReducers} from  "redux"
import {
     LOAD_ASSETS_SUCCESS, LOAD_ASSETS_ERROR
} from "../actions/actions"

const initialState = {
    error: null,
    isLoaded: false,
    cols: [],
    data: [],
    currentPage: 1,
    docsPerPage: 10
  };

const assetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ASSETS_SUCCESS:
        return {
            ...state,          
            data: [...state.data,...action.payload],
            cols: state.cols.concat(getCols(action.payload)),

        };
            // return action.payload;
        case LOAD_ASSETS_ERROR:
        return Object.assign({}, state, {
            error: state.error.concat(action.payload)
        });
            // return{data:[], error: action.error};
        default:
            return state;
    }

};

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