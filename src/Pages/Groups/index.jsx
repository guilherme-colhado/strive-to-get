import { AllGroups } from "../../Components/ContainerGroups";
import { GroupName } from "../../Components/editGroup";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Container } from "./style";

export const GroupsPage = () => {
  return (
    <Container>
      <Header login />
      <main>
        <AllGroups />
      </main>
      <Footer />
    </Container>
  );
};
