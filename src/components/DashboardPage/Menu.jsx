function Menu() {
  return (
    <aside className="menu-bar w-64 h-max-screen flex flex-col pt-8 px-6 gap-2 border-r border-r-gray-400 shadow-sm">
      <button className="flex items-center gap-4 p-3 text-left cursor-pointer rounded-md hover:bg-blue-600 group hover:text-white">
        <img
          src="../src/assets/dashboard-two (1).svg"
          alt="dashboard"
          className="group-hover:brightness-0 group-hover:invert"
        />
        <p>Dashboard</p>
      </button>
      <button className="flex items-center gap-4 p-3 text-left cursor-pointer rounded-md hover:bg-blue-600 group hover:text-white">
        <img
          src="../src/assets/Send.svg"
          alt="transfer"
          className="group-hover:brightness-0 group-hover:invert"
        />
        <p>Transfer</p>
      </button>
      <button className="flex items-center gap-4 p-3 text-left cursor-pointer rounded-md hover:bg-blue-600 group hover:text-white">
        <img
          src="../src/assets/history.svg"
          alt="history"
          className="group-hover:brightness-0 group-hover:invert"
        />
        <p>History</p>
      </button>
      <button className="flex items-center gap-4 p-3 text-left cursor-pointer rounded-md hover:bg-blue-600 group hover:text-white">
        <img
          src="../src/assets/Upload-default.svg"
          alt="top Up"
          className="group-hover:brightness-0 group-hover:invert"
        />
        <p>Top Up</p>
      </button>
      <button className="flex items-center gap-4 p-3 text-left cursor-pointer rounded-md hover:bg-blue-600 group hover:text-white">
        <img
          src="../src/assets/2 User.svg"
          alt="profile"
          className="group-hover:brightness-0 group-hover:invert"
        />
        <p>Profile</p>
      </button>
      <button className="exit flex items-center gap-4 p-3 text-left cursor-pointer rounded-md hover:bg-red-600 group hover:text-white">
        <img
          src="../src/assets/Icon.svg"
          alt="Exit"
          className="group-hover:brightness-0 group-hover:invert"
        />
        <p>Keluar</p>
      </button>
    </aside>
  );
}

export default Menu;
