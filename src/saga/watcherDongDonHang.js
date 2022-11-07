import { delay, takeEvery, takeLatest, takeLeading, select, put, take, all, fork, spawn, call } from "redux-saga/effects";

import * as Actions from "../actionsTypes";

export function* watcherDongDonHang() {
    yield takeLeading(Actions.CHECK_SAVE_DONG_DON_HANG, workerSaveDongDonHangProcess);
    yield takeLeading(Actions.SAVE_DONG_DON_HANG, workerSaveDongDonHang)
}

function* workerSaveDongDonHang(action) {
    try {
        const { data = {} } = action;
        const { newDongDonHang, newIdDonHang } = data;
        const { dongDonHang } = yield select(state => state.dongDonHangReducer);
        const temp = [];

        newDongDonHang.forEach(({ id, donGia, soLuongSanPham, tienThue }) => {
            const newObj = {
                idSanPham: id,
                soLuong: soLuongSanPham,
                donGia: donGia,
                tongTienTruocThue: donGia * soLuongSanPham,
                tongTienThue: tienThue * soLuongSanPham
            }
            temp.push(newObj)
        })
        let copyDongDonHang = [{ idDonHang: newIdDonHang, danhSachDongDonHang: temp }, ...dongDonHang];

        yield put({
            type: Actions.DO_SAVE_DONG_DON_HANG,
            data: {
                copyDongDonHang: copyDongDonHang
            }
        })

        yield put({
            type: Actions.CHECK_SAVE_DONG_DON_HANG,
            data: {
                prevDongDonHang: dongDonHang
            }
        })


    } catch (error) { }
}

function* workerSaveDongDonHangProcess(action) {
    try {
        const { data = {} } = action;
        const { prevDongDonHang } = data;
        const currDonHang = yield select(state => state.dongDonHangReducer.dongDonHang);
        const isEqual = JSON.stringify(prevDongDonHang) === JSON.stringify(currDonHang);
        yield put({
            type: Actions.SAVE_DONG_DON_HANG_SUCCESS,
            data: {
                isDongDonHangEqual: isEqual
            }
        })
    } catch (error) { }
}