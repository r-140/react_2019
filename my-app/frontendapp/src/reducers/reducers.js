import {combineReducers} from  "redux"
import {filterReducer} from './filterreducer'
import {assetsReducer} from './assetReducer'

const rootReducer = combineReducers({assetsReducer,  filterReducer});
//  const rootReducer = combineReducers({data: assetsReducer}, {domains: domainReducer})

 export default rootReducer;