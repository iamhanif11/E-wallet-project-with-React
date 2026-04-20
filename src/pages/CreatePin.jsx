// import { Link } from "react-router";

import { useState } from "react";
import EnterPinAtom from "../components/atoms/EnterPinAtom";
import Logo from "../components/atoms/Logo"
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

function CreatePin() {
  const navigate = useNavigate();

  const {handleCreatePin} = useAuth();
  const[pin, setPin] = useState(new Array(6).fill(""))

  const onSubmit = () => {
    const finalPin = pin.join("");

    if (finalPin.length < 6){
      toast.error("PIN harus 6 digit!")
      return;
    }

    try{
      handleCreatePin(finalPin)
      toast.success("PIN Berhasil Dibuat")
      navigate("/dashboard")
    }catch (error) {
      toast.error(error)
    }

  }
  return (
    
    <main className="flex flex-col md:flex-row min-h-screen w-full  md:bg-primary overflow-hidden">
      
    
      <section className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8  md:px-20  py-32 md:py-0 md:rounded-r-[40px] ">
        
        <div className="max-w-md w-full mx-auto flex flex-col gap-8">
          <Logo textColor="text-primary" />

          <div className="desc flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-bold">
              Enter Your Pin 👋
            </h1>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              Please save your pin because this is so important.
            </p>
          </div>


          <div className="py-4">
            <EnterPinAtom pin={pin} setPin={setPin}/>
          </div>

          <button
          onClick={onSubmit}
          className="bg-primary w-full py-3 md:py-4 rounded-xl text-white   hover:bg-blue-700 ">
            Submit
          </button>

          {/* <div className="reset text-center text-sm">
            <p className="text-gray-500">
              Forgot Your PIN? <Link to="/forgot-password" className="text-blue-600  cursor-pointer">Reset</Link>
            </p>
          </div> */}
        </div>
      </section>

      <aside className="hidden md:flex md:w-1/2 bg-primary items-center justify-center p-10">
        <img 
          src="/character.png" 
          alt="illustration" 
          className="w-full max-w-lg object-contain animate-float"
        />
      </aside>

    </main>
  );
}

export default CreatePin;