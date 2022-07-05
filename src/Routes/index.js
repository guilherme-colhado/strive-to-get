import { Routes, Route } from "react-router-dom";
import { CardGoals } from "../Components/CardGoals";
import { Header } from "../Components/Header";
import { Groups } from "../Pages/Groups";
import { Home } from "../Pages/Home";
import { LoginComponent } from "../Pages/Login";
import { Main } from "../Pages/Main";
import AboutUs from "../Components/AboutUs";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:id"></Route>
      <Route path="/main" element={<Main />}></Route>
      <Route path="/login" element={<LoginComponent />}></Route>
      <Route path="/signUp"></Route>
      <Route path="/aboutUs" element={<AboutUs />}></Route>
      <Route path="/groups" element={<Groups />}></Route>
      <Route path="/groups/:id"></Route>
    </Routes>
  );
};
