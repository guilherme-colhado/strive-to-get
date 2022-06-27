import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #031319;

  p {
    color: #ffffff;
    font-size: 12px;
    margin-bottom: 3rem;

    a {
      color: #00b2d9;
      text-decoration: none;
      font-size: 12px;
      margin-left: 5px;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  max-width: 100%;
  background-color: #3b464b;
  border-radius: 6px;

  form {
    width: 340px;
    text-align: center;
    padding: 2rem;

    h1 {
      color: #ffffff;
      margin-bottom: 32px;
      font-size: 5rem;
    }

    button {
      height: 45px;
      border-radius: 8px;
      background: #7b0000;
      color: #ffffff;
      border: transparent;
      font-size: 20px;
      margin-top: 16px;
      width: 100%;
      cursor: pointer;

      &:hover {
        border: 2px solid #ffffff;
      }
    }
  }
`;

export const Input = styled.div`
  text-align: left;
  flex-direction: column;
  width: 96%;

  label {
    color: #ffffff;
    font-size: 20px;
  }

  input {
    background: #031319;
    height: 45px;
    border-radius: 6px;
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 1rem;
    border: transparent;
    font-size: 16px;
    color: #ffffff;
    outline: none;
    padding-left: 10px;

    &:focus {
      border: 2px solid #ffffff;
    }

    &::placeholder {
      color: #3b464b;
    }
  }
`;

export const Password = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: left;

  span {
    position: absolute;
    color: #ffffff;
    opacity: 0.8;
    top: 50%;
    right: 10px;
    transform: translateY(-10%);

    cursor: pointer;

    svg {
      font-size: 2.5rem;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;
