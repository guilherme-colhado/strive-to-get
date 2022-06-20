import { Button, HeaderStyle, Mobile } from "./style"
import { TbUsers } from 'react-icons/tb'
import Logo from '../../Imgs/Logo.gif'
import { FiLogIn } from 'react-icons/fi'
import { HiOutlineUserAdd } from 'react-icons/hi'
import { useState } from "react"
export const Header = ({login, logged}) => {
    const [navMobile, setNavMobile] = useState(false);
    return <HeaderStyle>
        <div>
            <figure>
                <img src={Logo} alt="r4aqvW.gif" border="0" />
            </figure>
            <h1>Strive to Get</h1>
        </div>
        <Mobile onClick={()=>setNavMobile}>
            <input type="checkbox" name="mobile" id="mobile"/>
            <label htmlFor="mobile"/>
            <span/>
        </Mobile>
        <div>
            <Button link={true}><TbUsers/>Sobre Nós</Button>
            <Button>{login ? <><HiOutlineUserAdd/>Cadastrar</> : <><FiLogIn/>Login</>}</Button>
        </div>
    </HeaderStyle>
}