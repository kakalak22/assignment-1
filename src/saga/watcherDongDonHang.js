import { delay, takeEvery, takeLatest, takeLeading, select, put, take, all, fork, spawn, call } from "redux-saga/effects";

import * as Actions from "../actionsTypes";

export function* watcherDongDonHang() {
    yield takeLeading(Actions.SAVE_DONG_DON_HANG_PROCESS, workerSaveDongDonHangProcess);
    yield takeLeading(Actions.SAVE_DONG_DON_HANG, workerSaveDongDonHang)
}

function* workerSaveDongDonHangProcess(action) {
    try {
        console.log("in worker save dong don hang process");
        yield put({
            type: Actions.SAVE_DONG_DON_HANG_SUCCESS
        })
    } catch (error) { }
}

function* workerSaveDongDonHang(action) {
    try {
        const { data = {} } = action;
        const { newDongDonHang } = data;
        const { dongDonHang } = yield select(state => state.dongDonHangReducer);
        console.log(dongDonHang);
        console.log(newDongDonHang);
    } catch (error) { }
}