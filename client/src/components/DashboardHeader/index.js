import React, { useRef } from "react";
import { HeaderContainer, LogoContainer } from "./style";
import Logo from "./../Logo";
import { useNavigate } from "react-router-dom";

function DashboardHeader() {
  const navigation = useRef(useNavigate());
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo size={50} />
      </LogoContainer>
      <h2
        onClick={() => {
          localStorage.removeItem("user_id");
          navigation.current("/login");
        }}
      >
        Sair
      </h2>
    </HeaderContainer>
  );
}

export default DashboardHeader;
