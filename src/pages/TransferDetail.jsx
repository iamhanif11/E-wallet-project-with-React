import DetailTransfer from "../components/DashboardPage/DetailTransfer"
import TransferMoney from "../components/DashboardPage/Transfer"
import DashboardHeader from "../components/DashboardPage/DashboardHeader";
import Menu from "../components/DashboardPage/Menu";

function TransferDetail(){
    return(
       <div className="flex flex-col min-h-screen bg-[#F8F9FB] font-montserrat">
      <DashboardHeader />

      <div className="flex ">
        <Menu />
        <div className="w-full px-8 py-4">
          <TransferMoney currentStep={2} />
          <DetailTransfer />
        </div>
      </div>

    </div>
  );
}

export default TransferDetail