import {
     LOAD_DOMAIN_SUCCESS, LOAD_DOMAIN_ERROR, 
     LOAD_DOMAIN2_SUCCESS, LOAD_DOMAIN2_ERROR, 
     LOAD_LANG_SUCCESS, LOAD_LANG_ERROR, 
     LOAD_TYPES_SUCCESS, LOAD_TYPES_ERROR,
     LOAD_WF_SUCCESS, LOAD_WF_ERROR
} from "../actions/filterActions"

const initialState = {
    error: null,
    
    domains: [],
    domains2: [],
    workflows: [],
    languages: [],
    assetTypes: []
  };

export const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_DOMAIN_SUCCESS:
            
            return {
                ...state,          
                domains: [...action.payload]          
            };

        case LOAD_DOMAIN_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });

        case LOAD_DOMAIN2_SUCCESS:
        
            return {
                ...state,          
                domains2: [...action.payload]          
            };

        case LOAD_DOMAIN2_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });

        case LOAD_WF_SUCCESS:
            
            return {
                ...state,          
                workflows: [...action.payload]          
            };

        case LOAD_WF_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
            
            case LOAD_LANG_SUCCESS:
            
            return {
                ...state,          
                languages: [...action.payload]          
            };

        case LOAD_LANG_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });

        case LOAD_TYPES_SUCCESS:
        
            return {
                ...state,          
                assetTypes: [...action.payload]          
            };

        case LOAD_TYPES_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });

        
        default:
            return state;
    }

};



