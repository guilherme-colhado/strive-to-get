import { useState } from "react";
import {
  Header,
  Section,
  Container,
  Button,
  Buttons,
  ViewGroup,
} from "./style";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";
import jwt_decode from "jwt-decode";
import { CgEnter } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export const SingleGroup = ({ props }) => {
  const nav = useNavigate();
  const [mobile, setMobile] = useState(false);
  let { user_id } = jwt_decode(
    JSON.parse(localStorage.getItem("@StriveToGet: Token" || ""))
  );
  const [Inscribed, setIncribed] = useState(
    props.users_on_group.some((element) => element.id === user_id)
  );
  const { groupSubscription, exitGroup } = useContext(GroupsContext);

  return (
    <Container>
      <Header
        tabIndex="-1"
        onFocus={() => setMobile(true)}
        onBlur={() => setMobile(false)}
        inscribed={Inscribed}
      >
        {props.name.length > 15 ? `${props.name.slice(0, 15)}...` : props.name}
      </Header>
      <Section mobile={mobile}>
        <div>
          <h2>Categoria:</h2>
          <p>
            {props.category.length > 35
              ? `${props.category.slice(0, 35)}...`
              : props.category}
          </p>
        </div>
        <div>
          <h3>Descrição:</h3>
          <p>
            {props.description.length > 50
              ? `${props.description.slice(0, 50)}...`
              : props.description}
          </p>
        </div>
      </Section>
      <Buttons>
        <Button
          mobile={mobile}
          inscribed={Inscribed}
          onClick={
            Inscribed
              ? () => {
                  exitGroup(props);
                  setIncribed(false);
                }
              : () => {
                  groupSubscription(props);
                  setIncribed(true);
                }
          }
        >
          {Inscribed ? <>Sair</> : <>Inscrever-se</>}
        </Button>
        {Inscribed ? (
          <ViewGroup mobile={mobile} onClick={() => nav(`/groups/${props.id}`)}>
            <CgEnter />
          </ViewGroup>
        ) : (
          ""
        )}
      </Buttons>
    </Container>
  );
};
