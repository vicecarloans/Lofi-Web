import React, { useState } from "react";
import { Menu } from "antd";
import { UnlockOutlined, LockOutlined } from "@ant-design/icons";
import SiderMenu from "constants/sider-menu";
import { AppLogo } from "../AppLogo";
import { CustomSider } from "./AppSider.styles";
import { PRIVATE_ZONE } from "constants/app";
import { useSelector } from "react-redux";
import { profileSelector } from "flux/user";
import { useRouter } from "next/router";

const { SubMenu } = Menu;

function renderMenu(isAuthenticated, navigateToRoute) {
  return SiderMenu.map((sider) => {
    let icon = sider.icon;
    if (sider.key === PRIVATE_ZONE) {
      icon = isAuthenticated ? <UnlockOutlined /> : <LockOutlined />;
    }

    if (!sider.hasMore) {
      return (
        <Menu.Item
          onClick={() => navigateToRoute(sider.to)}
          key={sider.key}
          icon={icon}
        >
          {sider.name}
        </Menu.Item>
      );
    }

    return (
      <SubMenu key={sider.key} icon={icon} title={sider.name}>
        {sider.subMenus.map((subMenu) => (
          <Menu.Item key={subMenu.key} icon={subMenu.icon}>
            {subMenu.name}
          </Menu.Item>
        ))}
      </SubMenu>
    );
  });
}

export default function AppSider() {
  const [collapsed, setCollapsed] = useState(false);
  const profile = useSelector(profileSelector);
  const router = useRouter();

  function navigateToRoute(route) {
    router.push(route);
  }

  return (
    <CustomSider
      breakpoint="lg"
      collapsedWidth="0"
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      width={220}
    >
      <AppLogo />
      <Menu theme="dark"  mode="inline">
        {renderMenu(!!profile?.name, navigateToRoute)}
      </Menu>
    </CustomSider>
  );
}
