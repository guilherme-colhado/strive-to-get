import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Container, Infos, EditName } from "./style";
import { useState } from "react";
import { ModalUpdate } from "../ModalUpdate";
import { Modal } from "../Modal";
import { Loading } from "../ContainerLoading";

export const GroupName = ({setModal}) => {
  const { editGroup, group } = useContext(GroupsContext);

  return (
    <Container>
      <Infos>
        <EditName>
          <h1>{group.name}</h1> <AiOutlineEdit onClick={() => setModal(true)} />
        </EditName>
        <h3>{group.category}</h3>
        <h2>{group.description}</h2>
      </Infos>
    </Container>
  );
};
