import React, { useEffect, useState } from "react";
import { Card, Image, Form, InputNumber, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../actionsTypes";

const SanPham = ({ sanPham }) => {
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.myCartReducer.myCart);
  const [soLuong, setSoLuong] = useState();

  useEffect(() => {
    const index = myCart.danhSachSanPham?.findIndex(
      (element) => element.id === sanPham.id
    );
    if (index > -1) setSoLuong(myCart.danhSachSanPham[index].soLuongSanPham);
  }, [myCart]);

  const onFinish = (values) => {
    dispatch({
      type: Actions.ADD_TO_CART,
      data: {
        sanPham: { ...sanPham, soLuongSanPham: values.soLuong },
      },
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card
      style={{
        width: 300,
      }}
    >
      <Image width={250} src={sanPham.linkHinhAnh} />
      <h3>{sanPham.ten}</h3>
      <p>{sanPham.donGia}</p>
      <p>Sản phẩm trong giỏ hàng : {soLuong ? soLuong : 0}</p>
      <Form
        name="myCart"
        layout="horizontal"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 25,
        }}
        initialValues={{
          remember: true,
          soLuong: 1,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          initialValue={soLuong ? soLuong : 1}
          label="Số lượng"
          name="soLuong"
          labelCol={{
            span: 10,
          }}
          wrapperCol={{
            offset: 0,
            span: 25,
          }}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập số lượng!",
            },
          ]}
        >
          <InputNumber value={soLuong} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 25,
          }}
        >
          <Button type="primary" htmlType="submit">
            Thêm vào giỏ hàng
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SanPham;
