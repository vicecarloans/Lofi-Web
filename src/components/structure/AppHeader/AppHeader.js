import React from "react";
import { Layout, Row, Col } from "antd";

const { Header } = Layout;

export default function AppHeader({ username, ...extra }) {
  return (
    <Header {...extra}>
      <Row justify="end">
        <Col span={4}>Hello, {username}</Col>
      </Row>
    </Header>
  );
}
