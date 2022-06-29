import { Header } from '../../Components/Header'
import { Login } from '../../Components/Login'
import { GroupsComponent } from '../../Components/Groups'
export const LoginComponent = () => {
  return <>
    <Header/>
    <GroupsComponent/>
    <main>
      <Login></Login>
    </main>
  </>
}
