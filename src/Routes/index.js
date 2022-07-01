import { Routes, Route } from "react-router-dom";
import { Groups } from "../Pages/Groups";
import { LoginComponent } from "../Pages/Login";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/"></Route>
      <Route path="/:id"></Route>
      <Route path="/main"></Route>
      <Route path="/login" element={<LoginComponent />}></Route>
      <Route path="/signUp"></Route>
      <Route path="/aboutUs"></Route>
      <Route path="/groups" element={<Groups />}></Route>
      <Route path="/groups/:id"></Route>
    </Routes>
  );
};