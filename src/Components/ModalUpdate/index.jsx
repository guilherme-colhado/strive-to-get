import * as S from "./style";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const ModalUpdate = ({ onClose, onSubmit, children, Id }) => {
  const group = useParams();
  const [name, setName] = useState("");
  let data = {};
  const onSubmitFunction = (e) => {
    e.preventDefault();

    if (children === "Atividade") {
      data = {
        title: name,
        id: Id,
      };
    } else {
      data = {
        name: name,
        id: Id,
      };
    }
    console.log(group);
    onSubmit(data, group.id);
    onClose();
  };

  return (
    <S.Container>
      <S.Box>
        <form onSubmit={onSubmitFunction}>
          <S.Header>
            <h1>{children}</h1>
            <S.Close onClick={onClose}>
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
          <S.Button onClick={onSubmitFunction}>
            <span>Salvar atualizações</span>
          </S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};
