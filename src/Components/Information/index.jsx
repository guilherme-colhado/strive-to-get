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
            Start <span></span> your habits
          </h2>
          <div>
            <p>
              Simply and effective, take control off your life with{" "}
              <strong>Strive To Get</strong>.
            </p>
            <p>Join us, and we make it more ease for you.</p>
          </div>
          <button onClick={() => destiny("/")}>Join us</button>
        </section>
      </DivInfos>
      <Image>
        <img src={Img} />
      </Image>
    </DivContainer>
  );
};
