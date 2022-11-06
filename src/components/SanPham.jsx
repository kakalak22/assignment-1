import React from "react";
import { Card, Image, Form, InputNumber, Button } from "antd";
import { useDispatch } from "react-redux";
import * as Actions from "../actionsTypes";

const SanPham = ({ sanPham }) => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch({
      type: Actions.ADD_TO_CART,
      data: {
        sanPham: sanPham,
        soLuong: values.soLuong,
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
              message: "Vui lòng nhập đơn giá!",
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
      </Form>
    </Card>
  );
};

export default SanPham;
