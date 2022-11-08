import { Space, Typography } from "antd";
import React from "react";

const Header = ({ header }) => {
  const { Title } = Typography;
  return (
    <Space style={{ width: "100%" }}>
      <Title level={1}>{header}</Title>
    </Space>
  );
};

export default Header;
