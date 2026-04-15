import { useState } from "react";


const paymentOptions = [
  { id: "bri", name: "Bank Rakyat Indonesia", logo: "/Bank BRI (Bank Rakyat Indonesia) Logo (SVG-240p) - FileVector69 1.svg" },
  { id: "dana", name: "Dana", logo: "/Logo DANA (PNG-240p) - FileVector69 1.svg" },
  { id: "bca", name: "Bank Central Asia", logo: "/Bank BCA Logo (SVG-240p) - FileVector69 1.svg" },
  { id: "gopay", name: "Gopay", logo: "/Logo GoPay (SVG-240p) - FileVector69 1.svg" },
  { id: "ovo", name: "Ovo", logo: "/ovo.svg" },
];

function PaymentMethod() {

  const [selectedMethod, setSelectedMethod] = useState("bri");

  return (
    <div className="max-w-3xl">
      
      <h2 className=" font-bold text-black">Payment Method</h2>
      <p className="text-gray-500 mt-1 mb-6">
        Choose your payment method for top up account
      </p>

      <div className="flex flex-col gap-4">
        {paymentOptions.map((option) => (
          <label
            key={option.id}
        
            className={`flex items-center gap-6 p-4 border rounded-lg cursor-pointer transition-colors ${
              selectedMethod === option.id
                ? "border-blue-500 bg-gray-50" 
                : "border-gray-100 bg-gray-50 hover:bg-gray-100"
            }`}
          >
        
            <input
              type="radio"
              name="payment_method"
              value={option.id}
              checked={selectedMethod === option.id}
              onChange={() => setSelectedMethod(option.id)}
              className="w-5 h-5 text-blue-600 cursor-pointer"
            />
            
    
            <div className="w-16 flex justify-center">
              <img 
                src={option.logo} 
                alt={`${option.name} logo`} 
                className="h-6 object-contain" 
              />
            </div>

    
            <span className="text-gray-700 font-medium text-lg">
              {option.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethod;