import { takeLatest, put } from "redux-saga/effects";
import { actions, actionTypes } from "./actions";

// const api = "http://localhost:3002"

function* getAllProducts() {
    try {
        const data = yield fetch("http://localhost:3002/products/get")
            .then(res => res.json())
        yield put(actions.getAllSuccess(data.thumbnails))
    }
    catch (err) {
        yield put(actions.getAllFailure(err.message))
    }
}
//
// function* getProductDetails(action) {
//     try {
//         const details = yield call(api, action.payload.id)
//         yield put(actions.getDetailsSuccess(details));
//     }
//     catch (err) {
//         yield put(actions.getDetailsFailure(err));
//     }
// }

export default function* rootSaga() {
    yield takeLatest(actionTypes.getAll, getAllProducts);
    // yield takeLatest(actionTypes.getDetails, getProductDetails);
};