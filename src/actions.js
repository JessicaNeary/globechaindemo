const actionTypes = {
    getAll: "GET_ALL_PRODUCTS",
    getAllSuccess: "GET_ALL_PRODUCTS_SUCCESS",
    getAllFailure: "GET_ALL_PRODUCTS_FAILURE",
    getDetails: "GET_PRODUCT_DETAILS",
    getDetailsSuccess: "GET_PRODUCT_DETAILS_SUCCESS",
    getDetailsFailure: "GET_PRODUCT_DETAILS_FAILURE",
};

const actions = {
    getAll: () => {
        return {type: actionTypes.getAll}
    },

    getAllSuccess: data => {
        return {
            type: actionTypes.getAllSuccess,
            payload: data
        }
    },

    getDetails: (id) => {
        return {
            type: actionTypes.getDetails,
            id: id
        }
    },

    getDetailsSuccess: data => {
        return {
            type: actionTypes.getDetailsSuccess,
            payload: data
        }
    },


    getAllFailure: error => {
        return {
            type: actionTypes.getAllFailure,
            error
        }
    },

    getDetailsFailure: error => {
        return {
            type: actionTypes.getDetailsFailure,
            error
        }
    }
}

export {
    actionTypes,
    actions,
}