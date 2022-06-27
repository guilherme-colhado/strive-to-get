import { Routes, Route } from "react-router-dom";
import { LoginComponent } from "../Pages/Login";
import { Main } from "../Pages/Main";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/"></Route>
      <Route path="/:id"></Route>
      <Route path="/main" element={<Main />}></Route>
      <Route path="/login" element={<LoginComponent />}></Route>
      <Route path="/signUp"></Route>
      <Route path="/aboutUs"></Route>
      <Route path="/groups"></Route>
      <Route path="/groups/:id"></Route>
    </Routes>
  );
};
