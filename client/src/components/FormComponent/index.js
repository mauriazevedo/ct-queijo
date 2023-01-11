import React, { useRef, useState } from "react";
import { AddUser, UserLogin } from "../../services/users";
import { ErrorMessage, Form } from "./style";
import { useNavigate, Link } from "react-router-dom";

function FormComponent({ inputs, title }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigation = useRef(useNavigate());
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title == "Cadastre-se") {
      const data = {
        name: event.target.elements.name?.value,
        lastname: event.target.elements.lastname?.value,
        organization: event.target.elements.organization?.value,
        email: event.target.elements.email?.value,
        password: event.target.elements.password?.value,
      };

      const result = await AddUser(data);
      if (result?.code === "ER_DUP_ENTRY") {
        setErrorMessage("E-mail já cadastrado");
      } else {
        localStorage.setItem("user_id", result.insertId);
        setErrorMessage(null);
        navigation.current("/dashboard");
      }
    } else if (title == "Login") {
      const data = {
        email: event.target.elements.email?.value,
        password: event.target.elements.password?.value,
      };

      const result = await UserLogin(data);
      console.log("resultado", result[0]?.user_id);
      const userId = result[0]?.user_id;
      if (userId) {
        localStorage.setItem("user_id", userId);
        setErrorMessage(null);
        navigation.current("/dashboard");
      } else {
        setErrorMessage("E-mail ou senha inválido(s)");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {inputs.map((item, index) => {
        return (
          <input
            key={index}
            type={item.type}
            placeholder={item.placeholder}
            value={item.value}
            name={item.name}
            required={true}
          />
        );
      })}
      {title === "Login" ? (
        <Link to="/register">Não possui conta? Cadastre-se</Link>
      ) : (
        <Link to="/login">Já possui conta? Entre aqui</Link>
      )}
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </Form>
  );
}

export default FormComponent;
