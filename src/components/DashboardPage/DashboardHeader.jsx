import Logo from "../atoms/Logo";
import { useState } from "react";

function DashboardHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="relative py-4 px-8 md:px-20 flex justify-between items-center border-b border-gray-400 shadow-sm">
      <Logo textColor="text-primary" />


      <div
        className="profil flex gap-4 items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <p className="font-montserrat">Ghaluh Wizard</p>
        <img src="/Ellipse 185.svg" className="w-10" alt="photo-profil" />
        <img
          src="/down.svg"
          alt="dropdown"
          className={`${isDropdownOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isDropdownOpen && (

        <div className="absolute right-8 top-full mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-md p-2 z-50 ">
          <button className="flex items-center gap-3 w-full p-3 text-primary bg-white rounded-md mb-1 hover:bg-blue-700 hover:text-white transition-colors">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src="/user-icon.svg" className="invert" alt="" />
            </div>
            <span className="text-sm font-medium">Profile</span>
          </button>

          <button className="flex items-center gap-3 w-full p-3 text-red-500 hover:text-white bg-white hover:bg-red-600 rounded-md transition-colors">
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