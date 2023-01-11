import React, { useState, useRef } from "react";
import { AddOrder } from "../../services/orders";
import { Form, ContentContainer } from "./style";
import { useNavigate } from "react-router-dom";

function RequestContent({ user }) {
  const [dateInput, setDateInput] = useState("text");
  const navigation = useRef(useNavigate());
  const formInputs = [
    {
      type: "text",
      name: "name",
      value: user?.user_name,
      disabled: true,
      label: "Nome",
    },
    {
      type: "text",
      name: "organization",
      value: user?.user_organization,
      disabled: true,
      label: "Instituição",
    },
    {
      type: "email",
      name: "email",
      value: user?.user_email,
      disabled: true,
      label: "E-mail",
    },
    {
      type: "number",
      name: "cheese_amount",
      label: "Queijo (em Kg)",
    },
    {
      type: "number",
      name: "dulce_de_leche_amount",
      label: "Doce de leite (em Kg)",
    },
    {
      type: "number",
      name: "yougurt_amount",
      label: "Iogurte (em L)",
    },
    {
      type: "datetime-local",
      name: "deadline",
      label: "Data e hora para recebimento",
    },
    {
      type: "textarea",
      name: "reason",
      label: "Motivo da solicitação",
    },
    {
      type: "submit",
      value: "Enviar solicitação",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = localStorage.getItem("user_id");
    const data = {
      user_id: userId,
      cheese_amount: event.target.elements.cheese_amount?.value,
      dulce_de_leche_amount: event.target.elements.dulce_de_leche_amount?.value,
      yogurt_amount: event.target.elements.yougurt_amount?.value,
      deadline: event.target.elements.deadline?.value,
      reason: event.target.elements.reason?.value,
    };

    const result = await AddOrder(data).then((response) => response);
    if (result?.code !== undefined) {
      navigation.current("/dashboard");
    } else {
      navigation.current("/dashboard");
    }
  };

  function HandleFormInputs(inputs) {
    return (
      <Form onSubmit={handleSubmit}>
        <h3>
          Olá, {user?.user_name}! Aqui você pode fazer uma nova solicitação ao
          CT-Queijo.
        </h3>
        {inputs.map((item, index) => {
          if (item.type === "text") {
            return (
              <>
                <p>{item.label}</p>
                <input
                  type={item.type}
                  name={item.name}
                  defaultValue={item.value}
                  disabled={item.disabled}
                  key={index}
                  required={true}
                />
              </>
            );
          } else if (item.type === "email") {
            return (
              <>
                <p>{item.label}</p>
                <input
                  type={item.type}
                  name={item.name}
                  defaultValue={item.value}
                  disabled={item.disabled}
                  key={index}
                  required={true}
                />
              </>
            );
          } else if (item.type === "number") {
            return (
              <>
                <p>{item.label}</p>
                <input
                  type={item.type}
                  key={index}
                  name={item.name}
                  required={true}
                />
              </>
            );
          } else if (item.type === "datetime-local") {
            return (
              <>
                <p>{item.label}</p>
                <input
                  type={dateInput}
                  name={item.name}
                  required={true}
                  onClick={() => setDateInput(item.type)}
                  key={index}
                />
              </>
            );
          } else if (item.type === "textarea") {
            return (
              <>
                <p>{item.label}</p>
                <textarea key={index} name={item.name} required={true} />
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
