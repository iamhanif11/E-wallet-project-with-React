import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreatePin from "./pages/CreatePin";
import TransferPage from "./pages/TransferPage";
import TransferDetail from "./pages/TransferDetail";

function AppRouter() {
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/CreatePin" element={<CreatePin/>}/>
            <Route path= "/Dashboard" element={<Dashboard/>}/>
            <Route path= "/Transfer" element={<TransferPage/>}/>
            <Route path= "/Detail" element={<TransferDetail/>}></Route>
        </Routes>
    )
}

export default AppRouter