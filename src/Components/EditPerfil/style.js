import styled from "styled-components";

export const EditPerfilStyle = styled.form`
  transition: 0.8s;
  background-color: var(--HeaderDark);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 200px 10px 200px;
  > div {
    transition: 0.3s;
    display: flex;
    align-items: center;
    height: 5px;
    opacity: 0;

    > h2 {
      font-size: 2.13rem;
      padding-right: 10px;
      font-weight: 400;
      color: #ffffff;
      text-align: center;
    }
  }

  > button {
    transition: 0.3s;
    opacity: 0;
    height: 5px;
  }

  &:hover {
    background-color: var(--HeaderDark);
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 10px 200px 10px 200px;
    height: 40px;
    > div {
      transition: 0.3s;
      opacity: 1;
      display: flex;
      align-items: center;
      height: 20px;

      > h2 {
        font-size: 2.13rem;
        padding-right: 10px;
        font-weight: 400;
        color: #ffffff;
        text-align: center;
      }
    }
    > button {
      transition: 0.3s;
      opacity: 1;
      height: 20px;
    }
  }
`;

export const Input = styled.input`
  width: 120px;
  padding: 5px;
  height: 20px;
  border: none;
  border-radius: 5px;

  ::placeholder {
    color: var(--MainDark);
  }

  &:focus {
    outline: 0;
  }
`;

export const Button = styled.button`
  width: 60px;
  height: 20px;
  outline: none;
  border: 1px solid var(--MainDark);
  border-radius: 5px;
  background-color: #ffffff;
  color: var(--MainDark);
`;
