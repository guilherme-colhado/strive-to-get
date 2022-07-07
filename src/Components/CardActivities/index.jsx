import { CardContainer, Header, Infos } from "./style";
import { useContext, useState } from "react";
import { ActivitiesContext } from "../../Providers/activities";

export const CardActivities = ({ activity }) => {
  const { attActivity, deleteActivity } = useContext(ActivitiesContext);
  console.log(activity);

  const [mobile, setMobile] = useState(false);

  return (
    <CardContainer>
      <Header onClick={() => setMobile(!mobile)} mobile={mobile}>
        {" "}
        <span>
          {activity.title.length >= 11
            ? `${activity.title.slice(0, 12).concat("...")}`
            : activity.title}
        </span>
      </Header>
      <Infos mobile={mobile}>
        <div>
          <p>
            Concluído:{" "}
            <span>
              {activity.realization_time
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("-")}
            </span>{" "}
          </p>
          <p>
            Grupo: <span>{activity.group}</span>{" "}
          </p>

          <button onClick={() => attActivity}>Atualizar</button>
          <button onClick={() => deleteActivity}>Excluir</button>
        </div>
      </Infos>
    </CardContainer>
  );
};
