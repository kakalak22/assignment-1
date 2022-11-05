import * as Actions from "../actionsTypes";

const initialSate = {
    danhSachDongDonHang: [
        { idSanPham: 1, soLuong: 1, donGia: 10, tongTienTruocThue: 5, tongTienThue: null },
        { idSanPham: 2, soLuong: 1, donGia: 10, tongTienTruocThue: 5, tongTienThue: null },
        { idSanPham: 3, soLuong: 1, donGia: 10, tongTienTruocThue: 5, tongTienThue: null },
    ]
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case Actions.DANH_SACH_DONG_DON_HANG: {
            return state;
        }
        default:
            return state;
    }
}