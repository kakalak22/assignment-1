import * as Actions from "../actionsTypes";

const initialSate = {
    // sanPham: { id: "", name: "", image: "", price: null, tax: null },
    danhSachSanPham: [
        { id: 1, ten: "A", linkHinhAnh: "", donGia: 10, tienThue: 2 },
        { id: 2, ten: "B", linkHinhAnh: "", donGia: 10, tienThue: 2 },
        { id: 3, ten: "C", linkHinhAnh: "", donGia: 10, tienThue: 2 },
        { id: 4, ten: "D", linkHinhAnh: "", donGia: 10, tienThue: 2 },
    ]
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