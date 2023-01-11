import React from "react";
import { Container, LeftContainer, RightContainer } from "./style";
import Logo from "../../components/Logo";
import FormComponent from "../../components/FormComponent";
import { loginInputs } from "../../constants/formsInput";

function Login() {
  const inputs = loginInputs;

  return (
    <Container>
      <LeftContainer>
        <Logo size={100} />
      </LeftContainer>
      <RightContainer>
        <FormComponent inputs={inputs} title={"Login"} />
      </RightContainer>
    </Container>
  );
}

export default Login;
