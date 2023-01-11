import styled, { css } from "styled-components";

export const ContentContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const OrderContainer = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid #d5a83e;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    display: inline;
  }
  padding: 0 20px;
`;

export const SecondLine = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  flex-wrap: wrap;
`;

export const DataContainer = styled.div`
  width: 40%;
  p {
    width: 100%;
    font-weight: 600;
    font-size: 20px;
  }
  span {
    width: 100%;
    padding: 5px;
    border: 1px solid #d5a83e;
    border-radius: 5px;
  }
`;

export const StatusMessage = styled.span`
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  border-radius: 5px;
  padding: 10px;
  margin-right: 20px;
  font-weight: 600;
`;

export const ReasonContainer = styled.div`
  padding: 0 20px;
  p {
    font-weight: 600;
    font-size: 20px;
  }
  div {
    width: 100%;
    padding: 5px;
    border: 1px solid #d5a83e;
    border-radius: 5px;
  }
`;

export const ReturnForm = styled.form`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  textarea {
    width: 100%;
    padding: 20px;
    border: 1px solid #d5a83e;
    border-radius: 5px;
    min-height: 150px;
    font-size: 20px;
    box-sizing: border-box;
  }
  button {
    background-color: transparent;
    padding: 5px 10px;
    font-weight: 600;
    font-size: 20px;
    border-radius: 5px;
    margin: 20px 0 15px 0;
  }
`;

export const ApproveButton = styled.button`
  color: #32cd32;
  border: 2px solid #32cd32;

  &:hover {
    color: #fff;
    border: 0;
    background-color: #32cd32;
  }
`;

export const RejectButton = styled.button`
  color: #ff2525;
  border: 2px solid #ff2525;

  &:hover {
    color: #fff;
    border: 0;
    background-color: #ff2525;
  }
`;

export const HiddenContent = styled.div`
  display: none;
  ${(props) =>
    props.isActive &&
    css`
      display: block;
    `}
`;
