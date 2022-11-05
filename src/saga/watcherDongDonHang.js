import { delay, takeEvery, takeLatest, takeLeading, select, put, take, all, fork, spawn, call } from "redux-saga/effects";

import * as Actions from "../actionsTypes";

export function* watcherDongDonHang() {
    yield takeEvery(Actions.DANH_SACH_DON_HANG, workerDanhSachDongDonHang);
}

function* workerDanhSachDongDonHang(action) {
    const danhSachDongDonHang = yield select(state =>
        state.dongDonHangReducer.danhSachDongDonHang
    );
    console.log(danhSachDongDonHang);
}