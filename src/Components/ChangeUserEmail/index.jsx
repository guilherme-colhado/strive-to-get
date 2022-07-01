import * as S from "./style";
import { FiX } from "react-icons/fi";

export const ChangeUserEmail = ({ onClose, onSubmit }) => {
  return (
    <S.Container>
      <S.Box>
        <form>
          <S.Header>
            <h1>Alterar Cadastro</h1>
            <S.Close onClick={onClose}>
              <FiX />
            </S.Close>
          </S.Header>
          <S.Input>
            <label>Alterar Nome de usuário</label>
            <input placeholder="Digite aqui seu novo nome de usuário" />
            <label>Alterar Email</label>
            <input placeholder="Digite aqui seu novo email" />
          </S.Input>
          <S.Button onClick={onSubmit}>
            <span>Salvar alterações</span>
          </S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};
