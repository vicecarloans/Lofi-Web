import React from "react";
import { Layout } from "antd";

export default function PageLayout({ children }) {
  return <Layout className="layout">{children}</Layout>;
}
