import { Routes, Route } from "react-router-dom";
import { AboutUsComponent } from "../Pages/AboutUs";
import { GroupPage } from "../Pages/GroupPage";
import { GroupsPage } from "../Pages/Groups";
import { Home } from "../Pages/Home";
import { LoginComponent } from "../Pages/Login";
import { Main } from "../Pages/Main";
import { SignUpComponent } from "../Pages/SignUp";
import { User } from "../Pages/User";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:id" element={<User />}></Route>
      <Route path="/main" element={<Main />}></Route>
      <Route path="/login" element={<LoginComponent />}></Route>
      <Route path="/signUp" element={<SignUpComponent />}></Route>
      <Route path="/aboutUs" element={<AboutUsComponent />}></Route>
      <Route path="/groups" element={<GroupsPage />}></Route>
      <Route path="/groups/:id" element={<GroupPage/>}></Route>
    </Routes>
  );
};
