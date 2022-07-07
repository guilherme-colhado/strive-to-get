import * as S from "./style";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-toastify";

export const RegisterActivities = ({ onClose, onSubmit, id }) => {
  const [title, setTitle] = useState("");
  const [realization_time, setRealization_Time] = useState("");

  const onSubmitFunction = (e) => {
    e.preventDefault();
    const data = {
      title,
      realization_time,
      group: id
    };

    if (!data.title) return toast.error("Por favor digite sua meta!");
    if (!data.realization_time) return toast.error("Por favor escolha a data de realização!");

    onSubmit(data, id);
    onClose();
  };

  return (
    <S.Container>
      <S.Box>
        <form onSubmit={onSubmitFunction}>
          <S.Header>
            <h1>Atividade</h1>
            <S.Close onClick={onClose}>
              <FiX />
            </S.Close>
          </S.Header>
          <S.Input>
            <label>Nome da atividade</label>
            <input
              placeholder="Digite aqui sua atividade"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Realização</label>
            <input
              type="datetime-local"
              placeholder="Dia/Mês/Ano"
              max="2022-12-31"
              onChange={(e) => setRealization_Time(e.target.value)}
            />
          </S.Input>
          <S.Button onClick={onSubmit}>
            <span>Cadastrar</span>
          </S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};
