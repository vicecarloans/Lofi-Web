import React from "react";
import { Space } from "antd";

import { AboutText, CustomFooter, AboutLink } from "./AppFooter.styles";
import { BMC } from "../../common";
import Link from "next/link";

export default function AppFooter() {
  return (
    <CustomFooter>
      <Space>
        <Link href="/about">
          <AboutLink>
            <AboutText>About</AboutText>
          </AboutLink>
        </Link>
        <BMC />
      </Space>
    </CustomFooter>
  );
}
