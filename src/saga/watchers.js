import { all } from 'redux-saga/effects';
import { watcherSanPham } from './watcherSanPham';
import { watcherDonHang } from './watcherDonHang';
import { watcherDongDonHang } from './watcherDongDonHang';
import { watcherMyCart } from './watcherMyCart';
import { watcherApiCall } from './watcherApiCall';

export default function* rootSaga() {
    yield all([
        watcherSanPham(),
        watcherDonHang(),
        watcherDongDonHang(),
        watcherMyCart(),
        watcherApiCall()
    ])
}