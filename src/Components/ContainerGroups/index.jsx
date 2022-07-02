import { useContext, useState } from "react";
import { GroupsContext } from "../../Providers/groups";
import { Div, DivCont } from "./style";
import { SingleGroup } from "../SingleGroup";
import { AiOutlineDown } from "react-icons/ai";

export const AllGroups = () => {
  const { groups, PerPage } = useContext(GroupsContext);
  const [page, setPage] = useState(3);

  const test = () => {
    PerPage(page);
    setPage(page + 2);
  };

  return (
    <Div>
      <DivCont>
        {groups.map((element) => {
          return <SingleGroup props={element} key={element.id} />;
        })}
        <div onClick={() => test()} id="sentry">
          <AiOutlineDown />
        </div>
      </DivCont>
    </Div>
  );
};
