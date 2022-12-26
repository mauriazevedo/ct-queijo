import React from "react";
import { LogoContainer } from "./style";
import { TbCheese } from "react-icons/tb";

function Logo({ size }) {
  return (
    <LogoContainer>
      <TbCheese size={size} />
      <h1>CT-Queijo</h1>
    </LogoContainer>
  );
}

export default Logo;
