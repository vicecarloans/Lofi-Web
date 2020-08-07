import React, { useRef } from "react";
import { Skeleton, Button, Typography, Dropdown, Menu, Col } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { DropdownLink } from "./AppHeader.styles";

import headerMenuItems from "constants/header-menu";

const { Text } = Typography;

export default function Username({ username, isFetching }) {
    if (isFetching) {
        return (
            <div style={{ paddingTop: 10 }}>
                <Skeleton active paragraph={{ rows: 0 }}></Skeleton>
            </div>
        );
    }
    if (username) {
        return (
            <Dropdown overlay={renderMenu()}>
                <DropdownLink
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                >
                    <Text>Hello, {username}</Text>
                    <CaretDownOutlined
                        style={{ marginLeft: 5, fontSize: 12 }}
                    />
                </DropdownLink>
            </Dropdown>
        );
    }

    return (
        <Button
            type="primary"
            onClick={() => {
                window.location.href = "/login";
            }}
        >
            Sign In
        </Button>
    );
}

function renderMenu() {
    const form = useRef(null);

    const forceLogout = () => {
        form.current.submit()
    }
    return (
        <Menu>
            {headerMenuItems.map((item) => {
                if (item.action === "forceLogout") {
                    return (
                        
                            <Menu.Item icon={item.icon} key={item.key} onClick={forceLogout}>
                                {item.display}
                                <form  method="POST" action="/logout" ref={form}>
                                
                                </form>
                            </Menu.Item>
                      
                    );
                }
                return (
                    <Menu.Item icon={item.icon} key={item.key} onClick={() => handleMenuClick(item.action)}>
                        {item.display}
                    </Menu.Item>
                );
            })}
        </Menu>
    );
}

function handleMenuClick(action) {
    if(action === "editProfile") {
        window.open("https://auth.huydam.guru/enduser/settings", "_blank");
    }
}