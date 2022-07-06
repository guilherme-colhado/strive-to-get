import * as S from "./style";
import { FiX } from "react-icons/fi";
import { useState } from "react";

export const ChangeUserEmail = ({ onClose, onSubmit }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitFunction = (e) => {
    e.preventDefault();
    const data = {
      userName,
      email,
    };

    onSubmit(data);
    onClose();
  };

  return (
    <S.Container>
      <S.Box>
        <form onSubmit={onSubmitFunction}>
          <S.Header>
            <h1>Alterar Cadastro</h1>
            <S.Close onClick={onClose}>
              <FiX />
            </S.Close>
          </S.Header>
          <S.Input>
            <label>Alterar Nome de usuário</label>
            <input
              placeholder="Digite aqui seu novo nome de usuário"
              onChange={(e) => setUserName(e.target.value)}
            />
            <label>Alterar Email</label>
            <input
              placeholder="Digite aqui seu novo email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.Input>
          <S.Button onClick={onSubmit}>
            <span>Salvar alterações</span>
          </S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};
