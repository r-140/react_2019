
export const LOAD_ASSETS_REQUEST = "loadAssets_request";
export const LOAD_ASSETS_SUCCESS = "loadAssets_success";
export const LOAD_ASSETS_ERROR = "loadAssets_error";

export const LOAD_BY_FILTER_REQUEST = "loadByFilter_request";


export const SORT_ASSETS = "sort_assets";
export const PAGINATION_REQUEST = "pagination_request";

// export function loadAssetsRequest() {
//     return {type: LOAD_ASSETS_REQUEST}
// }

export function loadByFilter(filter) {    
    return {type: LOAD_BY_FILTER_REQUEST, filter: filter}
}

export function loadAssetsSuccess(data) {    
    return {type: LOAD_ASSETS_SUCCESS, payload: data}
}

export function loadAssetsError(error) {    
    return {type: LOAD_ASSETS_ERROR, error: error}
}

export function loadAssets() {
    console.log("loadAssets action")
    return { type: LOAD_ASSETS_REQUEST };
}

export function sortAssets(sortKey, desc) { 
    return { type: SORT_ASSETS, sortKey: sortKey, desc: desc };
}

export function paginationRequest(currentPage) { 
    return { type: PAGINATION_REQUEST, currentPage: currentPage };
}



  