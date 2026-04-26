import DetailTransfer from "../components/DashboardPage/DetailTransfer";
import DashboardHeader from "../components/DashboardPage/DashboardHeader";
import Menu from "../components/DashboardPage/Menu";
import TransferMoney from "../components/DashboardPage/TransferMoney";
import { useState,useEffect } from "react";
import TransferSubmit from "./TransferSubmit";
import { useLocation,useNavigate } from "react-router";
// import { useSelector,useDispatch } from "react-redux";
// import { transferOut } from "../redux/slices/usersSlice";
// import SuccessPopUp from "../components/DashboardPage/SuccessPopUp";
// import FailPopUp from "../components/DashboardPage/FailPopUp";
import { useAuth } from "../hooks/useAuth";




function TransferDetail() {
  const location = useLocation()
  const navigate = useNavigate()
  const {currentUser, handleTransfer, registeredUsers} = useAuth()
  console.log(currentUser)
  const [transferData, setTransferData] = useState({amount: 0, note: ""})
  
  const [activeModal, setActiveModal] = useState(null);

  const currentData = registeredUsers.find(u => u.email === currentUser?.email)
  const currentBalance = currentData?.balance || 0;

  const handlePinSubmit = (pin) => {
    console.log(pin)
    console.log(currentBalance)
    console.log(transferData.amount)
  if (String(pin) === String(currentUser?.pin)) {
    if (currentBalance >= transferData.amount) {
      handleTransfer({
        email: currentUser.email,
        amount : transferData.amount
      });

      setActiveModal("success")
    } else {
      console.log(currentBalance)
      setActiveModal("failed")
    }
  } else {
    setActiveModal("failed")
  }
  }
  const recipient = location.state?.selectedPerson;
  
  
  // const [amount] = useState(10000)
  
  
  useEffect(() => {
    if (!recipient){
      
      navigate("/transfer")
    }
  }, [recipient, navigate])
  
  const handleModal = (amount, note) => {
    setTransferData({amount: Number(amount), note})
    setActiveModal("pin")
  }
  
  const closeModal = () => setActiveModal(null);
  // const handlePinSubmit = (pin) => {
  //   // console.log(pin);
  //   if (currentUser && pin === currentUser.pin) {
  //     if (currentUser.balance >= amount) {
  //       dispatch(transferOut({email: currentUser.email, amount: amount}))
  //       setActiveModal(SuccessPopUp)
  //     } else {
  //       setActiveModal(FailPopUp)
  //     }

  //   }

  //   const isSuccesful = true;
  //   setActiveModal(isSuccesful ? "success" : "failed");
  // };
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className={`${activeModal ? "blur-sm" : ""}`}>
        <DashboardHeader />
        <div className="flex">
          <Menu />
          <div className="w-full px-8 py-4">
            <TransferMoney currentStep={2} />
            <DetailTransfer 
            recipient = {recipient}
            amount={transferData.amount}
            onConfirm={handleModal} />
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
              setType={setActiveModal}

              transferData={{
                amount: transferData.amount,
                name: recipient?.name, 
                img: recipient?.img
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TransferDetail;
