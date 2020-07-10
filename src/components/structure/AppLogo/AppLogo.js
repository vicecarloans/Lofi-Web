import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  height: 64px;
  background-image: url("/img/app-logo.png");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

export default function AppLogo() {
  return <Logo />;
}
