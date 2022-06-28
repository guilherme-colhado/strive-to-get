import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #031319;
  padding: 86px 10px 10px;

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
  max-width: 400px;
  width: 100%;
  background-color: #3b464b;
  border-radius: 6px;

  form {
    text-align: center;
    padding: 2rem;
    width: 100%;

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
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    color: #ffffff;
    font-size: 20px;
  }

  input {
    background: #031319;
    height: 45px;
    border-radius: 6px;
    max-width: 100%;
    margin-bottom: 2rem;
    margin-top: 1rem;
    border: transparent;
    font-size: 16px;
    color: #ffffff;
    outline: none;
    padding-left: 10px;
    padding-right: 10px;

    border: 2px solid #3b464b;

    &:focus {
      border: 2px solid #ffffff;
    }

    &::placeholder {
      color: #3b464b;
    }
  }
`;

export const Password = styled(Input)`
  position: relative;
  flex-direction: column;
  justify-content: left;

  input {
    padding-right: 15%;
  }

  span {
    position: absolute;
    color: #ffffff;
    opacity: 0.8;
    top: 50%;
    right: 15px;
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
