import { useState } from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BtnAdd } from "../../Components/BtnAdd";
import { CardActivities } from "../../Components/CardActivities";
import { CardGoals } from "../../Components/CardGoals";
import { Loading } from "../../Components/ContainerLoading";
import { GroupName } from "../../Components/EditGroup";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Members } from "../../Components/Members";
import { Modal } from "../../Components/Modal";
import { ModalUpdate } from "../../Components/ModalUpdate";
import { GroupsContext } from "../../Providers/groups";
import { UserContext } from "../../Providers/usersFunctions";
import { Container, Principal } from "./style";
import { WhatToCreate } from "../../Components/WhatToCreate";
import { RegisterActivities } from "../../Components/RegisterActivities";
import { RegisterGoal } from "../../Components/RegisterGoal";
import { GoalsContext } from "../../Providers/Goals";
import { ActivitiesContext } from "../../Providers/activities";

export const GroupPage = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { group, listOneGroup } = useContext(GroupsContext);
  const { editGroup } = useContext(GroupsContext);
  const { createGoals } = useContext(GoalsContext);
  const { createActivity } = useContext(ActivitiesContext);
  const [modalCreate, setModalCreate] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalActivities, setModalActivities] = useState(false);
  const [modalGoal, setModalGoal] = useState(false);
  useEffect(() => {
    listOneGroup(id);
  }, []);
  console.log(group);
  return !group.creator ? (
    <Loading />
  ) : (
    <>
      <Container>
        <Header logged person={user}></Header>
        <main>
          <Principal>
            <GroupName modal={modal} setModal={setModal} />
            <div>
              <BtnAdd callback={() => setModalCreate(true)}>
                Adicione uma nova meta ou atividade
              </BtnAdd>
              <div>
                {group.activities?.map((activitie) => (
                  <CardActivities key={activitie.id} activity={activitie} />
                ))}
              </div>
              <div>
                {group.goals?.map((goal) => (
                  <CardGoals key={goal.id} goals={goal} />
                ))}
              </div>
            </div>
          </Principal>
          <Members members={group?.users_on_group} />
        </main>
        <Footer />
      </Container>
      <Modal open={modal}>
        <ModalUpdate
          onClose={() => setModal(false)}
          onSubmit={editGroup}
          children={"groups"}
          Id={group.id}
        />
      </Modal>
      <Modal open={modalCreate}>
        <WhatToCreate
          onClose={() => setModalCreate(false)}
          onActivities={() => setModalActivities(true)}
          onGoal={() => setModalGoal(true)}
        />
      </Modal>
      <Modal open={modalActivities}>
        <RegisterActivities
          onClose={() => setModalActivities(false)}
          onSubmit={createActivity}
          id={id}
        />
      </Modal>
      <Modal open={modalGoal}>
        <RegisterGoal
          onClose={() => setModalGoal(false)}
          onSubmit={createGoals}
          id={id}
        />
      </Modal>
    </>
  );
};
