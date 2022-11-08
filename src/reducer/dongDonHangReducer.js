import * as Actions from "../actionsTypes";

const initialSate = {
    dongDonHang: [
        {
            idDonHang: 1,
            danhSachDongDonHang: [
                { idSanPham: 1, soLuong: 1, donGia: 10, tongTienTruocThue: 5, tongTienThue: null },
                { idSanPham: 2, soLuong: 1, donGia: 10, tongTienTruocThue: 5, tongTienThue: null },
                { idSanPham: 3, soLuong: 1, donGia: 10, tongTienTruocThue: 5, tongTienThue: null },
            ]
        }
    ]
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case Actions.DO_SAVE_DONG_DON_HANG: {
            const { data = {} } = action;
            const { copyDongDonHang } = data;
            return {
                ...state,
                dongDonHang: copyDongDonHang
            };
        }
        default:
            return state;
    }
}