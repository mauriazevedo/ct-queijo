import React from "react";
import { NavContainer, NavOption } from "./style";
import { AiOutlinePlus } from "react-icons/ai";
import { BsInboxes } from "react-icons/bs";

function DashboardNav({ content, setContent }) {
  const options = [
    {
      nome: "Solicitar pedido",
      icon: <AiOutlinePlus />,
    },
    {
      nome: "Acompanhar solicitações",
      icon: <BsInboxes />,
    },
  ];

  return (
    <NavContainer>
      {options.map((item, index) => {
        return (
          <NavOption
            onClick={() => setContent(index)}
            key={index}
            isSelected={index == content}
          >
            {item.icon}
            <span>{item.nome}</span>
          </NavOption>
        );
      })}
    </NavContainer>
  );
}

export default DashboardNav;
