import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Divider, Row, Space, Table, Typography } from "antd";
import Header from "./Header";

const DanhSachDonHang = () => {
  const { dongDonHang = {} } = useSelector((state) => state.dongDonHangReducer);
  const { donHang = {} } = useSelector((state) => state.donHangReducer);
  const expandedRowRender = (record) => {
    const { id } = record;
    const index = dongDonHang.findIndex(({ idDonHang }) => id === idDonHang);
    const data = dongDonHang[index].danhSachDongDonHang;
    const columns = [
      {
        title: "ID Sản Phẩm",
        dataIndex: "idSanPham",
        key: "idSanPham",
      },
      {
        title: "Đơn giá",
        dataIndex: "donGia",
        key: "donGia",
      },
      {
        title: "Tổng tiền thuế",
        dataIndex: "tongTienThue",
        key: "tongTienThue",
      },
      {
        title: "Tổng tiền trước thuế",
        dataIndex: "tongTienTruocThue",
        key: "tongTienTruocThue",
      },
    ];
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên",
      dataIndex: "ten",
      key: "ten",
    },
    {
      title: "Tổng thuế",
      dataIndex: "tongThue",
      key: "tongThue",
    },
    {
      title: "Tổng tiền",
      dataIndex: "tongTien",
      key: "tongTien",
    },
    {
      title: "Tổng trước thuế",
      dataIndex: "tongTruocThue",
      key: "tongTruocThue",
    },
  ];

  const { Title } = Typography;

  return (
    <Space style={{ width: "100%" }} size="large" direction="vertical">
      <Title style={{ marginTop: "1rem" }} level={1}>
        Danh Sách Đơn Hàng
      </Title>
      <Divider />
      <Table
        style={{
          witdh: "100%",
        }}
        rowKey={(record) => record.id}
        columns={columns}
        expandable={{
          expandedRowRender,
        }}
        dataSource={donHang}
      />
    </Space>
  );
};

export default DanhSachDonHang;
