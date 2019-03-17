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
    docsPerPage: 5
  };

const assetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ASSETS_SUCCESS:
        return Object.assign({}, state, {            
            data: state.data.concat(action.payload)
        });
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



export default combineReducers({data: assetsReducer})