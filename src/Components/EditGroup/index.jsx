import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GroupsContext } from "../../Providers/groups";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Container, Infos, EditName } from "./style";
import { useState } from "react";
import { ModalUpdate } from "../ModalUpdate";
import { Modal } from "../Modal";
import { Loading } from "../ContainerLoading";
import jwtDecode from "jwt-decode";

export const GroupName = ({ setModal }) => {
  const { editGroup, group } = useContext(GroupsContext);
  const [edit, setEdit] = useState(false);
  let user = jwtDecode(
    JSON.parse(localStorage.getItem("@StriveToGet: Token"))
  ).user_id;

  return (
    <Container>
      <Infos>
        <EditName>
          <h1>{group.name}</h1>{" "}
          {group.creator.id === user ? (
            <AiOutlineEdit onClick={() => setModal(true)} />
          ) : (
            ""
          )}
        </EditName>
        <h3>{group.category}</h3>
        <h2>{group.description}</h2>
      </Infos>
    </Container>
  );
};
