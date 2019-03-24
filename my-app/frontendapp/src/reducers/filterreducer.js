import {
     LOAD_DOMAIN_SUCCESS, LOAD_DOMAIN_ERROR
} from "../actions/filterActions"

const initialState = {
    error: null,
    
    domains: []
  };

export const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_DOMAIN_SUCCESS:
            
            return {
                ...state,          
                domains: [...state.domains,...action.payload]          
            };

        case LOAD_DOMAIN_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });

        
        default:
            return state;
    }

};



