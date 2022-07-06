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
  const { groups, PerPage, createGroup } = useContext(GroupsContext);
  const [active, setActive] = useState(false);
  const [page, setPage] = useState(3);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  const test = () => {
    PerPage(page);
    setPage(page + 2);
  };

  const [render, setRender] = useState([]);

  const newRender = () => {
    setRender(groups);
  };

  const searchRender = () => {
    setRender(
      render.filter((render) =>
        render.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const normalRender = (x) => {
    if (x === "") {
      newRender();
    } else {
      setSearch(x);
    }
  };

  useEffect(() => {
    setRender([]);
    newRender();
  }, [groups.length]);

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
            onChange={(e) => normalRender(e.target.value)}
          />
          <ButtonSearch onClick={() => searchRender()}>
            <BsSearch />
          </ButtonSearch>
        </SearchComponent>
        <Border>
          <DivCont>
            <BtnAdd callback={() => setModal(true)} key={"Botao ADD"}>
              Criar novo Grupo
            </BtnAdd>
            {render.map((element) => {
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
