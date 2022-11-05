import * as Actions from "../actionsTypes";

const initialSate = {
    danhSachDonHang: [
        { id: 1, ten: "Don hang 1", tongTruocThue: 10, tongThue: 5, tongTien: null },
        { id: 2, ten: "Don hang 2", tongTruocThue: 10, tongThue: 5, tongTien: null },
        { id: 3, ten: "Don hang 3", tongTruocThue: 10, tongThue: 5, tongTien: null },
    ]
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case Actions.DANH_SACH_DON_HANG: {
            return state;
        }
        default:
            return state;
    }
}