import * as S from "./style";
import { FiX } from "react-icons/fi";

export const RegisterGoal = ({ onClose }) => {
  return (
    <S.Container>
      <S.Box>
        <form>
          <S.Header>
            <h1>Cadastrar Metas</h1>
            <S.Close onclick={onClose}>
              <FiX />
            </S.Close>
          </S.Header>
          <S.Input>
            <label>Meta:</label>
            <input placeholder="Digite aqui sua meta" />
          </S.Input>
          <S.Select>
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
          </S.Select>
          <S.Button>
            <span>Cadastrar</span>
          </S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};
