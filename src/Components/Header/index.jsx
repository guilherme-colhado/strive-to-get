import { Button, HeaderStyle, LogoComponent, Mobile, Nav } from "./style";
import Logo from "../../Imgs/Logo.gif";
import { TbUsers } from "react-icons/tb";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { MdOutlineGroups, MdOutlinePersonOutline } from 'react-icons/md'
import { AiOutlineHome } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock } from "../Clock";
import { useContext } from "react";
import { UserContext } from "../../Providers/usersFunctions";

export const Header = ({ login, logged, person }) => {
  const [navMobile, setNavMobile] = useState(false);
  
  const { setToken, setUser } = useContext(UserContext)
  
  const nav = useNavigate();
  
  return <HeaderStyle>
      <LogoComponent onClick={()=>{
        if(person){
          nav('/')
        }else nav('/main')
      }}>
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
              <Button link onClick={(()=>nav(`/`))}>
                <div>
                  <AiOutlineHome/>Habitos
                </div>
              </Button>
            </div>
            <div>
              <Button link onClick={(()=>nav(`/${person.id}`))}>
                <div>
                  <MdOutlinePersonOutline/>{person.username}
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
          <Button onClick={() => {
              if(logged) localStorage.removeItem('@StriveToGet: Token')
              nav(logged ? '/login' : login ? '/signUp' : '/login')
              if(logged){
                setToken('')
                setUser('')
              }
            }}>
            <div>
              {logged ? <><FiLogOut/>Sair</> : login ? <><HiOutlineUserAdd />Cadastrar</> : <><FiLogIn />Login</>}
            </div>
          </Button>
        </div>
      </Nav>
    </HeaderStyle>
}
