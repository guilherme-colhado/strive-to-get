import * as S from "./style";
import { FiX } from "react-icons/fi";

export const RegisterActivities = ({ onClose, onSubmit }) => {
  return (
    <S.Container>
      <S.Box>
        <form>
          <S.Header>
            <h1>Atividade</h1>
            <S.Close onclick={onClose}>
              <FiX />
            </S.Close>
          </S.Header>
          <S.Input>
            <label>Nome da atividade</label>
            <input placeholder="Digite aqui sua atividade" />
            <label>Realização</label>
            <input type="date" placeholder="Dia/Mês/Ano" max="2022-12-31" />
          </S.Input>
          <S.Button onclick={onSubmit}>
            <span>Cadastrar</span>
          </S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};
