import * as S from "./style";
import { FiX } from "react-icons/fi";
import { useState } from "react";

export const ModalUpdate = ({ onClose, onSubmit, children }) => {
  const [name, setName] = useState("");

  const onSubmitFunction = (e) => {
    e.preventDefault();
    const data = {
      name,
    };

    onSubmit(data);
    onClose();
  };

  return (
    <S.Container>
      <S.Box>
        <form onSubmit={onSubmitFunction}>
          <S.Header>
            <h1>{children}</h1>
            <S.Close onclick={onClose}>
              <FiX />
            </S.Close>
          </S.Header>
          <S.Input>
            <label>Nome</label>
            <input
              placeholder="Digite aqui o nome atualizado"
              onChange={(e) => setName(e.target.value)}
            />
          </S.Input>
          <S.Button onClick={onSubmit}>
            <span>Salvar atualizações</span>
          </S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};
