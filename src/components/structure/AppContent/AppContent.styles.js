import styled from "styled-components";
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

export const CustomContent = styled(Content)`
  margin-left: 200px;
`;

export const SiteLayout = styled.div`
  padding: 24px;
  min-height: 80vh;
  background-color: #141414;
  margin: 24px 16px 0;
  overflow: initial;
`;

export const CustomBreadcrumb = styled(Breadcrumb)`
  margin: 16px;
`;
