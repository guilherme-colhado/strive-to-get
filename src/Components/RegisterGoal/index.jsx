import * as S from "./style";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-toastify";

export const RegisterGoal = ({ onClose, onSubmit }) => {
  const [goal, setGoal] = useState("");
  const [difficulty, setDifficulty] = useState("Fácil");

  const onSubmitFunction = (e) => {
    e.preventDefault();
    const data = {
      goal,
      difficulty,
    };

    if (!data.goal) return toast.error("Por favor digite sua meta!");

    onSubmit(data);
    onClose();
  };

  return (
    <S.Container>
      <S.Box>
        <form onSubmit={onSubmitFunction}>
          <S.Header>
            <h1>Cadastrar Metas</h1>
            <S.Close onClick={onClose}>
              <FiX />
            </S.Close>
          </S.Header>
          <S.Input>
            <label>Meta:</label>
            <input
              placeholder="Digite aqui sua meta"
              onChange={(e) => setGoal(e.target.value)}
            />
          </S.Input>
          <S.Select>
            <label>Dificuldade:</label>
            <select onChange={(e) => setDifficulty(e.target.value)}>
              <option value="" disabled>
                Selecione a dificuldade
              </option>
              <option value="Fácil">Fácil</option>
              <option value="Normal">Normal</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Difícil">Difícil</option>
              <option value="Muito Difícil">Muito Difícil</option>
            </select>
          </S.Select>
          <S.Button onClick={onSubmit}>
            <span>Cadastrar</span>
          </S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};
