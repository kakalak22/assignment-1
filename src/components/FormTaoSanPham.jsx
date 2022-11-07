import React from "react";
import { Button, Checkbox, Form, Input, InputNumber, Space } from "antd";
import { useDispatch } from "react-redux";
import * as Actions from "../actionsTypes";

const FormTaoSanPham = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch({
      type: Actions.CREATE_NEW_SAN_PHAM,
      data: {
        sanPham: values,
      },
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Space style={{ marginTop: "5rem" }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item name="id">
          <Input />
        </Form.Item>
        <Form.Item
          label="Tên"
          name="ten"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Link hình ảnh"
          name="linkHinhAnh"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập Link hình ảnh!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Đơn giá"
          name="donGia"
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
          label="Tiền thuế"
          name="tienThue"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tiền thuế!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Tạo sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default FormTaoSanPham;
