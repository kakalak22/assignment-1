import { combineReducers } from "redux";
import sanPhamReducer from "./sanPhamReducer";
import donHangReducer from "./donHangReducer";
import dongDonHangReducer from "./dongDonHangReducer";
import myCartReducer from "./myCartReducer";

const reducer = combineReducers({
    sanPhamReducer,
    donHangReducer,
    dongDonHangReducer,
    myCartReducer
})

export default reducer;