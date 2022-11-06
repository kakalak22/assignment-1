import { delay, takeEvery, takeLatest, takeLeading, select, put, take, all, fork, spawn, call } from "redux-saga/effects";

import * as Actions from "../actionsTypes";

export function* watcherMyCart() {
    yield takeEvery(Actions.DANH_SACH_DON_HANG, workerMyCart);
    yield takeEvery(Actions.ADD_TO_CART, workerAddToCart);
}

function* workerMyCart(action) {
    const myCart = yield select(state =>
        state.myCartReducer.myCart
    );
    console.log(myCart);
}

function* workerAddToCart(action) {
    console.log(action.data);
    yield put({
        type: Actions.SAVE_ITEM_TO_CART,
        data: action.data
    })
}