import React from "react";
import { useSelector } from "react-redux";
import { Layout, Row, Col, Button, Skeleton } from "antd";
import { NotificationOutlined } from "@ant-design/icons";

import { profileSelector, isFetchingSelector } from "flux/user";

const { Header } = Layout;

export default function AppHeader({ ...extra }) {
  const profile = useSelector(profileSelector);
  const isFetching = useSelector(isFetchingSelector);
  const username = profile?.name
  return (
    <Header {...extra}>
      <Row justify="end">
        <Col span={1}>
          <NotificationOutlined />
        </Col>

        <Username isFetching={isFetching} username={username} />
      </Row>
    </Header>
  );
}

function Username({ username, isFetching }) {
  if (isFetching) {
    return <Col span={3} style={{paddingTop: 10}}><Skeleton active paragraph={{ rows: 0 }}></Skeleton></Col>;
  }
  if (username) {
    return <Col span={3}>Hello, {username}</Col>;
  }

  return (
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
  );
}
