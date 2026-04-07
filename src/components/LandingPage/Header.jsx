import { useState } from "react";
import { Link } from "react-router";



function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 relative flex justify-between px-6 md:px-20 py-4">
      <div className="logo flex items-center gap-2">
        <img
          src="/money_wallet.png"
          alt="icon-logo"
          className="w-8"
        />
        <p className="font-nunito-sans text-white font-medium">E-Wallet</p>
      </div>

      <nav className="hidden md:flex gap-4">
        <Link 
        to="/Login" className="border border-white hover:bg-blue-500 cursor-pointer rounded-sm p-2 font-montserrat text-white font-medium text-sm">
          Sign In
        </Link>
        <Link 
        to = "/Register" className="border border-white rounded-sm bg-white hover:bg-gray-200 cursor-pointer p-2 font-montserrat text-blue-600 font-medium text-sm">
          Sign Up
        </Link >
      </nav>

    
      <button
        className="md:hidden flex flex-col gap-2 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-0.5 bg-white rounded-full"></div>
        <div className="w-6 h-0.5 bg-white rounded-full"></div>
        <div className="w-6 h-0.5 bg-white rounded-full"></div>
      </button>

    {isMenuOpen &&(

      <div className="absolute top-full left-0 w-full bg-blue-700 md:hidden flex flex-col px-6 py-6 gap-4 shadow-lg z-50">
        <Link 
        to="/Login"className="w-full border border-white hover:bg-blue-500 cursor-pointer rounded-sm p-3 font-montserrat text-white font-medium text-sm">
          Sign In
        </Link>
        <Link 
        to="/Register" className="w-full border border-white rounded-sm bg-white hover:bg-gray-200 cursor-pointer p-3 font-montserrat text-blue-600 font-medium text-sm">
          Sign Up
        </Link>
      </div>

    )}
    </header>
  );
}

export default Header;
