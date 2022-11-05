import { delay, takeEvery, takeLatest, takeLeading, select, put, take, all, fork, spawn, call } from "redux-saga/effects";

import * as Actions from "../actionsTypes";

export function* watcherSanPham() {
    yield takeEvery(Actions.DANH_SACH_SAN_PHAM, workerDanhSachSanPham);
    yield takeLeading(Actions.CREATE_NEW_SAN_PHAM, workerCreateNewSanPham);
}

function* workerDanhSachSanPham(action) {
    const danhSachSanPham = yield select(state =>
        state.sanPhamReducer.danhSachSanPham
    );
}

function* workerCreateNewSanPham(action) {
    console.log(action.data);
    try {
        yield put({ type: Actions.CREATE_NEW_SAN_PHAM, data: action.data });
    } catch (error) { }
}