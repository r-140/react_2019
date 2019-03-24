import {combineReducers} from  "redux"
import {domainReducer} from './filterreducer'
import {assetsReducer} from './assetReducer'

const rootReducer = combineReducers({assetsReducer,  domainReducer});
//  const rootReducer = combineReducers({data: assetsReducer}, {domains: domainReducer})

 export default rootReducer;