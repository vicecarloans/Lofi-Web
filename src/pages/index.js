import React from "react";

import { Layout, Menu, Breadcrumb, Button } from "antd";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
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
  );
};

export default Home;
