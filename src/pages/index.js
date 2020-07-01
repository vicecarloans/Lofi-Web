import React from "react";

import { Layout, Menu, Breadcrumb, Button } from "antd";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Button
            type="primary"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Log In
          </Button>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Home;
