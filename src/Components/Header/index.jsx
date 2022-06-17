import { Button, HeaderStyle } from "./style"
import Logo from '../../'
import { TbUsers } from 'react-icons/tb'
import { FiLogIn } from 'react-icons/fi'
import { HiOutlineUserAdd } from 'react-icons/hi'
export const Header = ({login, logged}) => {
    return <HeaderStyle>
        <div>
            <figure>
                <img src="https://i.im.ge/2022/06/17/r4aqvW.gif" alt="r4aqvW.gif" border="0" />
            </figure>
            <h1>Strive to Get</h1>
        </div>
        <div>
            <Button link={true}><TbUsers/>Sobre Nós</Button>
            <Button>{login ? <><HiOutlineUserAdd/>Cadastrar</> : <><FiLogIn/>Login</>}</Button>
        </div>
    </HeaderStyle>
}