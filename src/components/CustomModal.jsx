import { Button, Image, Modal, Space, Table, Typography } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
const CustomModal = ({ isModalOpen, closeModal, type }) => {
  const sanPham = useSelector(
    (state) => state.sanPhamReducer.danhSachSanPham[0]
  );
  const { donGia, linkHinhAnh, tienThue, ten } = sanPham;
  console.log(sanPham);
  const { Title, Text } = Typography;
  const dataSourceTable = [{ ...sanPham }];
  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "linkHinhAnh",
      key: "linkHinhAnh",
      render: (linkHinhAnh) => <Image src={linkHinhAnh} width={150} />,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "ten",
      key: "ten",
    },
    {
      title: "Đơn giá",
      dataIndex: "donGia",
      key: "donGia",
    },
    {
      title: "Tiền thuế",
      dataIndex: "tienThue",
      key: "tienThue",
    },
  ];
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={closeModal}
      onCancel={closeModal}
    >
      {type !== "table" ? (
        <Space size="large">
          <Image src={linkHinhAnh ? linkHinhAnh : null} width={250} />
          <Space direction="vertical">
            <Title>{ten}</Title>
            <Text>
              Đơn giá: <span>{donGia}</span>
            </Text>
            <Text>
              Tiền thuế: <span>{tienThue}</span>
            </Text>
          </Space>
        </Space>
      ) : (
        <Table
          style={{ width: "100%" }}
          columns={columns}
          dataSource={dataSourceTable}
          pagination={false}
          rowKey={(record) => record.id}
        ></Table>
      )}
    </Modal>
  );
};
export default CustomModal;
