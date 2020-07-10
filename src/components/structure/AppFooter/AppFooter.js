import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const { Footer } = Layout;

const CustomFooter = styled(Footer)`
  text-align: right;
`;

export default function AppFooter() {
  return <CustomFooter>&copy;Huy Dam</CustomFooter>;
}
