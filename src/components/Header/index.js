import React from "react";
import {
  HeaderDiv,
  HeaderLogo,
  HeaderLoginIcon,
  HeaderPara,
  HeaderLeftDiv,
  HeaderRightDiv,
} from "./Styles";

function Header() {
  return (
    <HeaderDiv>
      <HeaderLeftDiv>
        <HeaderLogo />
        <HeaderPara>College Search</HeaderPara>
      </HeaderLeftDiv>
      <HeaderRightDiv>
        <HeaderLoginIcon />
        <HeaderPara>Sign Up</HeaderPara>
      </HeaderRightDiv>
    </HeaderDiv>
  );
}

export default Header;
