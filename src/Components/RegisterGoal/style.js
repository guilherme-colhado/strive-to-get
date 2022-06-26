import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #031319;
  padding: 86px 10px 10px;
`;

export const Box = styled.div`
  max-width: 400px;
  width: 100%;
  background: #3b464b;
  border-radius: 6px;

  form {
    text-align: center;
    padding: 2rem;
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;

  h1 {
    color: #ffffff;
    font-size: 5rem;
  }
`;

export const Close = styled.button`
  background: #3b464b;
  color: #ffffff;
  border: transparent;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 2px solid #ffffff;
  border-radius: 100%;
  margin-bottom: 25px;

  &:hover {
    opacity: 0.3;
  }
`;

export const Button = styled.button`
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
    padding: 0 10px;
    border: 2px solid #3b464b;

    &:focus {
      border: 2px solid #ffffff;
    }

    &::placeholder {
      color: #3b464b;
    }
  }
`;

export const Select = styled(Input)`
  select {
    background: #031319;
    height: 45px;
    border-radius: 6px;
    max-width: 100%;
    margin-bottom: 2rem;
    margin-top: 1rem;
    border: transparent;
    font-size: 16px;
    color: #3b464b;
    padding: 0 10px;
    border: 2px solid #3b464b;
    cursor: pointer;

    option {
      color: #ffffff;
    }
  }
`;
