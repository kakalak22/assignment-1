import * as Actions from "../actionsTypes";

const initialSate = {
    myCart: {
        danhSachSanPham: [
            { id: 1, ten: "A", linkHinhAnh: "", donGia: 10, tienThue: 2 },
            { id: 2, ten: "B", linkHinhAnh: "", donGia: 10, tienThue: 2 },
        ],
        soLuong: 2,
        donGia: 10
    }
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case Actions.MY_CART: {
            return state;
        }
        case Actions.SAVE_ITEM_TO_CART: {
            console.log(action.data);
        }
        default:
            return state;
    }
}