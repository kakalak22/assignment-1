import { notification } from "antd";
import { takeLatest, select, put, take, } from "redux-saga/effects";
import { v4 as uuidv4 } from 'uuid';
import * as Actions from "../actionsTypes";

export function* watcherDonHang() {
    yield takeLatest(Actions.THANH_TOAN_DON_HANG, workerThanhToanDonHang);
    yield takeLatest(Actions.SAVE_DON_HANG_PROCESS, workerSaveDonHangProcess);

}


function* workerThanhToanDonHang(action) {
    try {
        const newId = uuidv4();
        const { data = {} } = action;
        const { myCart } = data;
        const { tongCong, tongTruocThue, tongThue } = myCart;

        const donHang = yield select(state => state.donHangReducer.donHang);

        const newDonHang = {
            id: newId,
            ten: `Đơn hàng ${newId.substring(0, 7)}`,
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
                newIdDonHang: newId,
                newDongDonHang: [...myCart.danhSachSanPham]
            }
        })

        const resSaveDongDonHang = yield take(Actions.SAVE_DONG_DON_HANG_SUCCESS);
        const { isDongDonHangEqual } = resSaveDongDonHang.data;

        if (!isDonHangEqual && !isDongDonHangEqual) {
            notification.success({
                message: 'Don hang created',
                description: "Successful",
                placement: "bottomRight",
            });
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

