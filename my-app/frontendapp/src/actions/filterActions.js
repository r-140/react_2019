
export const LOAD_DOMAIN_REQUEST = "loadDomain_request";
export const LOAD_DOMAIN_SUCCESS = "loadDomain_success";
export const LOAD_DOMAIN_ERROR = "loadDomain_error";


export function loadDomainSuccess(data) {    
    return {type: LOAD_DOMAIN_SUCCESS, payload: data}
}

export function loadDomainError(error) {    
    return {type: LOAD_DOMAIN_ERROR, error: error}
}

export function loadDomains() {
    return { type: LOAD_DOMAIN_REQUEST };
}





  