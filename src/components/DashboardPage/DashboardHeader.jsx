import { NavLink } from "react-router";
import Logo from "../atoms/Logo";
import { useState } from "react";

function DashboardHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="relative py-4 px-8 md:px-20 flex justify-between items-center border-b border-gray-200 shadow-sm">
      <Logo textColor="text-primary" />

      <div
        className="profil flex gap-4 items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <p className="font-montserrat hidden md:block">Ghaluh Wizard</p>
        <img src="/Ellipse 185.svg" className="w-10" alt="photo-profil" />
        <img
          src="/down.svg"
          alt="dropdown"
          className={`${isDropdownOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isDropdownOpen && (
        <div className="absolute right-8 top-full mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-md p-2 z-50 ">
          <p className="font-semibold mt-4 md:hidden">Hello, Ghaluh</p>
          <div className="md:hidden flex flex-col gap-1 border-b border-gray-200 pb-2 mb-2">
            <NavLink
              to="/Dashboard"
              className="flex items-center gap-3 p-3 text-black hover:bg-blue-600 hover:text-white rounded-md transition-colors group"
            >
              <img
                src="/dashboard-two (1).svg"
                alt="dashboard"
                className="w-5 h-5 group-hover:brightness-0 group-hover:invert"
              />
              <span className="text-sm font-medium">Dashboard</span>
            </NavLink>
            <NavLink
              to="/Transfer"
              className="flex items-center gap-3 p-3 text-black hover:bg-blue-600 hover:text-white rounded-md transition-colors group"
            >
              <img
                src="/Send.svg"
                alt="transfer"
                className="w-5 h-5 group-hover:brightness-0 group-hover:invert"
              />
              <span className="text-sm font-medium">Transfer</span>
            </NavLink>
            <NavLink
              to="/History"
              className="flex items-center gap-3 p-3 text-black hover:bg-blue-600 hover:text-white rounded-md transition-colors group"
            >
              <img
                src="/history.svg"
                alt="history"
                className="w-5 h-5 group-hover:brightness-0 group-hover:invert"
              />
              <span className="text-sm font-medium">History</span>
            </NavLink>
            <NavLink
              to="/Topup"
              className="flex items-center gap-3 p-3 text-black hover:bg-blue-600 hover:text-white rounded-md transition-colors group"
            >
              <img
                src="/Upload-default.svg"
                alt="top Up"
                className="w-5 h-5 group-hover:brightness-0 group-hover:invert"
              />
              <span className="text-sm font-medium">Top Up</span>
            </NavLink>

            <NavLink className="flex items-center gap-3 p-3 text-black hover:bg-blue-600 hover:text-white rounded-md transition-colors group">
              <img
                src="/2 User.svg"
                alt="profile"
                className="group-hover:brightness-0 group-hover:invert"
              />
              <p>Profile</p>
            </NavLink>
            <NavLink
              to="/"
              className="exit flex items-center gap-4 p-3 text-left cursor-pointer rounded-md hover:bg-red-600 group hover:text-white"
            >
              <img
                src="/Icon.svg"
                alt="Exit"
                className="group-hover:brightness-0 group-hover:invert"
              />
              <p>Keluar</p>
            </NavLink>
          </div>

          <button className="hidden md:flex items-center gap-3 w-full p-3 text-primary bg-white rounded-md mb-1 hover:bg-blue-700 hover:text-white transition-colors">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src="/user-icon.svg" className="invert" alt="" />
            </div>
            <span className="text-sm font-medium">Profile</span>
          </button>

          <button className="hidden md:flex items-center gap-3 w-full p-3 text-red-500 hover:text-white bg-white hover:bg-red-600 rounded-md transition-colors">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src="/logout-icon.svg" alt="" />
            </div>
            <span className="text-sm font-medium">Keluar</span>
          </button>
        </div>
      )}
    </header>
  );
}

export default DashboardHeader;
