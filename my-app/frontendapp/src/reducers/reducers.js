import {combineReducers} from  "redux"
import {domainReducer} from './filterreducer'
import {assetsReducer} from './assetReducer'




export default combineReducers({data: assetsReducer}, {domains: domainReducer})