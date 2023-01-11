import React, { useState } from "react";
import { Form, ContentContainer } from "./style";

function RequestContent({ user }) {
  const [dateInput, setDateInput] = useState("text");
  const formInputs = [
    {
      type: "text",
      name: "Nome",
      value: user?.user_name,
      disabled: true,
    },
    {
      type: "text",
      name: "Instituição",
      value: user?.user_organization,
      disabled: true,
    },
    {
      type: "email",
      name: "E-mail",
      value: user?.user_email,
      disabled: true,
    },
    {
      type: "number",
      name: "Queijo Coalho (em Kg)",
    },
    {
      type: "number",
      name: "Doce de leite (em Kg)",
    },
    {
      type: "number",
      name: "Iogurte (em L)",
    },
    {
      type: "datetime-local",
      name: "Data de entrega",
    },
    {
      type: "textarea",
      name: "Motivo da solicitação",
    },
    {
      type: "submit",
      value: "Enviar solicitação",
    },
  ];

  function HandleFormInputs(inputs) {
    return (
      <Form>
        <h3>
          Olá, {user?.user_name}! Aqui você pode fazer uma nova solicitação ao
          CT-Queijo.
        </h3>
        {inputs.map((item, index) => {
          if (item.type === "text") {
            return (
              <>
                <p>{item.name}</p>
                <input
                  type={item.type}
                  defaultValue={item.value}
                  disabled={item.disabled}
                  key={index}
                />
              </>
            );
          } else if (item.type === "email") {
            return (
              <>
                <p>{item.name}</p>
                <input
                  type={item.type}
                  defaultValue={item.value}
                  disabled={item.disabled}
                  key={index}
                />
              </>
            );
          } else if (item.type === "number") {
            return (
              <>
                <p>{item.name}</p>
                <input type={item.type} key={index} />
              </>
            );
          } else if (item.type === "datetime-local") {
            return (
              <>
                <p>{item.name}</p>
                <input
                  type={dateInput}
                  onClick={() => setDateInput(item.type)}
                  key={index}
                />
              </>
            );
          } else if (item.type === "textarea") {
            return (
              <>
                <p>{item.name}</p>
                <textarea key={index} />
              </>
            );
          } else {
            return <input type={item.type} value={item.value} key={index} />;
          }
        })}
      </Form>
    );
  }
  return <ContentContainer>{HandleFormInputs(formInputs)}</ContentContainer>;
}

export default RequestContent;
