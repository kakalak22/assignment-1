import { delay, takeEvery, takeLatest, takeLeading, select, put, take, all, fork, spawn, call } from "redux-saga/effects";

import * as Actions from "../actionsTypes";

export function* watcherMyCart() {
    yield takeEvery(Actions.ADD_TO_CART, workerAddToCart);
}

function* workerAddToCart(action) {
    yield put({
        type: Actions.SAVE_ITEM_TO_CART,
        data: action.data
    })
}
