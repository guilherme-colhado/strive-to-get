import { DivInfos, Image, DivContainer } from "./style";
import Logo from "../../Imgs/Logo.gif";
import Img from "../../Imgs/picwish.png";
import { useNavigate } from "react-router-dom";

export const Info = () => {
  const destiny = useNavigate();

  return (
    <DivContainer>
      <DivInfos>
        <section>
          <h2>
            Comece <span></span> seus hábitos.
          </h2>
          <div>
            <p>
              Simples e efetivo, Tenha o controle da sua vida com{" "}
              <strong>Strive To Get</strong>.
            </p>
            <p>
              Especializados em ajudar a pessoas a atingir seus objetivos, venha
              fazer parte do nosso time.
            </p>
          </div>
          <button onClick={() => destiny("/signUp")}>Junte-se agora</button>
        </section>
      </DivInfos>
      <Image>
        <img src={Img} />
      </Image>
    </DivContainer>
  );
};
