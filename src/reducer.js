import { actionTypes } from "./actions";

const INITIAL_STATE = {
    products: [],
    details: {
        _id: null,
    },
    error: null,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.getAllSuccess:
            return {
                ...state,
                products: action.payload,
                error: null,
            }
        case actionTypes.getDetailsSuccess:
            return {
                ...state,
                details: action.payload,
                error: null,
            }
        case actionTypes.getDetailsFailure:
            return {
                ...state,
                error: action.payload
            }
        case actionTypes.getAllFailure:
            return {
                ...state,
                error: action.payload
            }
        default:
                return state
    }

};

export default reducer;