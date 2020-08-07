import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { BMC } from '../../common';

const { Footer } = Layout;

const CustomFooter = styled(Footer)`
  text-align: right;
`;

export default function AppFooter() {
  return <CustomFooter><span>About</span><BMC /></CustomFooter>;
}

