import { takeLatest, select, put, } from "redux-saga/effects";

import * as Actions from "../actionsTypes";

export function* watcherMyCart() {
    yield takeLatest(Actions.ADD_TO_CART, workerAddToCart);
}

function* workerAddToCart(action) {
    try {
        const { data = {} } = action;
        const { sanPham } = data;
        const { danhSachSanPham } = yield select(state => state.myCartReducer.myCart);
        let copyDanhSachSanPham = [...danhSachSanPham];

        let index = danhSachSanPham.findIndex((element) => {
            return element.id === sanPham.id;
        });

        if (index > -1) {
            copyDanhSachSanPham[index].soLuongSanPham += sanPham.soLuongSanPham;
        }
        if (index < 0) {
            copyDanhSachSanPham.unshift(sanPham);
        }

        let newTongCong = 0;
        let newTongThue = 0;
        let newTongTruocThue = 0;
        let newSoLuong = copyDanhSachSanPham.length;

        danhSachSanPham.forEach(({ donGia, tienThue, soLuongSanPham }) => {
            newTongCong += (donGia + tienThue) * soLuongSanPham;
            newTongThue += tienThue * soLuongSanPham;
            newTongTruocThue += soLuongSanPham * donGia;
        })

        const newMyCart = {
            danhSachSanPham: copyDanhSachSanPham,
            tongCong: newTongCong,
            tongThue: newTongThue,
            tongTruocThue: newTongTruocThue,
            soLuong: newSoLuong
        }

        yield put({
            type: Actions.SAVE_ITEM_TO_CART,
            data: {
                newMyCart: newMyCart
            }
        })
    } catch (error) { }


}
