import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";
import { Div, DivCont, Border } from "./style";
import { SingleGroup } from "../SingleGroup";
import { AiOutlineDown } from "react-icons/ai";
import { BtnAdd } from "../BtnAdd";
import { Modal } from "../Modal";
import { RegisterGroup } from "../RegisterGroup";

export const AllGroups = () => {
  const { groups, PerPage, createGroup } = useContext(GroupsContext);
  const [page, setPage] = useState(3);

  const [modal, setModal] = useState(false);

  const test = () => {
    PerPage(page);
    setPage(page + 2);
  };

  return (
    <>
      <Div>
        <Border>
          <DivCont>
            <BtnAdd callback={() => setModal(true)} key={"Botao ADD"}>
              Criar novo Grupo
            </BtnAdd>
            {groups.map((element) => {
              return <SingleGroup props={element} key={element.id} />;
            })}
          </DivCont>
          <div onClick={() => test()} id="sentry">
            <AiOutlineDown />
          </div>
        </Border>
      </Div>
      <Modal open={modal}>
        <RegisterGroup onClose={() => setModal(false)} onSubmit={createGroup} />
      </Modal>
    </>
  );
};
