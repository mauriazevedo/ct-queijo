import React from "react";
import { Form } from "./style";

function FormComponent({ inputs, title }) {
  return (
    <Form>
      <h2>{title}</h2>
      {inputs.map((item, index) => {
        return (
          <input
            key={index}
            type={item.type}
            placeholder={item.placeholder}
            value={item.value}
            name={item.name}
          />
        );
      })}
    </Form>
  );
}

export default FormComponent;
