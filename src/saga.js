import { takeLatest, call, put } from "redux-saga/effects";
import { actionTypes } from "./actions";

const api = "/"

function* getAllProducts() {
    try {
        const data = yield call(api);
        yield put({ actionTypes.getAllSuccess, data })
    }
    catch (err) {
        yield put({ actionTypes.getAllFailure })
        console.log("Error fetching products:", err.message);
    }
}

function* getProductDetails(action) {
    try {
        const details = yield call(api, action.payload.id)
        yield put({ actionTypes.getDetailsSuccess, details });
    }
    catch (err) {
        yield put({ actionTypes.getDetailsFailure });
        console.log("Error fetching details", err.message);
    }
}

export default function* rootSaga() {
    yield takeLatest(actionTypes.getAll, getAllProducts);
    yield takeLatest(actionType.getDetails, getProductDetails);
};