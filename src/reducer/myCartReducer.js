import * as Actions from "../actionsTypes";

const initialSate = {
    myCart: {
        danhs
    }
}

export default (state = initialSate, action) => {
    switch (action.type) {
        case Actions.DANH_SACH_SAN_PHAM: {
            return state;
        }
        default:
            return state;
    }
}