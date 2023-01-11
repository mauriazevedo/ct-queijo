import React from "react";
import { HeaderContainer, LogoContainer } from "./style";
import Logo from "./../Logo";

function DashboardHeader() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo size={50} />
      </LogoContainer>
      <h2>Sair</h2>
    </HeaderContainer>
  );
}

export default DashboardHeader;
