import { NavLink } from "react-router";
import ButtonDownload from "../components/atoms/ButtonDownload";
import DashboardHeader from "../components/DashboardPage/DashboardHeader";
import Menu from "../components/DashboardPage/Menu";

function EditProfile() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <DashboardHeader />

        <div className="flex gap-8 p-4 md:py-0 md:px-8 flex-col md:flex-row items-start">
          <Menu />
          
          <div className="flex flex-col w-full max-w-4xl">
            
            <div className="flex gap-2 py-8 items-center font-bold mb-2">
              <img src="/2 User.png" alt="icon-profile" className="w-5 h-5" />
              <h2 className="text-xl">Profile</h2>
            </div>

            
            <div className="p-6  border border-gray-200 rounded-md w-full">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                
                <div className="space-y-4">
                  <h3 className="text-gray-700 font-bold">Profile Picture</h3>
                  <div className="flex items-center gap-6">
                    <img
                      src="/User edit.svg"
                      alt="photo-profile"
                      className="w-24 h-24 bg-gray-50 border border-gray-200 rounded-xl object-cover p-2"
                    />
                    <div className="flex flex-col gap-2">
                      <ButtonDownload
                        icon="/Edit Square.svg"
                        altText="edit-profile"
                        text="Change Profile" 
                        imgSize="w-5"
                        variant="primary"
                      />
                      <ButtonDownload
                        icon="/Trash.svg"
                        altText="delete-profile"
                        text="Delete Profile"
                        imgSize="w-5"
                        variant="red"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">
                    The profile picture must be 512 x 512 pixels or less
                  </p>
                </div>

                <div className="flex flex-col gap-5">
            
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <div className="relative">
                      <img
                        src="/User edit.svg"
                        alt="edit"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                      />
                      <input
                        type="text"
                        placeholder="Enter Full Name"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Phone</label>
                    <div className="relative">
                      <img
                        src="/Phone.svg"
                        alt="phone"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                      />
                      <input
                        type="text"
                        placeholder="Enter Your Number Phone"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>
                  </div>

            
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">Email</label>
                    <div className="relative">
                      <img
                        src="/mail2.svg"
                        alt=""
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                      />
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                </div>

            
                <div className="grid grid-cols-1  gap-6 pt-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-bold text-gray-700">Password</label>
                    <NavLink to="/change-password"
                    type="button" className="text-blue-600 text-sm font-medium hover:underline text-left w-fit">
                      Change Password
                    </NavLink>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-bold text-gray-700">Pin</label>
                    <NavLink to="/change-pin"
                     className="text-blue-600 text-sm font-medium hover:underline text-left w-fit">
                      Change Pin
                    </NavLink>
                  </div>
                </div>


                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white rounded-md text-lg hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all  mt-6"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;