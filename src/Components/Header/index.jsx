import { Button, HeaderStyle, LogoComponent, Mobile, Nav } from "./style";
import { TbUsers } from "react-icons/tb";
import Logo from "../../Imgs/Logo.gif";
import { FiLogIn } from "react-icons/fi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Clock from "../Clock";

export const Header = ({ login, logged }) => {
  const [navMobile, setNavMobile] = useState(false);
  const nav = useNavigate();
  return <HeaderStyle>
      <LogoComponent>
        <figure>
          <img src={Logo} alt="r4aqvW.gif" border="0" />
        </figure>
        <h1>Strive to Get</h1>
      </LogoComponent>
      <Clock/>
      <Mobile>
        <input
          onClick={() => setNavMobile(!navMobile)}
          type="checkbox"
          name="mobile"
          id="mobile"
        />
        <label htmlFor="mobile" />
        <span />
      </Mobile>
      <Nav mobile={navMobile}>
        <div>
          <Button link={true} onClick={() => nav("aboutUs")}>
            <div>
              <TbUsers />
              Sobre Nós
            </div>
          </Button>
        </div>
        <div>
          <Button>
            <div>
              {login ? <><HiOutlineUserAdd />Cadastrar</> : <><FiLogIn />Login</>}
            </div>
          </Button>
        </div>
      </Nav>
    </HeaderStyle>
  
}
