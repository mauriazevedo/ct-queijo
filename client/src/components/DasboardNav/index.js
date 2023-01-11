import React, { useEffect } from "react";
import { NavContainer, NavOption } from "./style";
import {
  AiOutlinePlus,
  AiOutlineClockCircle,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BsInboxes } from "react-icons/bs";

function DashboardNav({ user, content, setContent }) {
  const isAdmin = user?.user_type === "admi";
  useEffect(() => {
    setContent(2);
  }, []);
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

  const admOptions = [
    {
      nome: "Pedidos aguardando análise",
      icon: <AiOutlineClockCircle />,
    },
    {
      nome: "Aprovados",
      icon: <AiOutlineCheckCircle />,
    },
    {
      nome: "Recusados",
      icon: <AiOutlineCloseCircle />,
    },
  ];

  if (isAdmin) {
    return (
      <NavContainer>
        {admOptions.map((item, index) => {
          return (
            <NavOption
              onClick={() => setContent(index + 2)}
              key={index}
              isSelected={index + 2 === content}
            >
              {item.icon}
              <span>{item.nome}</span>
            </NavOption>
          );
        })}
      </NavContainer>
    );
  } else {
    return (
      <NavContainer>
        {options.map((item, index) => {
          return (
            <NavOption
              onClick={() => setContent(index)}
              key={index}
              isSelected={index === content}
            >
              {item.icon}
              <span>{item.nome}</span>
            </NavOption>
          );
        })}
      </NavContainer>
    );
  }
}

export default DashboardNav;
