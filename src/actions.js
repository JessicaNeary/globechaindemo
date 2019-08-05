const actionTypes = {
    getAll: "GET_ALL_PRODUCTS",
    getAllSuccess: "GET_ALL_PRODUCTS_SUCCESS",
    getAllFailure: "GET_ALL_PRODUCTS_FAILURE",
    getDetails: "GET_PRODUCT_DETAILS",
    getDetailsSuccess: "GET_PRODUCT_DETAILS_SUCCESS",
    getDetailsFailure: "GET_PRODUCT_DETAILS_FAILURE",
};

const getAll = () => {
   return { type: actionTypes.getAll }
};

const getAllSuccess = data => {
    return {
        type: actionTypes.getAllSuccess,
        data
    }
}

const getDetails = () => {
    return { type: actionTypes.getDetails }
};

const getDetailsSuccess = data => {
    return {
        type: actionTypes.getDetailsSuccess,
        data
    }
}

export {
    actionTypes,
    getAll,
    getAllSuccess,
    getDetails,
    getDetailsSuccess
}