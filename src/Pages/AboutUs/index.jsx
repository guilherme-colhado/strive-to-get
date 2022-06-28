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
            <h4>
              info: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Culpa amet unde quam, vitae quos fuga natus, qui ipsa assumenda
              rem consectetur minima. Molestiae libero voluptatibus beatae non
              amet aut neque?{" "}
            </h4>
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
            <h4>
              info: Estudante e Dev front-end desde 2021, apaixonado por novas
              tecnologias. Atualmente cursando segundo semestre de segurança da
              informação e M2 na Kenzie Academy.
            </h4>
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
            <h4>
              info: Wallace é desenvolvedor Front-End e Ama tecnologia.
              Atualmente trabalha com redes e Telecomunicacao. Tem formacao em
              Sistemas de Informacao desde o ano de 2020 e busca trabalhar como
              desenvolvedor e crescer na área.
            </h4>
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
