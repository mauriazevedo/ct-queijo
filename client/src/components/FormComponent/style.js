import styled from "styled-components";

export const Form = styled.form`
  border: 1px solid #d5a83e;
  border-radius: 10px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;

  a {
    margin-top: 20px;
    text-decoration: none;
    color: #808080;

    &:hover {
      text-decoration: underline;
    }
  }

  h2 {
    width: 100%;
  }

  input {
    width: 100%;
    border-radius: 5px;
    height: 50px;
    border: 1px solid #d5a83e;
    margin-bottom: 10px;
    font-size: 22px;
    padding-left: 30px;

    &[type="submit"] {
      padding: 0;
      background-color: transparent;
      color: #808080;

      &:hover {
        background-color: #d5a83e;
        color: #fff;
      }
    }
  }
`;
