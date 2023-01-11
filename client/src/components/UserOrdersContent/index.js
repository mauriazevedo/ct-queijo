import React, { useEffect, useState } from "react";
import { GetOrdersById } from "../../services/orders";
import {
  ContentContainer,
  DataContainer,
  FirstLine,
  HiddenContent,
  OrderContainer,
  ReasonContainer,
  SecondLine,
  StatusMessage,
} from "./style";

import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

function UserOrdersContent() {
  const [isActive, setIsActive] = useState(null);
  const [currentOrders, setCurrentOrders] = useState(null);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    (async () => {
      const orders = await GetOrdersById(userId).then((response) => response);
      setCurrentOrders(orders);
    })();
  }, []);

  function HandleStatusMessage(status) {
    if (status === "approved") {
      return <StatusMessage color={"#32cd32"}>Aprovado</StatusMessage>;
    } else if (status === "under_review") {
      return <StatusMessage color={"#d5a83e"}>Em análise</StatusMessage>;
    } else {
      return <StatusMessage color={"#ff2525"}>Indeferido</StatusMessage>;
    }
  }
  return (
    <ContentContainer>
      {currentOrders?.map((item, index) => {
        const datetime = item?.order_deadline_datetime;
        const hour = datetime.substring(11, 13);
        const minute = datetime.substring(14, 16);
        const day = datetime.substring(8, 10);
        const month = datetime.substring(5, 7);
        const year = datetime.substring(0, 4);
        return (
          <OrderContainer key={index}>
            <FirstLine>
              <h2>Pedido #{item?.order_id}</h2>
              <div>
                {HandleStatusMessage(item?.order_status)}
                <p
                  onClick={() =>
                    index === isActive ? setIsActive(null) : setIsActive(index)
                  }
                >
                  {isActive === index ? <AiOutlineUp /> : <AiOutlineDown />}
                </p>
              </div>
            </FirstLine>
            <HiddenContent isActive={isActive === index}>
              <SecondLine>
                <DataContainer>
                  <p>Queijo solicitado</p>
                  <span>{item?.order_cheese_amount} Kg</span>
                </DataContainer>
                <DataContainer>
                  <p>Doce de leite solicitado</p>
                  <span>{item?.order_dulce_de_lechet_amount} Kg</span>
                </DataContainer>
                <DataContainer>
                  <p>Iogurte solicitado</p>
                  <span>{item?.order_yougurt_amount} L</span>
                </DataContainer>
                <DataContainer>
                  <p>Entrega programada</p>
                  <span>
                    {hour}h{minute}m - {day}/{month}/{year}
                  </span>
                </DataContainer>
              </SecondLine>
              <ReasonContainer>
                <p>Motivo da solicitação</p>
                <div>{item.order_reason}</div>
              </ReasonContainer>
              <ReasonContainer>
                <p>Retorno da solicitação</p>
                <div>
                  {item?.order_return
                    ? item?.order_return
                    : "Seu pedido ainda está sob análise. Volte mais tarde! ;)"}
                </div>
              </ReasonContainer>
            </HiddenContent>
          </OrderContainer>
        );
      })}
    </ContentContainer>
  );
}

export default UserOrdersContent;
