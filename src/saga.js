import { takeLatest, put } from "redux-saga/effects";
import { actions, actionTypes } from "./actions";

const api = "http://localhost:3002"

function* getAllProducts() {
    try {
        const data = yield fetch(`${api}/products`)
            .then(res => res.json())
        yield put(actions.getAllSuccess(data.thumbnails))
    }
    catch (err) {
        yield put(actions.getAllFailure(err.message))
    }
}

function* getProductDetails(action) {
    try {
        const result = yield fetch(`${api}/products/details/${action.payload.id}`)
            .then(res => res.json())
        yield put(actions.getDetailsSuccess(result.details));
    }
    catch (err) {
        yield put(actions.getDetailsFailure(err.message));
    }
}

export default function* rootSaga() {
    yield takeLatest(actionTypes.getAll, getAllProducts);
    yield takeLatest(actionTypes.getDetails, getProductDetails);
};