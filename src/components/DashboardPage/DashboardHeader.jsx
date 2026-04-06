import Logo from "../atoms/Logo";

function DashboardHeader() {
  return (
    <header className="relative py-4 px-8 md:px-20 flex justify-between items-center border-b border-gray-400 shadow-sm">
      <Logo
        textColor="text-blue-600"/>

      <div className="profil flex gap-4 items-center">
        <p className="font-montserrat ">Ghaluh Wizard</p>
        <img src="../src/assets/Ellipse 185.svg" className="w-10" alt="photo-profil" />
        <img src="../src/assets/down.svg" alt="dropdown" />
      </div>
    </header>
  );
}

export default DashboardHeader;
