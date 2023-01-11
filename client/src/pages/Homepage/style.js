import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const LeftContainer = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7ff49;
`;

export const RightContainer = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    width: 80%;
    text-align: center;
  }

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
`;

export const RedirectButtons = styled.button`
  width: 80%;
  border-radius: 5px;
  height: 50px;
  border: 1px solid #d5a83e;
  margin-bottom: 10px;
  font-size: 22px;
  padding-left: 30px;
  padding: 0;
  background-color: transparent;
  color: #808080;
  cursor: pointer;
  &:hover {
    background-color: #d5a83e;
    color: #fff;
  }
`;
