import * as S from "./style";

export const ComfirmAchieved = ({ onClose, onSubmit }) => {
  return (
    <S.Container>
      <S.Box>
        <p>Você tem certeza que quer arquivar este hábito?</p>
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
