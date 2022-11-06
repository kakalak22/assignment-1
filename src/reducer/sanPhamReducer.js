import * as Actions from "../actionsTypes";

const initialSate = {
    // sanPham: { id: "", name: "", image: "", price: null, tax: null },
    danhSachSanPham: [
        { id: 1, ten: "A", linkHinhAnh: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png", donGia: 10, tienThue: 2 },
        { id: 2, ten: "B", linkHinhAnh: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png", donGia: 10, tienThue: 2 },
        { id: 3, ten: "C", linkHinhAnh: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png", donGia: 10, tienThue: 2 },
        { id: 4, ten: "D", linkHinhAnh: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png", donGia: 10, tienThue: 2 },
    ]
}

export default (state = initialSate, action) => {
    switch (action.type) {

        case Actions.SAVE_SAN_PHAM: {
            const { data = {} } = action;
            const { sanPham } = data;
            let copyDanhSachSanPham = [...state.danhSachSanPham];
            copyDanhSachSanPham.unshift(sanPham);
            return {
                ...state,
                danhSachSanPham: copyDanhSachSanPham
            }
        }



        default:
            return state;
    }
}