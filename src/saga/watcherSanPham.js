import { delay, takeEvery, takeLatest, takeLeading, select, put, take, all, fork, spawn, call } from "redux-saga/effects";

import * as Actions from "../actionsTypes";

export function* watcherSanPham() {
    yield takeEvery(Actions.DANH_SACH_SAN_PHAM, workerDanhSachSanPham);
}

function* workerDanhSachSanPham(action) {
    const danhSachSanPham = yield select(state =>
        state.sanPhamReducer.danhSachSanPham
    );
    console.log(danhSachSanPham);
}