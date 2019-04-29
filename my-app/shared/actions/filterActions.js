export const LOAD_DOMAIN_REQUEST = "loadDomain_request";
export const LOAD_DOMAIN_SUCCESS = "loadDomain_success";
export const LOAD_DOMAIN_ERROR = "loadDomain_error";

export const LOAD_DOMAIN2_REQUEST = "loadDomain2_request";
export const LOAD_DOMAIN2_SUCCESS = "loadDomain2_success";
export const LOAD_DOMAIN2_ERROR = "loadDomain2_error";

export const LOAD_LANG_REQUEST = "loadLang_request";
export const LOAD_LANG_SUCCESS = "loadLang_success";
export const LOAD_LANG_ERROR = "loadLang_error";

export const LOAD_WF_REQUEST = "loadWf_request";
export const LOAD_WF_SUCCESS = "loadWf_success";
export const LOAD_WF_ERROR = "loadWf_error";

export const LOAD_TYPES_REQUEST = "loadTypes_request";
export const LOAD_TYPES_SUCCESS = "loadTypes_success";
export const LOAD_TYPES_ERROR = "loadTypes_error";


export function loadDomainSuccess(data) {    
    return {type: LOAD_DOMAIN_SUCCESS, payload: data}
}

export function loadDomainError(error) {    
    return {type: LOAD_DOMAIN_ERROR, error: error}
}

export function loadDomains() {
    return { type: LOAD_DOMAIN_REQUEST };
}


export function loadDomain2Success(data) {    
    return {type: LOAD_DOMAIN2_SUCCESS, payload: data}
}

export function loadDomain2Error(error) {    
    return {type: LOAD_DOMAIN2_ERROR, error: error}
}

export function loadDomains2() {
    return { type: LOAD_DOMAIN2_REQUEST };
}


export function loadLangSuccess(data) {    
    return {type: LOAD_LANG_SUCCESS, payload: data}
}

export function loadLangError(error) {    
    return {type: LOAD_LANG_ERROR, error: error}
}

export function loadLanguages() {
    return { type: LOAD_LANG_REQUEST };
}


export function loadWFSuccess(data) {    
    return {type: LOAD_WF_SUCCESS, payload: data}
}

export function loadWFError(error) {    
    return {type: LOAD_WF_ERROR, error: error}
}

export function loadWorkflows() {
    return { type: LOAD_WF_REQUEST };
}


export function loadTypesSuccess(data) {    
    return {type: LOAD_TYPES_SUCCESS, payload: data}
}

export function loadTypesError(error) {    
    return {type: LOAD_TYPES_ERROR, error: error}
}

export function loadAssetTypes() {
    return { type: LOAD_TYPES_REQUEST };
}








  