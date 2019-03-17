
export const LOAD_ASSETS_REQUEST = "loadAssets_request";
export const LOAD_ASSETS_SUCCESS = "loadAssets_success";
export const LOAD_ASSETS_ERROR = "loadAssets_error";

export function loadAssetsRequest() {
    return {type: LOAD_ASSETS_REQUEST}
}

export function loadAssetsSuccess(data) {
    console.log("Sussess " + data)
    return {type: LOAD_ASSETS_SUCCESS, payload: data}
}

export function loadAssetsError(error) {
    console.log("Error: " + error)
    return {type: LOAD_ASSETS_ERROR}
}

export function loadAssets() {
    return { type: LOAD_ASSETS_REQUEST };
  }

  