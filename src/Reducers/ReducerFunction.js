import { FETCH_ACTION_BEGIN, FETCH_ACTION_SUCCESS, FETCH_ACTION_FAILURE } from '../actionCreators/ProductAction';

const initialState = {
    items: [],
    loading: false,
    error: null
}

function ReducerFunction(state = initialState, action) {
    switch (action.type) {
        case FETCH_ACTION_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_ACTION_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.products
            };
        case FETCH_ACTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            return state;
    };
}

export default ReducerFunction;