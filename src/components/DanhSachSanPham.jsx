import { Typography, Divider, Card, Image, Space, Col, Row, Badge } from "antd";
import React from "react";
import { useSelector } from "react-redux/es/exports";
import { ShoppingCartOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";

const DanhSachSanPham = () => {
  const danhSachSanPham = useSelector(
    (state) => state.sanPhamReducer.danhSachSanPham
  );

  const myCart = useSelector((state) => state.myCartReducer.myCart);

  const { soLuong } = myCart;

  console.log("myCart", myCart);

  console.log("danh sach", danhSachSanPham);

  const { Title } = Typography;
  return (
    <React.Fragment>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Typography style={{ marginTop: "1rem" }}>
            <Title level={1}>Danh Sách Sản Phẩm</Title>
          </Typography>
        </Col>
        <Col
          span={8}
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
          ? danhSachSanPham.map((sanPham) => (
              <Card
                style={{
                  width: 300,
                }}
              >
                <Image width={250} src={sanPham.linkHinhAnh} />
                <h3>{sanPham.ten}</h3>
                <p>{sanPham.donGia}</p>
              </Card>
            ))
          : null}
      </Space>
    </React.Fragment>
  );
};

export default DanhSachSanPham;
