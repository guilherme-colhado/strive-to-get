import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../Providers/groups";
import {
  Div,
  DivCont,
  Border,
  SearchComponent,
  InputSearch,
  ButtonSearch,
} from "./style";
import { SingleGroup } from "../SingleGroup";
import { AiOutlineDown } from "react-icons/ai";
import { BtnAdd } from "../BtnAdd";
import { Modal } from "../Modal";
import { RegisterGroup } from "../RegisterGroup";
import { BsSearch } from "react-icons/bs";

export const AllGroups = () => {
  const { groups, PerPage, createGroup, searchGroups } =
    useContext(GroupsContext);
  const [active, setActive] = useState(false);
  const [page, setPage] = useState(3);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  const more = () => {
    PerPage(page);
    setPage(page + 2);
  };

  const searchRender = (search) => {
    if (search === "") {
      searchGroups(search);
      setTimeout(() => {
        more();
      }, 200);
    } else {
      searchGroups(search);
    }
  };

  return (
    <>
      <Div>
        <SearchComponent
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        >
          <InputSearch
            open={active}
            type="text"
            onChange={(e) => searchRender(e.target.value)}
          />
          <ButtonSearch>
            <BsSearch />
          </ButtonSearch>
        </SearchComponent>
        <Border>
          <DivCont>
            <BtnAdd callback={() => setModal(true)} key={"Botao ADD"}>
              Criar novo Grupo
            </BtnAdd>
            {groups.map((element) => {
              return <SingleGroup props={element} key={element.id} />;
            })}
          </DivCont>
          <div onClick={() => more()} id="sentry">
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
