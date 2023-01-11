import React from "react";
import {
  Container,
  LeftContainer,
  RedirectButtons,
  RightContainer,
} from "./style";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <Container>
      <LeftContainer>
        <Logo size={100} />
      </LeftContainer>
      <RightContainer>
        <h1>Bem vindo ao CT do Queijo! O que deseja fazer?</h1>
        <Link to="/login">
          <RedirectButtons>Fazer login</RedirectButtons>
        </Link>
        <Link to="/register">
          <RedirectButtons>Cadastrar-se</RedirectButtons>
        </Link>
      </RightContainer>
    </Container>
  );
}

export default Homepage;
