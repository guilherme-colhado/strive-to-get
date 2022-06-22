import { LoginComponent } from "../Pages/Login";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";

export const RoutesComponent = () => {
    return <Routes>
        <Route path="/" ></Route>
        <Route path="/:id"></Route>
        <Route path="/main"></Route>
        <Route path="/login" ></Route>
        <Route path="/signUp"></Route>
        <Route path="/aboutUs"></Route>
        <Route path="/groups"></Route>
        <Route path="/groups/:id"></Route>
    </Routes>
}