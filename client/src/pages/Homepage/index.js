import React, { useRef } from "react";
import { Container, LeftContainer, RightContainer } from "./style";
import Logo from "../../components/Logo";
import FormComponent from "../../components/FormComponent";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigation = useRef(useNavigate());
  const inputs = [
    {
      type: "text",
      placeholder: "Login",
      value: "email",
    },
  ];
  return (
    <Container>
      <LeftContainer>
        <Logo size={100} />
      </LeftContainer>
      <RightContainer>
        <FormComponent inputs={inputs} title={"Login"} />
        <button onClick={() => navigation.current("/dashboard")} />
      </RightContainer>
    </Container>
  );
}

export default Homepage;
