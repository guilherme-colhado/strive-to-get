import { CardStyle, HeaderCard, InfosCard } from "./style";

export const CardGoals = ({ goals }) => {
  return (
    <CardStyle>
      <HeaderCard>{goals.title}</HeaderCard>
      <InfosCard>
        <span>Dificuldade: {goals.difficulty} </span>
        <button>Arquivar</button>
      </InfosCard>
    </CardStyle>
  );
};
