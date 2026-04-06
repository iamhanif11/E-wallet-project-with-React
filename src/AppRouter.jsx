import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function AppRouter() {
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path= "/Dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}

export default AppRouter