import React, { useEffect, useState } from "react";
import { GetOrdersByStatus, UpdateOrderStatus } from "../../services/orders";
import {
  ApproveButton,
  ContentContainer,
  DataContainer,
  FirstLine,
  HiddenContent,
  OrderContainer,
  ReasonContainer,
  RejectButton,
  ReturnForm,
  SecondLine,
  StatusMessage,
} from "./style";

import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

function AdminLists({ orderStatus }) {
  const [isActive, setIsActive] = useState(null);
  const [currentOrders, setCurrentOrders] = useState(null);
  const [action, setAction] = useState(null);
  const [currentOrderId, setCurrentOrderId] = useState(null);

  useEffect(() => {
    (async () => {
      const orders = await GetOrdersByStatus(orderStatus).then(
        (response) => response
      );
      setCurrentOrders(orders);
    })();
  }, [orderStatus]);

  function HandleStatusMessage(status) {
    if (status === "approved") {
      return <StatusMessage color={"#32cd32"}>Aprovado</StatusMessage>;
    } else if (status === "under_review") {
      return <StatusMessage color={"#d5a83e"}>Em análise</StatusMessage>;
    } else {
      return <StatusMessage color={"#ff2525"}>Indeferido</StatusMessage>;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      order_id: currentOrderId,
      message: event.target.elements.return_message.value,
      new_status: action,
    };
    console.log(data);
    await UpdateOrderStatus(data).then((response) => response);
    window.location.reload(false);
  };

  return (
    <ContentContainer>
      {currentOrders?.map((item, index) => {
        const datetime = item?.order_deadline_datetime;
        const hour = datetime.substring(11, 13);
        const minute = datetime.substring(14, 16);
        const day = datetime.substring(8, 10);
        const month = datetime.substring(5, 7);
        const year = datetime.substring(0, 4);
        const isFinished = item?.order_status !== "under_review";
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
                <ReturnForm onSubmit={handleSubmit}>
                  <textarea
                    disabled={isFinished}
                    required={true}
                    name={"return_message"}
                    defaultValue={item?.order_return}
                  />
                  {isFinished ? null : (
                    <ApproveButton
                      name={"submit"}
                      value={"approved"}
                      type={"submit"}
                      onClick={() => {
                        setAction("approved");
                        setCurrentOrderId(item?.order_id);
                      }}
                    >
                      Aprovar
                    </ApproveButton>
                  )}
                  {isFinished ? null : (
                    <RejectButton
                      name={"submit"}
                      value={"rejected"}
                      type={"submit"}
                      onClick={() => {
                        setAction("rejected");
                        setCurrentOrderId(item?.order_id);
                      }}
                    >
                      Rejeitar
                    </RejectButton>
                  )}
                </ReturnForm>
              </ReasonContainer>
            </HiddenContent>
          </OrderContainer>
        );
      })}
    </ContentContainer>
  );
}

export default AdminLists;
