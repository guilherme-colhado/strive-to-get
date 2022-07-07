import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GoalsContext } from "../../Providers/Goals";
import { CardStyle, HeaderCard, InfosCard } from "./style";
import { useState } from 'react'
import { Modal }

export const CardGoals = ({ goals }) => {
  const { updateGoals } = useContext(GoalsContext);
  const {id} = useParams() 
  const [ modal, setModal ] = useState()
  return (
    !goals.achieved && <>
      <CardStyle>
        <HeaderCard>{goals.title}</HeaderCard>
        <InfosCard>
          <span>Dificuldade: {goals.difficulty} </span>
          <button onClick={()=>updateGoals(goals, id)}>Arquivar</button>
        </InfosCard>
      </CardStyle>
      <Modal></Modal>
    </> 
  );
};
