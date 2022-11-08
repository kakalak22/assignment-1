import * as Actions from "../actionsTypes";

const initialSate = {
    donHang: []
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