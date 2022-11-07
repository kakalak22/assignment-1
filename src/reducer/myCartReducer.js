import * as Actions from "../actionsTypes";

const initialSate = {
    myCart: {
        danhSachSanPham: [
            { id: 1, ten: "A", linkHinhAnh: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png", donGia: 10, tienThue: 2, soLuongSanPham: 2, tongTruocThue: null, tongThue: null },
            { id: 2, ten: "B", linkHinhAnh: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png", donGia: 10, tienThue: 2, soLuongSanPham: 1, tongTruocThue: null, tongThue: null },
        ],
        tongCong: 10,
        tongThue: null,
        tongTruocThue: null,
        soLuong: 2
    }
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case Actions.MY_CART: {
            return state;
        }
        case Actions.SAVE_ITEM_TO_CART: {
            const { data = {} } = action;
            const { newMyCart } = data;
            return {
                ...state,
                myCart: newMyCart
            }
        }
        default:
            return state;
    }
}