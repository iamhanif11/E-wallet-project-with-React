import EnterPin from "../components/DashboardPage/EnterPin";
import FailPopUp from "../components/DashboardPage/FailPopUp";
import SuccessPopUp from "../components/DashboardPage/SuccessPopUp";

function TransferSubmit({ type, onPinSubmit, onClose }) {
  if (!type) return null;
  return (

    <div className="bg-white flex items-center justify-center p-4 rounded-2xl">
      <div
        className="absolute inset-0  "
        onClick={onClose}
      />

      <div className="relative z-10 w-full">
      
      {type === 'pin' &&(
        <EnterPin
        onConfirm={onPinSubmit}
        onClose={onClose}
        />
      )}

      {type == 'successs' && (
        <SuccessPopUp
        onDone={onClose}
        />
      )}

      {type == 'failed' &&(
        <FailPopUp
        onRetry={() => onPinSubmit()}
        onClose={onClose}
        />
      )}



      </div>
    </div>

);
}

export default TransferSubmit;
