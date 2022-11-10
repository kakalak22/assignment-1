import React, { useEffect, useState } from "react";
import { Card, Image, Form, InputNumber, Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../actionsTypes";
import { useForm } from "antd/lib/form/Form";

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

  const checkQuantity = (quantity) => {
    if (quantity > 0) return Promise.resolve();
    return Promise.reject();
  };

  return (
    <Card className="item-card" size="small">
      <Image width={250} height={187.5} src={sanPham.linkHinhAnh} />
      <h3>{sanPham.ten}</h3>
      <p>${sanPham.donGia}</p>
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
        <Space.Compact>
          <Form.Item
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
              {
                message: "Số lượng phải lớn hơn 0",
                validator: (_, value) => checkQuantity(value),
              },
            ]}
          >
            <InputNumber />
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
        </Space.Compact>
      </Form>
    </Card>
  );
};

export default SanPham;
