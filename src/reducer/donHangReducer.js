import * as Actions from "../actionsTypes";

const initialSate = {
    donHang: [
        { id: 1, ten: "Don hang 1", tongTruocThue: 10, tongThue: 5, tongTien: null }
    ]
}

export default (state = initialSate, action) => {
    switch (action.type) {

        case Actions.SAVE_DON_HANG: {
            const { data = {} } = action;
            const { copyDonHang } = data;
            return {
                ...state,
                donHang: copyDonHang
            }
        }

        default:
            return state;
    }
}