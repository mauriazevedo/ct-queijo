import React from "react";
import { AddUser, UserLogin } from "../../services/users";
import { Form } from "./style";

function FormComponent({ inputs, title }) {
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

      console.log(await AddUser(data));
    } else if (title == "Login") {
      const data = {
        email: event.target.elements.email?.value,
        password: event.target.elements.password?.value,
      };

      console.log(await UserLogin(data));
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
    </Form>
  );
}

export default FormComponent;
