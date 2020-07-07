import React, { useState } from "react";
import { Layout, Menu } from "antd";
import SiderMenu from "constants/sider-menu";

const { Sider } = Layout;

const { SubMenu } = Menu;

function renderMenu() {
  return SiderMenu.map((sider) => {
    if (!sider.hasMore) {
      return (
        <Menu.Item key={sider.key} icon={sider.icon}>
          {sider.name}
        </Menu.Item>
      );
    }
  });
}

export default function AppSider() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div className="logo"></div>
      <Menu theme="dark" defaultSelectedKeys={["Desktop"]} mode="inline">
        {renderMenu()}
      </Menu>
    </Sider>
  );
}
