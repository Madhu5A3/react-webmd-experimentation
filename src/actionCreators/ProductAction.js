export const FETCH_ACTION_BEGIN = 'FETCH_ACTION_BEGIN';
export const FETCH_ACTION_SUCCESS = 'FETCH_ACTION_SUCCESS';
export const FETCH_ACTION_FAILURE = 'FETCH_ACTION_FAILURE';

export const fetchActionBegin = () => ({
    type: FETCH_ACTION_BEGIN
})

export const fetchActionSuccess = products => ({
    type: FETCH_ACTION_SUCCESS,
    payload: { products }
})

export const fetchActionFailure = errors => ({
    type: FETCH_ACTION_FAILURE,
    payload: { errors }
})