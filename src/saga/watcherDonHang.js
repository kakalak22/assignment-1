import { delay, takeEvery, takeLatest, takeLeading, select, put, take, all, fork, spawn, call } from "redux-saga/effects";

import * as Actions from "../actionsTypes";

export function* watcherDonHang() {
    yield takeLatest(Actions.THANH_TOAN_DON_HANG, workerThanhToanDonHang);
    yield takeLatest(Actions.SAVE_DON_HANG_PROCESS, workerSaveDonHangProcess);

}


function* workerThanhToanDonHang(action) {
    try {
        console.log("THANH TOAN DON HANG WORKER");
        const { data = {} } = action;
        const { myCart } = data;
        const { tongCong, tongTruocThue, tongThue } = myCart;

        const donHang = yield select(state => state.donHangReducer.donHang);

        const newDonHang = {
            id: 2,
            ten: "don hang 3",
            tongTruocThue: tongTruocThue,
            tongThue: tongThue,
            tongTien: tongCong
        }

        let copyDonHang = [newDonHang, ...donHang];

        yield put({
            type: Actions.SAVE_DON_HANG,
            data: {
                copyDonHang: copyDonHang
            }
        })

        yield put({
            type: Actions.SAVE_DON_HANG_PROCESS
        })
        let res = yield take(Actions.SAVE_DON_HANG_SUCCESS);
        const { isDonHangEqual } = res.data;

        yield put({
            type: Actions.SAVE_DONG_DON_HANG,
            data: {
                newIdDonHang: 2,
                newDongDonHang: [...myCart.danhSachSanPham]
            }
        })

        const resSaveDongDonHang = yield take(Actions.SAVE_DONG_DON_HANG_SUCCESS);
        const { isDongDonHangEqual } = resSaveDongDonHang.data;
        console.log("dong don hang successfully saved");

        if (!isDonHangEqual && !isDongDonHangEqual) {
            yield put({
                type: Actions.SAVE_ITEM_TO_CART,
                data: {
                    newMyCart: {
                        danhSachSanPham: [
                        ],
                        tongCong: 0,
                        tongThue: 0,
                        tongTruocThue: 0,
                        soLuong: 0
                    }
                }
            })
        }

    } catch (error) { }
}

function* workerSaveDonHangProcess(action) {
    try {
        console.log("save don hang process");
        const { data = {} } = action;
        const { prevDonHang } = data;
        const donHang = yield select(state => state.donHangReducer.donHang);
        const isEqual = JSON.stringify(prevDonHang) === JSON.stringify(donHang);

        yield put({
            type: Actions.SAVE_DON_HANG_SUCCESS,
            data: {
                isDonHangEqual: isEqual
            }
        })
    } catch (error) { }
}

