import { Button, HeaderStyle, Mobile } from "./style"
import { TbUsers } from 'react-icons/tb'
import Logo from '../../Imgs/Logo.gif'
import { FiLogIn } from 'react-icons/fi'
import { HiOutlineUserAdd } from 'react-icons/hi'
import { useState } from "react"
export const Header = ({login, logged}) => {
    const [navMobile, setNavMobile] = useState(false);
    return <HeaderStyle mobile={navMobile}>
        <div>
            <figure>
                <img src={Logo} alt="r4aqvW.gif" border="0" />
            </figure>
            <h1>Strive to Get</h1>
        </div>
        <Mobile>
            <input onClick={()=>setNavMobile(!navMobile)} type="checkbox" name="mobile" id="mobile"/>
            <label htmlFor="mobile"/>
            <span/>
        </Mobile>
        <div>
            <Button link={true}>
                <div>
                    <TbUsers/>Sobre Nós
                </div>
            </Button>
            <Button>
                <div>
                    {login ? <><HiOutlineUserAdd/>Cadastrar</> : <><FiLogIn/>Login</>}
                </div>
            </Button>
        </div>
    </HeaderStyle>
}