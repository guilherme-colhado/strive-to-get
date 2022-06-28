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
            <h3>Barbara Souza </h3>
            <h2>info: </h2>
            <div>
              <h3>Redes sociais</h3>

              <span>
                <a href="https://github.com/ibarbarasouza">
                  <GitHubIcon fontSize="larger" />
                </a>
              </span>

              <span> </span>

              <span>
                <a href="">
                  <LinkedInIcon fontSize="larger" />
                </a>
              </span>
            </div>
          </InfoDev>
        </DevBoxLeft>

        <DevBoxRight>
          <InfoDev>
            <h3>Edson Freitas</h3>
            <h2>info:</h2>
            <div>
              <h3>Redes sociais</h3>

              <span>
                <a href="https://github.com/edsonvin">
                  <GitHubIcon fontSize="larger" />
                </a>
              </span>

              <span> </span>

              <span>
                <a href="">
                  <LinkedInIcon fontSize="larger" />
                </a>
              </span>
            </div>
          </InfoDev>
        </DevBoxRight>

        <DevBoxLeft>
          <InfoDev>
            <h3>Fernanda Constância</h3>
            <h2>info:</h2>
            <div>
              <h3>Redes sociais</h3>

              <span>
                <a href="https://github.com/fernandaconstancia">
                  <GitHubIcon fontSize="larger" />
                </a>
              </span>

              <span> </span>

              <span>
                <a href="">
                  <LinkedInIcon fontSize="larger" />
                </a>
              </span>
            </div>
          </InfoDev>
        </DevBoxLeft>

        <DevBoxRight>
          <InfoDev>
            <h3>Guilherme Colhado</h3>
            <div>
              <h2>info:</h2>

              <h3>Redes sociais</h3>

              <span>
                <a href="https://github.com/guilherme-colhado">
                  <GitHubIcon fontSize="larger" />
                </a>
              </span>

              <span> </span>

              <span>
                <a href="">
                  <LinkedInIcon fontSize="larger" />
                </a>
              </span>
            </div>
          </InfoDev>
        </DevBoxRight>

        <DevBoxLeft>
          <InfoDev>
            <h3>Lucas Galvão</h3>
            <h2>info:</h2>
            <div>
              <h3>Redes sociais</h3>

              <span>
                <a href="https://github.com/Galvs135">
                  <GitHubIcon fontSize="larger" />
                </a>
              </span>

              <span> </span>

              <span>
                <a href="">
                  <LinkedInIcon fontSize="larger" />
                </a>
              </span>
            </div>
          </InfoDev>
        </DevBoxLeft>

        <DevBoxRight>
          <InfoDev>
            <h3>Wallace Júnior</h3>
            <h2>info:</h2>
            <div>
              <h3>Redes sociais</h3>

              <span>
                <a href="">
                  <GitHubIcon fontSize="larger" />
                </a>
              </span>

              <span> </span>

              <span>
                <a href="">
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
