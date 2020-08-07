import React from "react";
import styled from "styled-components";

const BMCButton = styled.a`
  padding: 7px 15px 7px 10px ;
  height: 41px ;
  line-height: 25px;
  text-decoration: none ;
  display: inline-flex ;
  color: #ffffff ;
  background-color: #5f7fff ;
  border-radius: 8px ;
  border: 1px solid transparent ;
  letter-spacing: 0.6px ;
  margin: 0 auto ;
  font-family: "Cookie", cursive ;
  -webkit-box-sizing: border-box ;
  box-sizing: border-box ;
  &:hover,
  &:active,
  &:focus {
    -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) ;
    text-decoration: none ;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) ;
    opacity: 0.85 ;
    color: #ffffff ;
  }
`;

const BMCImg = styled.img`
  height: 24px ;
  width: 25px ;
  margin-bottom: 1px ;
  box-shadow: none ;
  border: none ;
  vertical-align: middle ;
`;

const BMCText = styled.span`
  margin-left: 5px;
  font-size: 18px ;
`;
export default function BMC() {
  return (
    <BMCButton target="_blank" href="https://www.buymeacoffee.com/vicecarloans">
      <BMCImg src="https://img.icons8.com/emoji/48/000000/beer-mug.png" />
      <BMCText>Buy me a beer</BMCText>
    </BMCButton>
  );
}
