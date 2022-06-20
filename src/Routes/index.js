import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { SignUp } from "../Pages/SignUp";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:id"></Route>
      <Route path="/main"></Route>
      <Route path="/login"></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/aboutUs"></Route>
      <Route path="/groups"></Route>
      <Route path="/groups/:id"></Route>
    </Routes>
  );
};
