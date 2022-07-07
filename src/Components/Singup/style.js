import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #031319;
  padding: 10px;
`;

export const Box = styled.div`
  background-color: #3b464b;
  max-width: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 6px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
    align-items: center;
  }

  h2 {
    color: white;
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    color: #ffffff;
    font-size: 20px;
  }

  input {
    max-width: 100%;
    background-color: #031319;
    border: 2px solid #3b464b;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 16px;
    padding: 0 10px;
    border-radius: 6px;
    color: #ffffff;
    height: 45px;

    &:focus {
      border: 2px solid #ffffff;
    }

    &::placeholder {
      color: #3b464b;
    }
  }
`;

export const Error = styled.span`
  color: #db2121;
  font-size: 13px;
`;

export const Password = styled(Input)`
  position: relative;
  flex-direction: column;
  justify-content: left;

  input {
    padding-right: 15%;
  }

  /* span {
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
  } */
`;

export const Yey = styled.span`
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
`;

export const Button = styled.button`
  background-color: #7b0000;
  height: 45px;
  width: 100%;
  color: #ffffff;
  font-size: 20px;
  border-radius: 6px;
  cursor: pointer;
  border: 2px solid #3b464b;

  &:hover {
    border: 2px solid #ffffff;
  }
`;
