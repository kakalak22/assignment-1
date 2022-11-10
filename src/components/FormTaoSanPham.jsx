import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
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
import CustomModal from "./CustomModal";
import CustomModal2 from "./CustomModal2";

const FormTaoSanPham = () => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const uploadImage = ({ onError, onSuccess, file }) => {
    if (file == null) return;
    const imageRef = ref(storage, `images/${file.name + uuidv4()}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          onSuccess(url);
          setImageUrl(url);
        })
        .catch((error) => onError(error));
    });
  };

  const onFieldsChange = (values) => {
    console.log(values);
  };

  const onFinish = ({ ten, donGia, tienThue }) => {
    console.log(ten, donGia, tienThue);
    dispatch({
      type: Actions.CREATE_NEW_SAN_PHAM,
      data: {
        sanPham: {
          ten: ten,
          donGia: donGia,
          tienThue: tienThue,
        },
        imgUrl: imageUrl,
      },
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Title } = Typography;

  const validateTen = (ten) => {
    const tenLength = ten?.trim().length;
    if (tenLength > 0 && tenLength >= 6) return Promise.resolve();
    return Promise.reject();
  };

  const validateNumber = (value) => {
    if (value > 0) return Promise.resolve();
    return Promise.reject();
  };

  return (
    <React.Fragment>
      {/**<CustomModal isModalOpen={isModalOpen} closeModal={closeModal} />**/}
      <CustomModal2
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        isDraggable={true}
      >
        <Title>HI</Title>
      </CustomModal2>
      <Space style={{ width: "100%" }} direction="vertical">
        <Title>Tạo sản phẩm mới</Title>
        <Divider />
        <Form
          form={form}
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
          onFieldsChange={onFieldsChange}
          autoComplete="off"
        >
          <Form.Item
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload customRequest={uploadImage} name="logo" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
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
          <Space.Compact style={{ width: "100%" }}>
            <Form.Item
              style={{ width: "200px" }}
              wrapperCol={{
                offset: 7,
                span: 14,
              }}
            >
              <Button type="primary" htmlType="submit">
                Tạo sản phẩm
              </Button>
            </Form.Item>
            <Button type="default" onClick={showModal}>
              Xem trước
            </Button>
          </Space.Compact>
        </Form>
      </Space>
    </React.Fragment>
  );
};

export default FormTaoSanPham;
