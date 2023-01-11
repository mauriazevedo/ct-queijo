import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Form = styled.form`
  border: 1px solid #d5a83e;
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
  margin: 0 auto;
  box-sizing: border-box;

  p {
    margin-right: auto;
  }

  a {
    margin-top: 20px;
    text-decoration: none;
    color: #808080;

    &:hover {
      text-decoration: underline;
    }
  }

  h2,
  h3 {
    width: 100%;
  }

  textarea {
    min-height: 100px;
    padding: 30px;
  }

  input,
  textarea {
    width: 100%;
    border-radius: 5px;
    height: 50px;
    border: 1px solid #d5a83e;
    margin-bottom: 10px;
    font-size: 22px;
    padding-left: 30px;

    &[type="datetime-local"] {
      padding-right: 30px;
    }

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
