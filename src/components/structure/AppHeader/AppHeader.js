import React from "react";
import { useSelector } from "react-redux";
import { Layout, Row, Col, Button } from "antd";
import { NotificationOutlined } from "@ant-design/icons";

import { profileSelector } from "flux/user";
const { Header } = Layout;

export default function AppHeader({ ...extra }) {
  const profile = useSelector(profileSelector);

  const username = profile.name;
  return (
    <Header {...extra}>
      <Row justify="end">
        <Col span={1}>
          <NotificationOutlined />
        </Col>

        {username ? (
          <Col span={3}>Hello, {username}</Col>
        ) : (
          <Col span={3}>
            <Button
              type="primary"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Sign In
            </Button>
          </Col>
        )}
      </Row>
    </Header>
  );
}
