import * as S from "./style";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-toastify";

export const RegisterHabit = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Estudo");
  const [difficulty, setDifficulty] = useState("Fácil");
  const [frequency, setFrequency] = useState("Diariamente");
  const achieved = false;
  const [how_much_achieved, setHow_much_achieved] = useState("1");
  const onSubmitFunction = (e) => {
    e.preventDefault();
    const data = {
      title,
      category,
      difficulty,
      frequency,
      achieved,
      how_much_achieved,
    };
    if (!data.title) return toast.error("Por favor digite algo no titulo!");
    onSubmit(data);
    onClose();
  };
  return (
    <S.Container>
      <S.Box>
        <form onSubmit={onSubmitFunction}>
          <S.Header>
            <h1>Cadastrar Hábito</h1>
            <S.Close onClick={onClose}>
              <FiX />
            </S.Close>
          </S.Header>
          <S.Input>
            <label>Hábito:</label>
            <input
              placeholder="Digite aqui seu hábito"
              onChange={(e) => setTitle(e.target.value)}
            />
          </S.Input>
          <S.Select>
            <label>Categoria:</label>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="" disabled>
                Selecione a categoria
              </option>
              <option value="Estudo">Estudo</option>
              <option value="Saúde">Saúde</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Entretenimento">Entretenimento</option>
            </select>

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
            <label>Quantas vezes:</label>
            <select onChange={(e) => setHow_much_achieved(e.target.value)}>
              <option value="" disabled>
                Selecione a duração
              </option>
              <option value={1}>Um dia</option>
              <option value={7}>Uma semana</option>
              <option value={15}>Uma quinzena</option>
              <option value={30}>Um mês</option>
              <option value={90}>Um trimestre</option>
              <option value={180}>Um semestre</option>
              <option value={365}>Um ano </option>
            </select>

            <label>Frequência:</label>
            <select onChange={(e) => setFrequency(e.target.value)}>
              <option value="" disabled>
                Selecione a frequência
              </option>
              <option value="Diariamente">Diariamente</option>
              <option value="Semanalmente">Semanalmente</option>
              <option value="Mensalmente">Mensalmente</option>
            </select>
          </S.Select>
          <S.Button type="submit">
            <span>Cadastrar</span>
          </S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};
