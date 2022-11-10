import { combineReducers } from "redux";
import sanPhamReducer from "./sanPhamReducer";
import donHangReducer from "./donHangReducer";
import dongDonHangReducer from "./dongDonHangReducer";
import myCartReducer from "./myCartReducer";
import apiReducer from "./apiReducer";

const reducer = combineReducers({
    sanPhamReducer,
    donHangReducer,
    dongDonHangReducer,
    myCartReducer,
    apiReducer
})

export default reducer;