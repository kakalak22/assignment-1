import { delay, takeEvery, takeLatest, takeLeading, select, put, take, all, fork, spawn, call } from "redux-saga/effects";
import { v4 as uuidv4 } from 'uuid';
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
    try {
        const newId = uuidv4();
        const { danhSachSanPham } = yield select(state => state.sanPhamReducer)
        const { data = {} } = action;

        const { sanPham, imgUrl } = data;
        let copyDanhSachSanPham = [{
            id: newId, ...sanPham, linkHinhAnh: imgUrl
        }, ...danhSachSanPham];
        yield put({
            type: Actions.SAVE_SAN_PHAM, data:
            {
                copyDanhSachSanPham: copyDanhSachSanPham
            }
        });
    } catch (error) { }
}