import DanhSachSanPham from './components/DanhSachSanPham';
import FormTaoSanPham from './components/FormTaoSanPham';
import MyCart from './components/MyCart';
import DanhSachDonHang from './components/DanhSachDonHang';
import { Route, Routes } from 'react-router-dom'
import PageLayout from './components/PageLayout';
import "./App.css";
import Test from './components/Test';
import Test2 from './components/Test2';
import CustomModal2 from './components/CustomModal2';



function App() {

  return (
    <div>
      <PageLayout>
        <Routes>
          <Route path="/">
            <Route index element={<DanhSachSanPham />} />
          </Route>
          <Route path='danh-sach-don-hang' element={<DanhSachDonHang />} />
          <Route path='tao-san-pham' element={<FormTaoSanPham />} />
          <Route path='gio-hang' element={<MyCart />} />
          <Route path='test' element={<Test />} />
          <Route path='test2' element={<CustomModal2 />} />
        </Routes>
      </PageLayout>


    </div>
  );
}

export default App;
