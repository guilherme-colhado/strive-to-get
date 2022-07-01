import * as S from "./style";

export const ComfirmDelete = ({ onClose, onSubmit, children }) => {
  return (
    <S.Container>
      <S.Box>
        <p>{children}</p>
        <S.BoxButton>
          <S.ButtonNot onclick={onClose}>
            <span>Ainda não</span>
          </S.ButtonNot>
          <S.ButtonYes onclick={onSubmit}>
            <span>Sim, deletar</span>
          </S.ButtonYes>
        </S.BoxButton>
      </S.Box>
    </S.Container>
  );
};
