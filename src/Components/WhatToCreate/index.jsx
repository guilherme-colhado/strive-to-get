import * as S from "./style";

export const WhatToCreate = ({ onGoal, onActivities }) => {
  return (
    <S.Container>
      <S.Box>
        <p>O que você gostaria de criar?</p>
        <S.BoxButton>
          <S.ButtonGoal onclick={onGoal}>
            <span>Meta</span>
          </S.ButtonGoal>
          <S.ButtonActivities onclick={onActivities}>
            <span>Atividade</span>
          </S.ButtonActivities>
        </S.BoxButton>
      </S.Box>
    </S.Container>
  );
};
