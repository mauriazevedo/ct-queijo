import styled, { css } from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 30px auto;
`;

export const NavOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  height: 30px;
  border-radius: 2px;
  margin-right: 10px;

  span {
    margin-left: 10px;
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #f7ff49;
      border-radius: 5px;
    `}
`;
