import * as S from "./style";
import { FiX } from "react-icons/fi";

export const WhatToCreate = ({ onGoal, onActivities, onClose }) => {
  return (
    <S.Container>
      <S.Box>
        <S.Header>
          <p>O que você gostaria de criar?</p>
          <S.Close onClick={onClose}>
            <FiX />
          </S.Close>
        </S.Header>
        <S.BoxButton>
          <S.ButtonGoal onClick={onGoal}>
            <span>Meta</span>
          </S.ButtonGoal>
          <S.ButtonActivities onClick={onActivities}>
            <span>Atividade</span>
          </S.ButtonActivities>
        </S.BoxButton>
      </S.Box>
    </S.Container>
  );
};
