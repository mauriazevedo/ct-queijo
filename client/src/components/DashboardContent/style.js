import styled, { css } from "styled-components";

export const NavContainer = styled.div`
  background-color: #c1bebe;
  display: flex;
  width: 80%;
  margin: 30px auto;
`;

export const NavOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 2px;
  margin-right: 10px;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #f7ff49;
    `}
`;
