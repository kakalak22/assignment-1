import { Typography, Divider, Space, Col, Row, Badge } from "antd";
import React from "react";
import { useSelector } from "react-redux/es/exports";
import { ShoppingCartOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import SanPham from "./SanPham";

const DanhSachSanPham = () => {
  const danhSachSanPham = useSelector(
    (state) => state.sanPhamReducer.danhSachSanPham
  );

  const myCart = useSelector((state) => state.myCartReducer.myCart);

  const { soLuong = 0 } = myCart;

  const { Title } = Typography;
  return (
    <Space direction="vertical">
      <Row>
        <Col span={22}>
          <Typography style={{ marginTop: "1rem" }}>
            <Title level={1}>Danh Sách Sản Phẩm</Title>
          </Typography>
        </Col>
        <Col
          span={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Badge count={soLuong}>
            <ShoppingCartOutlined style={{ fontSize: "40px" }} />
          </Badge>
        </Col>
      </Row>
      <Divider />
      <Space
        direction="horizontal"
        size="large"
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {danhSachSanPham
          ? danhSachSanPham.map((sanPham, index) => (
              <SanPham key={index} sanPham={sanPham} />
            ))
          : null}
      </Space>
    </Space>
  );
};

export default DanhSachSanPham;
