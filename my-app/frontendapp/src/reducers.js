import {combineReducers} from  "redux"
import {
    loadAssetsRequest, loadAssetsSuccess, LOAD_ASSETS_SUCCESS, LOAD_ASSETS_ERROR,
    loadAssetsError
} from "./actions"

const assetsReducer = (state = {authors:[]}, action) => {
    switch(action.type) {
        case LOAD_ASSETS_SUCCESS:
            return action.payload;
        case LOAD_ASSETS_ERROR:
            return{authors:[], error: action.error};
        default:
            return state;
    }

};

export function loadAssets(assetId) {

    console.log('loadAsets');
    return function (dispath) {
        fetch("http://localhost:63145/api/assets")
        // fetch("http://elasticsearch:9000/parents?assetId="+assetId)
            .then(res => {
                res.json()})
            .then(
                (result) => {
                    dispath(loadAssetsSuccess(handlerData(result)))
                },
                (error) => {
                    dispath(loadAssetsError(error))
                }
            )
    }
}

function handlerData(result) {
    // clean(result);
    sortJsonByCreator(result);

    return result.reduce(function (pv, cv) {
        if (pv[cv.author]) {
            pv[cv.author] += 1;
        } else {
            pv[cv.author] = 1;
        }
        return pv;
    }, {});
}

function sortJsonByCreator(data){
    data.sort(function (a, b) {
        return a.author.localeCompare(b.author);
    });
}

export default combineReducers({assets: assetsReducer})