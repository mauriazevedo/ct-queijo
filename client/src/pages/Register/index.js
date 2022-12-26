import React, { useRef } from "react";
import { Container, LeftContainer, RightContainer } from "./style";
import Logo from "../../components/Logo";
import FormComponent from "../../components/FormComponent";
import { useNavigate } from "react-router-dom";
import { registerInputs } from "../../constants/formsInput";

function Register() {
  const navigation = useRef(useNavigate());
  const inputs = registerInputs;

  return (
    <Container>
      <LeftContainer>
        <Logo size={100} />
      </LeftContainer>
      <RightContainer>
        <FormComponent inputs={inputs} title={"Cadastre-se"} />
      </RightContainer>
    </Container>
  );
}

export default Register;
