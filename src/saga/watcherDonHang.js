import { delay, takeEvery, takeLatest, takeLeading, select, put, take, all, fork, spawn, call } from "redux-saga/effects";

import * as Actions from "../actionsTypes";

export function* watcherDonHang() {
    yield takeEvery(Actions.DANH_SACH_DON_HANG, workerDanhSachDonHang);
}

function* workerDanhSachDonHang(action) {
    const danhSachDonHang = yield select(state =>
        state.donHangReducer.danhSachDonHang
    );
    console.log(danhSachDonHang);
}