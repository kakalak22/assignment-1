import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import * as Actions from "./actionsTypes";
import { useEffect } from 'react';
import DanhSachSanPham from './components/DanhSachSanPham';
import FormTaoSanPham from './components/FormTaoSanPham';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: Actions.DANH_SACH_SAN_PHAM
    });
    dispatch({
      type: Actions.DANH_SACH_DON_HANG
    })
    dispatch({
      type: Actions.DANH_SACH_DONG_DON_HANG
    })
    dispatch({
      type: Actions.MY_CART
    })
  }, [])

  return (
    <div className="App">
      <DanhSachSanPham />
      <FormTaoSanPham />
    </div>
  );
}

export default App;
