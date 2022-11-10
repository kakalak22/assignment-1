import { Typography, Space, Button, Divider } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableGioHang from "./TableGioHang";
import * as Actions from "../actionsTypes";

const MyCart = () => {
  const { Title, Text } = Typography;
  const { myCart = {} } = useSelector((state) => state.myCartReducer);
  const [isEmpty, setIsEmpty] = useState(true);
  const { danhSachSanPham } = myCart;
  const dispatch = useDispatch();

  useEffect(() => {
    myCart.danhSachSanPham.length > 0 ? setIsEmpty(false) : setIsEmpty(true);
  }, [myCart]);

  const handleThanhToan = () => {
    dispatch({
      type: Actions.THANH_TOAN_DON_HANG,
      data: { myCart: myCart },
    });
  };

  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Title style={{ marginTop: "1rem" }}>Giỏ hàng</Title>
      <Divider />
      <Space direction="vertical" style={{ width: "100%" }}>
        <TableGioHang danhSachSanPham={danhSachSanPham} />
        <Button disabled={isEmpty} type="primary" onClick={handleThanhToan}>
          Thanh toán
        </Button>
      </Space>
    </Space>
  );
};

export default MyCart;
