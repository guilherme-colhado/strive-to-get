import * as S from "./style";
import { FiX } from "react-icons/fi";

export const ModalUpdate = ({ onClose, onSubmit, children }) => {
  return (
    <S.Container>
      <S.Box>
        <form>
          <S.Header>
            <h1>{children}</h1>
            <S.Close onclick={onClose}>
              <FiX />
            </S.Close>
          </S.Header>
          <S.Input>
            <label>Nome</label>
            <input placeholder="Digite aqui o nome atualizado" />
          </S.Input>
          <S.Button onClick={onSubmit}>
            <span>Salvar atualizações</span>
          </S.Button>
        </form>
      </S.Box>
    </S.Container>
  );
};
