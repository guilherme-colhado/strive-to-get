// import { useState } from "react";
import * as S from "./style";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import { SingleGroup } from "../../Components/SingleGroup";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";

export const ModalGroups = ({ onClose }) => {
  const { buscaSubs, groupsInscribed } = useContext(GroupsContext);

  useEffect(() => {
    buscaSubs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <S.Box>
        <S.Header>
          <h2>Grupos</h2>
          <S.Close onClick={onClose}>
            <FiX />
          </S.Close>
        </S.Header>
        <S.Cards>
          {groupsInscribed.length > 0 &&
            groupsInscribed.map((element) => (
              <SingleGroup key={element.id} props={element} />
            ))}
        </S.Cards>
      </S.Box>
    </S.Container>
  );
};
