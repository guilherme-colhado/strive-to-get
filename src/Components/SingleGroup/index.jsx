import { useState } from "react";
import { Header, Section, Container, Button } from "./style";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/groups";

export const SingleGroup = ({ props }) => {
  const [mobile, setMobile] = useState(false);
  let Inscribed = false;
  const { groupSubscription, exitGroup } = useContext(GroupsContext);

  return (
    <Container>
      <Header onClick={() => setMobile(!mobile)} inscribed={Inscribed}>
        {props.name}
      </Header>
      <Section mobile={mobile}>
        <div>
          <h2>Category:</h2>
          <p>{props.category}</p>
        </div>
        <div>
          <h3>Description:</h3>
          <p>{props.description}</p>
        </div>
      </Section>
      <Button
        mobile={mobile}
        inscribed={Inscribed}
        onClick={
          Inscribed
            ? () => {
                exitGroup();
              }
            : () => {
                groupSubscription();
              }
        }
      >
        {Inscribed ? <>Exit</> : <>Sign Up</>}
      </Button>
    </Container>
  );
};
