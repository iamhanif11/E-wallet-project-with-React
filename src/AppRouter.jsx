import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TransferPage from "./pages/TransferPage";
import TransferDetail from "./pages/TransferDetail";
import TopUp from "./pages/TopUp";

function AppRouter() {
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path= "/dashboard" element={<Dashboard/>}/>
            <Route path= "/transfer" element={<TransferPage/>}/>
            <Route path= "/detail" element={<TransferDetail/>}/>
            <Route path= "/top-up" element={<TopUp/>}/>
        </Routes>
    )
}

export default AppRouter