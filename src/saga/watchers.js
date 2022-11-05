import { all } from 'redux-saga/effects';
import { watcherSanPham } from './watcherSanPham';
import { watcherDonHang } from './watcherDonHang';

export default function* rootSaga() {
    yield all([
        watcherSanPham(),
        watcherDonHang()
    ])
}