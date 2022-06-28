import * as S from "./style";

export const ComfirmDelete = ({ onClose, onAchieved, children }) => {
  return (
    <S.Container>
      <S.Box>
        <p>{children}</p>
        <S.BoxButton>
          <S.ButtonNot onclick={onClose}>
            <span>Ainda não</span>
          </S.ButtonNot>
          <S.ButtonYes onclick={onAchieved}>
            <span>Sim, deletar</span>
          </S.ButtonYes>
        </S.BoxButton>
      </S.Box>
    </S.Container>
  );
};
