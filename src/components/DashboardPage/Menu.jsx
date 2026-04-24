import {NavLink, useNavigate} from "react-router"
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";


function Menu() {
  const navigate = useNavigate()
  const { handleLogout } = useAuth()

  const onLogout = () => {
  
    handleLogout();
    toast.success("Berhasil keluar dari akun")
    navigate("/login", {replace: true})
  }
  return (
    <aside className="hidden menu-bar w-64 h-max-screen md:flex flex-col pt-8 px-6 gap-2 ">
      <NavLink to="/dashboard"
      className="flex items-center gap-4 p-3 text-left cursor-pointer rounded-md hover:bg-blue-600 group hover:text-white">
        <img
          src="/dashboard-two (1).svg"
          alt="dashboard"
          className="group-hover:brightness-0 group-hover:invert"
        />
        <p>Dashboard</p>
      </NavLink>
      <NavLink to="/transfer"
      className="flex items-center gap-4 p-3 text-left cursor-pointer rounded-md hover:bg-blue-600 group hover:text-white">
        <img
          src="/Send.svg"
          alt="transfer"
          className="group-hover:brightness-0 group-hover:invert"
        />
        <p>Transfer</p>
      </NavLink>
      <NavLink to="/history"
      className="flex items-center gap-4 p-3 text-left cursor-pointer rounded-md hover:bg-blue-600 group hover:text-white">
        <img
          src="/history.svg"
          alt="history"
          className="group-hover:brightness-0 group-hover:invert"
        />
        <p>History</p>
      </NavLink>
      <NavLink to="/top-up" className="flex items-center gap-4 p-3 text-left cursor-pointer rounded-md hover:bg-blue-600 group hover:text-white">
        <img
          src="/Upload-default.svg"
          alt="top Up"
          className="group-hover:brightness-0 group-hover:invert"
        />
        <p>Top Up</p>
      </NavLink>
      <NavLink to="/edit-profile"
      className="flex items-center gap-4 p-3 text-left cursor-pointer rounded-md hover:bg-blue-600 group hover:text-white">
        <img
          src="/2 User.svg"
          alt="profile"
          className="group-hover:brightness-0 group-hover:invert"
        />
        <p>Profile</p>
      </NavLink>
      <button 
      onClick={onLogout}
      className="exit flex items-center gap-4 p-3 text-left cursor-pointer rounded-md hover:bg-red-600 group hover:text-white">
        <img
          src="/Icon.svg"
          alt="Exit"
          className="group-hover:brightness-0 group-hover:invert"
        />
        <p>Keluar</p>
      </button>
    </aside>
  );
}

export default Menu;
