import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  InputNumber,
  Space,
  Typography,
  Upload,
} from "antd";
import { useDispatch } from "react-redux";
import * as Actions from "../actionsTypes";
import { storage } from "../firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const FormTaoSanPham = () => {
  const dispatch = useDispatch();
  const [imgUpload, setImgUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const uploadImage = () => {
    if (imgUpload == null) return;
    const imageRef = ref(storage, `images/${imgUpload.name + uuidv4()}`);
    uploadBytes(imageRef, imgUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        alert("uploaded");
      });
    });
  };

  const fileHandle = (e) => {
    setImgUpload(e.target.files[0]);
  };

  const onFinish = (values) => {
    dispatch({
      type: Actions.CREATE_NEW_SAN_PHAM,
      data: {
        sanPham: values,
        imgUrl: imageUrls[0],
      },
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Title } = Typography;

  const validateTen = (ten) => {
    const tenLength = ten.trim().length;
    if (tenLength > 0 && tenLength >= 6) return Promise.resolve();
    return Promise.reject();
  };

  const validateNumber = (value) => {
    if (value > 0) return Promise.resolve();
    return Promise.reject();
  };

  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <Title>Tạo sản phẩm mới</Title>
      <Divider />

      <Form
        layout="vertical"
        colon={true}
        labelAlign="left"
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <input type="file" onChange={fileHandle} />
        <Button type="default" onClick={uploadImage}>
          Upload
        </Button>
        <Form.Item
          label="Tên Sản Phẩm"
          name="ten"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên!",
            },
            {
              message: "Tên phải có từ 0-6 ký tự",
              validator: (_, value) => validateTen(value),
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/*<Form.Item
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
        </Form.Item>*/}

        <Form.Item
          label="Đơn giá"
          name="donGia"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập đơn giá!",
            },
            {
              message: "Đơn giá phải lớn hơn 0",
              validator: (_, value) => validateNumber(value),
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
              message: "Vui lòng nhập tiền thuế! (%)",
            },
            {
              message: "Thuế phải lớn hơn 0",
              validator: (_, value) => validateNumber(value),
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 7,
            span: 14,
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
