// import { Header } from "../Header";
import { Container, DevBoxLeft, DevBoxRight, InfoDev } from "./style";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const AboutUs = () => {
  return (
    <div>
      {/* <Header /> */}
      <Container>
        <DevBoxLeft>
          <InfoDev>
            <h2>Barbara Souza - QA </h2>
            <h4>info: </h4>
            <div>
              <h3>Redes sociais</h3>

              <span>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/ibarbarasouza"
                >
                  <GitHubIcon fontSize="larger" />
                </a>
              </span>

              <span> </span>

              <span>
                <a target={"_blank"} rel="noreferrer" href="">
                  <LinkedInIcon fontSize="larger" />
                </a>
              </span>
            </div>
          </InfoDev>
        </DevBoxLeft>

        <DevBoxRight>
          <InfoDev>
            <h2>Edson Freitas - QA</h2>
            <h4>info:</h4>
            <div>
              <h3>Redes sociais</h3>

              <span>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/edsonvin"
                >
                  <GitHubIcon fontSize="larger" />
                </a>
              </span>

              <span> </span>

              <span>
                <a target={"_blank"} rel="noreferrer" href="">
                  <LinkedInIcon fontSize="larger" />
                </a>
              </span>
            </div>
          </InfoDev>
        </DevBoxRight>

        <DevBoxLeft>
          <InfoDev>
            <h2>Fernanda Constância - SM</h2>
            <h4>info:</h4>
            <div>
              <h3>Redes sociais</h3>

              <span>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/fernandaconstancia"
                >
                  <GitHubIcon fontSize="larger" />
                </a>
              </span>

              <span> </span>

              <span>
                <a target={"_blank"} rel="noreferrer" href="">
                  <LinkedInIcon fontSize="larger" />
                </a>
              </span>
            </div>
          </InfoDev>
        </DevBoxLeft>

        <DevBoxRight>
          <InfoDev>
            <h2>Guilherme Colhado - TL</h2>
            <div>
              <h4>info:</h4>

              <h3>Redes sociais</h3>

              <span>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/guilherme-colhado"
                >
                  <GitHubIcon fontSize="larger" />
                </a>
              </span>

              <span> </span>

              <span>
                <a target={"_blank"} rel="noreferrer" href="">
                  <LinkedInIcon fontSize="larger" />
                </a>
              </span>
            </div>
          </InfoDev>
        </DevBoxRight>

        <DevBoxLeft>
          <InfoDev>
            <h2>Lucas Galvão - PO</h2>
            <h4>info:</h4>
            <div>
              <h3>Redes sociais</h3>

              <span>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/Galvs135"
                >
                  <GitHubIcon fontSize="larger" />
                </a>
              </span>

              <span> </span>

              <span>
                <a target={"_blank"} rel="noreferrer" href="">
                  <LinkedInIcon fontSize="larger" />
                </a>
              </span>
            </div>
          </InfoDev>
        </DevBoxLeft>

        <DevBoxRight>
          <InfoDev>
            <h2>Wallace Júnior - QA</h2>
            <h4>info:</h4>
            <div>
              <h3>Redes sociais</h3>

              <span>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/wallacejuniorwv"
                >
                  <GitHubIcon fontSize="larger" />
                </a>
              </span>

              <span> </span>

              <span>
                <a target={"_blank"} rel="noreferrer" href="">
                  <LinkedInIcon fontSize="larger" />
                </a>
              </span>
            </div>
          </InfoDev>
        </DevBoxRight>
      </Container>
    </div>
  );
};

export default AboutUs;
