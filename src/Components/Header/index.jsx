import { Button, HeaderStyle, LogoComponent, Mobile, Nav } from "./style";
import { TbUsers } from "react-icons/tb";
import Logo from "../../Imgs/Logo.gif";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { MdOutlineGroups, MdOutlinePersonOutline } from 'react-icons/md'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Clock } from "../Clock";

export const Header = ({ login, logged, person }) => {
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
        {
          logged && <>
            <div>
              <Button link onClick={nav(`/${person.id}`)}>
                <div>
                  <MdOutlinePersonOutline/>{person.nome}
                </div>
              </Button>
            </div>
            <div>
              <Button link onClick={()=>nav('/groups')}>
                <div>
                  <MdOutlineGroups/>Grupos
                </div>
              </Button>
            </div>
          </>
        }
        <div>
          <Button link onClick={() => nav("/aboutUs")}>
            <div>
              <TbUsers />
              Sobre Nós
            </div>
          </Button>
        </div>
        <div>
          <Button onClick={() => nav(logged ? '/main' : login ? '/signUp' : '/login')}>
            <div>
              {logged ? <><FiLogOut/>Sair</> : login ? <><HiOutlineUserAdd />Cadastrar</> : <><FiLogIn />Login</>}
            </div>
          </Button>
        </div>
      </Nav>
    </HeaderStyle>
}
