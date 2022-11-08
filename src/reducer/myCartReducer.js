import * as Actions from "../actionsTypes";

const initialSate = {
    myCart: {
        danhSachSanPham: [
        ],
        tongCong: null,
        tongThue: null,
        tongTruocThue: null,
        soLuong: null
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