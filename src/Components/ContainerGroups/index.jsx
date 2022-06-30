import { useContext, useEffect } from "react";
import { GroupsContext } from "../../Providers/groups";
import { Div, DivCont, ButtonR, ButtonL } from "./style";
import { SingleGroup } from "../SingleGroup";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";

export const AllGroups = () => {
  const { groups, PerPage } = useContext(GroupsContext);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        PerPage();
      }
    });

    intersectionObserver.observe(document.querySelector("#sentry"));

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <Div>
      <DivCont>
        {groups.map((element) => {
          return <SingleGroup props={element} key={element.id} />;
        })}
        <div id="sentry"></div>
      </DivCont>
    </Div>
  );
};
