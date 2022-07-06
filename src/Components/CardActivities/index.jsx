import { CardStyle, HeaderCard, InfosCard } from "./style";
import { useContext, useState } from "react";
import { ActivitiesContext } from "../../Providers/activities";

export const CardActivities = ({ activity }) => {
  const { attActivity, deleteActivity } = useContext(ActivitiesContext);
  return (
    <CardStyle>
      <HeaderCard> <span>{activity.title}</span></HeaderCard>
      <InfosCard>
        <div>
          <p>Concluído: <span>{activity.realization_time}</span>  </p>
          <p>Grupo: <span>{activity.group}</span> </p>

          <button onClick={() => attActivity}>Atualizar</button>
          <button onClick={() => deleteActivity}>Excluir</button>
        </div>
      </InfosCard>
    </CardStyle>
  );
};
