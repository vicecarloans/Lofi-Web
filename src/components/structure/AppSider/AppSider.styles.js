import styled from "styled-components";

import { Layout } from "antd";

const { Sider } = Layout;

export const CustomSider = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
`;
