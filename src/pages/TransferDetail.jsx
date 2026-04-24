import DetailTransfer from "../components/DashboardPage/DetailTransfer";
import DashboardHeader from "../components/DashboardPage/DashboardHeader";
import Menu from "../components/DashboardPage/Menu";
import TransferMoney from "../components/DashboardPage/TransferMoney";
import { useState } from "react";
import TransferSubmit from "./TransferSubmit";

function TransferDetail() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  const handlePinSubmit = (pin) => {
    console.log(pin);

    const isSuccesful = true;
    setActiveModal(isSuccesful ? "success" : "failed");
  };
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className={`${activeModal ? "blur-sm" : ""}`}>
        <DashboardHeader />
        <div className="flex">
          <Menu />
          <div className="w-full px-8 py-4">
            <TransferMoney currentStep={2} />
            <DetailTransfer onConfirm={() => setActiveModal("pin")} />
          </div>
        </div>
      </div>
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
            
            <TransferSubmit
              type={activeModal}
              onPinSubmit={handlePinSubmit}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TransferDetail;
