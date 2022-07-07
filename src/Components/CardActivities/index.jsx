import { CardContainer, Header, Infos } from "./style";
import { useContext, useState } from "react";
import { ActivitiesContext } from "../../Providers/activities";
import { Modal } from "../Modal";
import { ComfirmDelete } from "../ComfirmDelete";
import { ModalUpdate } from "../ModalUpdate";

export const CardActivities = ({ activity }) => {
  const { attActivity, deleteActivity } = useContext(ActivitiesContext);
  const [modalDeletar, setModalDeletar] = useState(false)
  const [mobile, setMobile] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false)
  return (
    <>
      <CardContainer>
        <Header onClick={() => setMobile(!mobile)} mobile={mobile}>
          <span>
            {activity.title.length >= 11
              ? `${activity.title.slice(0, 12).concat("...")}`
              : activity.title}
          </span>
        </Header>
        <Infos mobile={mobile}>
          <div>
            <p>
              Concluído:
            </p>
            <span>
              {activity.realization_time
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("-")}
            </span>
          </div>
          <div>
            <button onClick={() => setModalUpdate(true)}>Atualizar</button>
            <button onClick={() => setModalDeletar(true)}>Excluir</button>
          </div>
        </Infos>
      </CardContainer>
      <Modal open={modalDeletar}><ComfirmDelete onClose={()=> setModalDeletar(false)} onSubmit={()=> deleteActivity(activity)}>Tem certeza que deseja deletar esta atividade</ComfirmDelete></Modal>
      <Modal open={modalUpdate}><ModalUpdate onClose={()=> setModalUpdate(false)}>Tem certeza que deseja deletar esta atividade</ModalUpdate></Modal>
    </>
  );
};
