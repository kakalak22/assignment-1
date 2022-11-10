import { notification } from "antd";
import { takeLeading, select, put, take, } from "redux-saga/effects";
import { v4 as uuidv4 } from 'uuid';
import * as Actions from "../actionsTypes";

export function* watcherSanPham() {
    yield takeLeading(Actions.CREATE_NEW_SAN_PHAM, workerCreateNewSanPham);
    yield takeLeading(Actions.CHECK_SAVED_SAN_PHAM, workerCheckSavedSanPham);
}

function* workerCreateNewSanPham(action) {
    try {
        const newId = uuidv4();
        const { danhSachSanPham } = yield select(state => state.sanPhamReducer)
        const { data = {} } = action;

        const { sanPham, imgUrl } = data;
        console.log(sanPham);
        let copyDanhSachSanPham = [{
            id: newId, ...sanPham, linkHinhAnh: imgUrl
        }, ...danhSachSanPham];
        yield put({
            type: Actions.SAVE_SAN_PHAM, data:
            {
                copyDanhSachSanPham: copyDanhSachSanPham
            }
        });
        yield put({
            type: Actions.CHECK_SAVED_SAN_PHAM,
            data: {
                prevDanhSachSanPham: danhSachSanPham
            }
        })

        const res = yield take(Actions.TAKE_CHECK_SAVED_SAN_PHAM);
        const { isSaved } = res.data;
        console.log(isSaved)
        if (isSaved) notification.success({
            message: "San pham created",
            description: "Successful",
            placement: "bottomRight",
        })

    } catch (error) { }
}


function* workerCheckSavedSanPham(action) {
    try {
        const { data = {} } = action;
        const { prevDanhSachSanPham } = data;
        const { danhSachSanPham } = yield select(state => state.sanPhamReducer);
        let isSaved = false;
        if (JSON.stringify(prevDanhSachSanPham) !== JSON.stringify(danhSachSanPham))
            isSaved = true
        yield put({
            type: Actions.TAKE_CHECK_SAVED_SAN_PHAM,
            data: {
                isSaved: isSaved
            }
        })
    } catch (error) { }
}