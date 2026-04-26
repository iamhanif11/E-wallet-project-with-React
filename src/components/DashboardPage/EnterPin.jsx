import { useState } from "react"
import EnterPinAtom from "../atoms/EnterPinAtom"
import { Link } from "react-router"


function EnterPin({onConfirm}) {
  const [pin, setPin] = useState(new Array(6).fill(""))
  const [errMessage, setErrMessage] = useState("")

  const onSubmit = () => {
    const finalPin = pin. join("")

    if (finalPin.length < 6) {
      setErrMessage("PIN harus 6 digit!")
      return;
    }
    setErrMessage("")
    if (onConfirm) onConfirm(finalPin)
  }
  return (
    <section className="p-8">
      <p className="font-semibold mb-16">Transfer to </p>

      <div className="mb-16">
        <p className="font-bold text-3xl">Enter Your Pin 👋</p>
        <p className="text-gray-400 mb-16">Enter Your Pin For Transaction</p>
        <EnterPinAtom pin={pin} setPin={setPin} />

        {errMessage && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {errMessage}
          </p>
        )}
      </div>

      <button 
      onClick={onSubmit}
      className="btn-submit w-full border border-blue-600 p-2 rounded-md bg-primary hover:bg-blue-700 cursor-pointer text-white font-montserrat mt-4">
        Done
      </button>

      <p className="text-center mt-4">Forgot Your PIN? <Link to="/change-pin"  className="text-primary">Reset</Link></p>
    
    
    </section>
  )
}

export default EnterPin