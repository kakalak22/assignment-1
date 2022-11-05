import { combineReducers } from "redux";
import sanPhamReducer from "./sanPhamReducer";
import donHangReducer from "./donHangReducer"

const reducer = combineReducers({
    sanPhamReducer,
    donHangReducer
})

export default reducer;