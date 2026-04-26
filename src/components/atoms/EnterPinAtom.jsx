import { useRef } from "react"

function EnterPinAtom({pin, setPin}) {
    
    const inputRefs = useRef([])

    const handleChange = (value, index) => {
        if (!/^\d*$/.test(value)) return

        const newPin = [...pin]

        newPin[index] = value.substring(value.length-1)
        setPin(newPin)

        if(value && index <5){
            inputRefs.current[index + 1].focus()
        }
    };

    const handleKeyDown = (e, index) => {
        if(e.key === 'Backspace' && !pin[index] && index > 0){
            inputRefs.current[index-1].focus();
        }
    }
  return (
    <div className="flex gap-2">
        {pin.map((digit, index) => (
            <input 
            key={index}
            type="password"
            maxLength={1}
            value={digit}
            ref={(el)=> (inputRefs.current[index] = el)}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`w-full h-12 flex gap-2 text-center text-3xl outline-none border-b-2 transition-all ${digit ? 'border-primary' : 'border-gray-400'} focus:border-primary focus:bg-blue-50`} />
        ))}

    </div>
  )
}

export default EnterPinAtom