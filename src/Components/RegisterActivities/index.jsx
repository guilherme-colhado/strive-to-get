import * as S from "./style";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-toastify";

export const RegisterActivities = ({ onClose, onSubmit }) => {
  const [activities, setActivities] = useState("");
  const [date, setDate] = useState("");

  const onSubmitFunction = (e) => {
    e.preventDefault();
    const data = {
      activities,
      date,
    };

    if (!data.activities) return toast.error("Por favor digite sua meta!");

    onSubmit(data);
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
              onChange={(e) => setActivities(e.target.value)}
            />
            <label>Realização</label>
            <input
              type="date"
              placeholder="Dia/Mês/Ano"
              max="2022-12-31"
              onChange={(e) => setDate(e.target.value)}
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
