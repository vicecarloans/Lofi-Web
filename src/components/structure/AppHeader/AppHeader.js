import React from "react";
import { useSelector } from "react-redux";
import { Layout, Row, Col} from "antd";

import { NotificationOutlined } from "@ant-design/icons";
import { profileSelector, isFetchingSelector } from "flux/user";
import Username from "./Username";

const { Header } = Layout;

export default function AppHeader({ ...extra }) {
    const profile = useSelector(profileSelector);
    const isFetching = useSelector(isFetchingSelector);
    const username = profile?.name;
    return (
        <Header {...extra}>
            <Row justify="end">
                <Col span={1}>
                    <NotificationOutlined />
                </Col>
                <Col span={3}>
                    <Username isFetching={isFetching} username={username} />
                </Col>
            </Row>
        </Header>
    );
}
