import { actionTypes } from "./actions";

const INITIAL_STATE = {
    products: [],
    details: {
        id: null,
        thumbnail: "",
    }
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.getAllSuccess:
            return {
                ...state,
                products: action.payload
            }
        case actionTypes.getDetailsSuccess:
            return {
                ...state,
                details: action.payload
            }
    }

};

export default reducer;