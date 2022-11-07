import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Space, Table } from "antd";

const items = [
  {
    key: "1",
    label: "Action 1",
  },
  {
    key: "2",
    label: "Action 2",
  },
];

const DanhSachDonHang = () => {
  const { dongDonHang = {} } = useSelector((state) => state.dongDonHangReducer);
  console.log("DONG DON HANG:", dongDonHang);
  const { donHang = {} } = useSelector((state) => state.donHangReducer);
  console.log("DON HANG:", donHang);
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

  const columsDongDonHang = [
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
  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: "Screem",
      platform: "iOS",
      version: "10.3.4.5654",
      upgradeNum: 500,
      creator: "Jack",
      createdAt: "2014-12-24 23:12:00",
    });
  }
  return (
    <div>
      {" "}
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
        }}
        dataSource={donHang}
      />
      <Table
        columns={columsDongDonHang}
        dataSource={dongDonHang[0].danhSachDongDonHang}
      />
    </div>
  );
};

export default DanhSachDonHang;
