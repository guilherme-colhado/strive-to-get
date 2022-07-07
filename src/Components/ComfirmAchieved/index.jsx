import * as S from "./style";

export const ComfirmAchieved = ({ onClose, onSubmit, children }) => {
  return (
    <S.Container>
      <S.Box>
        <p>{children}</p>
        <S.BoxButton>
          <S.ButtonNot onClick={onClose}>
            <span>Ainda não</span>
          </S.ButtonNot>
          <S.ButtonYes onClick={onSubmit}>
            <span>Arquivar</span>
          </S.ButtonYes>
        </S.BoxButton>
      </S.Box>
    </S.Container>
  );
};
