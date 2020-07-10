import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Breadcrumb } from "antd";
import {
  CustomContent,
  SiteLayout,
  CustomBreadcrumb,
} from "./AppContent.styles";

function computeBreadcrumb(route) {
  const paths = route === "/" ? [""] : route.split("/");
  return paths.map((path, i) => {
    if (path == "#") return;
    if (i == 0) {
      return { name: "Home", to: "/" };
    }
    return {
      name: path[0]?.toUpperCase() + path.slice(1),
      to: paths.slice(0, i + 1).join("/"),
    };
  });
}

function renderBreadcrumbs(breadcrumbs) {
  return breadcrumbs.map((breadcrumb, i) => {
    if (i + 1 === breadcrumbs.length) {
      return (
        <Breadcrumb.Item key={breadcrumb.name}>
          {breadcrumb.name}
        </Breadcrumb.Item>
      );
    }
    return (
      <Breadcrumb.Item key={breadcrumb.name}>
        <Link href={breadcrumb.to}>
          <a>{breadcrumb.name}</a>
        </Link>
      </Breadcrumb.Item>
    );
  });
}

export default function AppContent(props) {
  const router = useRouter();
  const route = router.pathname;
  const breadcrumbs = computeBreadcrumb(route);
  return (
    <CustomContent>
      <CustomBreadcrumb>{renderBreadcrumbs(breadcrumbs)}</CustomBreadcrumb>

      <SiteLayout>{props.children}</SiteLayout>
    </CustomContent>
  );
}
