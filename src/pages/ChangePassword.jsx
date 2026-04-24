import { useState } from "react";
import toast from "react-hot-toast";
import InputPassword from "../components/atoms/InputPasswd";
import DashboardHeader from "../components/DashboardPage/DashboardHeader";
import Menu from "../components/DashboardPage/Menu";
import { useAuth } from "../hooks/useAuth";

function ChangePassword() {

  const { currentUser, registeredUsers, handleNewPassword } = useAuth();

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!currentUser) {
      return toast.error("Sesi tidak ditemukan, silakan login ulang");
    }

    
    const userData = registeredUsers.find((u) => u.email === currentUser.email);

    if (!userData) {
      return toast.error("Data user tidak sinkron. Coba register ulang.");
    }

  
    if (formData.oldPassword !== userData.password) {
      return toast.error("Password lama salah!");
    }
    if (formData.newPassword.length < 6) {
      return toast.error("Password baru minimal 6 karakter!");
    }
    if (formData.newPassword !== formData.confirmPassword) {
      return toast.error("Konfirmasi password tidak cocok!");
    }


    try {
      handleNewPassword(currentUser.email, formData.newPassword);
      toast.success("Password berhasil diperbarui!");
      // Reset form
      setFormData({ oldPassword: "", newPassword: "", confirmPassword: "" });
    } catch {
      toast.error("Gagal memperbarui password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50"> 
      <DashboardHeader />

      <div className="flex gap-8 p-4 md:py-8 md:px-12 flex-col md:flex-row items-start">
        <Menu />

        <div className="flex flex-col w-full max-w-5xl"> 
          
          
          <div className="flex gap-3 py-4 items-center mb-6">
            
            <img src="/2 User.png" alt="icon-profile" className="w-6 h-6 object-contain" />
            <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
          </div>

          
          <form 
            onSubmit={handleSubmit}
            className="bg-white border border-gray-100 rounded-xl p-10 shadow-sm flex flex-col gap-8 w-full max-w-3xl" // Menyesuaikan padding, border, shadow, dan max-w form
          >
            <h3 className="font-bold text-xl text-gray-900 mb-2">Change Password</h3>


            <InputPassword
              label="Existing Password" 
              placeholder="Enter Your Existing Password"
              id="oldPassword" 
              value={formData.oldPassword}
              onChange={handleChange}
            />

            
            <InputPassword
              label="New Password"
              placeholder="Enter Your New Password"
              id="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
            />

            
            <InputPassword
              label="Confirm New Password"
              placeholder="Re-Type Your New Password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white  py-4 rounded-lg transition-colors duration-200 mt-6 shadow-md "
            >
              Submit
            </button>
          </form>


        </div>
      </div>
    </div>
  );
}

export default ChangePassword;