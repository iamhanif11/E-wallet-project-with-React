/**
 * @param {getText} // ubah warna text
 * @param {getStep} // ubah warna step 
 * @returns JSX Element
 */

function TransferMoney({ currentStep }) {
  const getStep = (stepNumber) => {
    return currentStep === stepNumber
      ? "bg-primary text-white"
      : "bg-[#4F5665] text-white";
  };

  const getText = (stepNumber) => {
    return currentStep === stepNumber ? "text-primary" : "text-[#4F5665]"
  }

  return (
    <div className="p-4">
      <div className="flex items-center gap-3 mb-10">
        <img src="/Send.svg" alt="icon-transfer" className="w-6 h-6" />
        <h1 className="text-xl font-bold text-black">Transfer Money</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full  text-sm font-medium ${getStep(1)}`}>
            1
          </div>
          <p className={` font-medium whitespace-nowrap ${getText(1)}`}  >
            Find People
          </p>
        </div>

        <div className="flex-none w-16 border-t-2 border-dashed border-gray-300"></div>

        <div className="flex items-center gap-3">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full  text-sm font-medium ${getStep(2)}`}>
            2
          </div>
          <p className={` font-medium whitespace-nowrap ${getText(2)}`}>
            Set Nominal
          </p>
        </div>

        <div className="flex-none w-16 border-t-2 border-dashed border-gray-300"></div>

        <div className="flex items-center gap-3">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full  text-sm font-medium ${getStep(3)}`}>
            3
          </div>
          <p className={` font-medium whitespace-nowrap ${getText(3)}`}>Finish</p>
        </div>
      </div>
    </div>
  );
}

export default TransferMoney;
