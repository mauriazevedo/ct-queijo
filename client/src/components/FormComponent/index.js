import React from "react";
import { AddUser } from "../../services/users";
import { Form } from "./style";

function FormComponent({ inputs, title }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: event.target.elements.name?.value,
      lastname: event.target.elements.lastanme?.value,
      organization: event.target.elements.organization?.value,
      email: event.target.elements.email?.value,
      password: event.target.elements.password?.value,
    };

    AddUser(data);
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
