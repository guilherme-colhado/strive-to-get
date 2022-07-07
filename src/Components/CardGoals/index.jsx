import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GoalsContext } from "../../Providers/Goals";
import { CardStyle, HeaderCard, InfosCard } from "./style";
import { useState } from "react";
import { Modal } from "../Modal";
import { ComfirmAchieved } from "../ComfirmAchieved";

export const CardGoals = ({ goals }) => {
  const { updateGoals } = useContext(GoalsContext);
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  return (
    !goals.achieved && (
      <>
        <CardStyle>
          <HeaderCard>
            {goals.title.length >= 9
              ? `${goals.title.slice(0, 9).concat("...")}`
              : goals.title}
          </HeaderCard>
          <InfosCard>
            <span>Dificuldade: {goals.difficulty} </span>
            <button onClick={() => setModal(true)}>Arquivar</button>
          </InfosCard>
        </CardStyle>
        <Modal open={modal}>
          <ComfirmAchieved
            onClose={() => setModal(false)}
            onSubmit={() => {
              updateGoals(goals, id);
            }}
          >
            Você tem certeza que quer arquivar esta atividade?
          </ComfirmAchieved>
        </Modal>
      </>
    )
  );
};
