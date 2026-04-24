import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TransferPage from "./pages/TransferPage";
import TransferDetail from "./pages/TransferDetail";
import TopUp from "./pages/TopUp";
import History from "./pages/History";
import ForgotPassword from "./pages/ForgotPassword";
import CreatePin from "./pages/CreatePin";
import TransferSubmit from "./pages/TransferSubmit";
import EditProfile from "./pages/EditProfile";
import ChangePin from "./pages/ChangePin";
import ChangePassword from "./pages/ChangePassword";
import NewPassword from "./pages/NewPassword";



function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create-pin" element={<CreatePin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/new-password" element={<NewPassword/>} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transfer" element={<TransferPage />} />
      <Route path="/detail" element={<TransferDetail />} />
      <Route path="/top-up" element={<TopUp />} />
      <Route path="/history" element={<History />} />
      <Route path="/transfer-sde" element={<TransferSubmit />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/change-pin" element={<ChangePin />} />
      <Route path="/change-password" element={<ChangePassword />} />
    </Routes>
  );
}

export default AppRouter;
