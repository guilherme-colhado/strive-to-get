import * as S from "./style";
import { FiX } from "react-icons/fi";

export const RegisterHabit = ({ onClose, onSubmit }) => {
  return (
    <S.Container>
      <S.Box>
        <form onSubmit={onSubmit}>
          <S.Header>
            <h1>Cadastrar Hábito</h1>
            <S.Close onClick={onClose}>
              <FiX />
            </S.Close>
          </S.Header>
          <S.Input>
            <label>Hábito:</label>
            <input placeholder="Digite aqui seu hábito" />
          </S.Input>
          <S.Select>
            <label>Categoria:</label>
            <select>
              <option value="" disabled>
                Selecione a categoria
              </option>
              <option value="study">Estudo</option>
              <option value="health">Saúde</option>
              <option value="work">Trabalho</option>
            </select>

            <label>Dificuldade:</label>
            <select>
              <option value="" disabled>
                Selecione a dificuldade
              </option>
              <option value="easy">Fácil</option>
              <option value="normal">Normal</option>
              <option value="intermediary">Intermediário</option>
              <option value="hard">Difícil</option>
              <option value="very hard">Muito Difícil</option>
            </select>

            <label>Quantas vezes:</label>
            <select>
              <option value="" disabled>
                Selecione a duração
              </option>
              <option value="day">Um dia</option>
              <option value="week">Uma semana</option>
              <option value="month">Um mês</option>
              <option value="semester">Um semestre</option>
              <option value="year">Um ano </option>
            </select>

            <label>Frequência:</label>
            <select>
              <option value="" disabled>
                Selecione a frequência
              </option>
              <option value="daily">Diariamente</option>
              <option value="weekly">Semanalmente</option>
              <option value="monthly">Mensalmente</option>
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
