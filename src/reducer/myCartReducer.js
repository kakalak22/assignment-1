import * as Actions from "../actionsTypes";

const initialSate = {
    myCart: {
        danhSachSanPham: [
            { id: 1, ten: "A", linkHinhAnh: "", donGia: 10, tienThue: 2, soLuongSanPham: 2 },
            { id: 2, ten: "B", linkHinhAnh: "", donGia: 10, tienThue: 2, soLuongSanPham: 1 },
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
            const { data = {} } = action;
            const { sanPham } = data;
            const { danhSachSanPham } = state.myCart;
            let copyDanhSachSanPham = [...danhSachSanPham];

            let index = danhSachSanPham.findIndex((element) => {
                return element.id === sanPham.id;
            });

            if (index > -1) {
                copyDanhSachSanPham[index].soLuongSanPham += sanPham.soLuongSanPham;
            }
            if (index < 0) {
                copyDanhSachSanPham.unshift(sanPham);
            }

            const newDonGia = danhSachSanPham.reduce((previousValue, current) => {
                return previousValue + current.donGia * current.soLuongSanPham;
            }, 0);
            const newSoLuong = danhSachSanPham.reduce((previousValue, current) => {
                return previousValue + current.soLuongSanPham;
            }, 0);
            const newMyCart = {
                danhSachSanPham: copyDanhSachSanPham,
                soLuong: newSoLuong,
                donGia: newDonGia
            }

            return {
                ...state,
                myCart: newMyCart
            }
        }
        default:
            return state;
    }
}