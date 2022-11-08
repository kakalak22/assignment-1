import React from "react";
import { Typography, Table, Image } from "antd";

const TableGioHang = ({ danhSachSanPham }) => {
  const { Title, Text } = Typography;

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
      title: "Số lượng",
      dataIndex: "soLuongSanPham",
      key: "soLuongSanPham",
      render: (soLuong) => soLuong,
    },
    {
      title: "Tổng thuế",

      dataIndex: "tienThue",
      key: "tienThue",
    },
    {
      title: "Tổng trước thuế",
      render: (_, data) => data.donGia * data.soLuongSanPham,
    },
    {
      title: "Tổng thuế",
      render: (_, data) => data.tienThue * data.soLuongSanPham,
    },
    {
      title: "Tổng thành tiền",
      render: (_, data) =>
        data.tienThue * data.soLuongSanPham + data.donGia * data.soLuongSanPham,
    },
  ];
  return (
    <Table
      style={{ width: "100%" }}
      columns={columns}
      dataSource={danhSachSanPham}
      pagination={false}
      rowKey={(record) => record.id}
      summary={(pageData) => {
        let tongCong = 0;
        pageData.forEach(({ donGia, tienThue, soLuongSanPham }) => {
          tongCong += (tienThue + donGia) * soLuongSanPham;
        });

        return (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={7} align="right">
              <Title level={3}>Tổng cộng:</Title>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={1} colSpan={1}>
              <Title level={3}>{tongCong}</Title>
            </Table.Summary.Cell>
          </Table.Summary.Row>
        );
      }}
    />
  );
};

export default TableGioHang;
