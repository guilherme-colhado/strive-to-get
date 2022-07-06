import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { AiOutlineEdit } from "react-icons/ai";
import { Container, Infos, EditName } from "./style";

export const GroupName = () => {
  const groupId = useParams();
  const { editGroup, group } = useContext(GroupsContext);

  console.log(group);

  return (
    <Container>
      <Infos>
        <EditName>
          <h1>{group.name}</h1> <AiOutlineEdit onClick={() => ""} />
        </EditName>
        <h3>{group.category}</h3>
        <h2>{group.description}</h2>
      </Infos>
    </Container>
  );
};
