import TransferMoney from "../components/DashboardPage/TransferMoney";
import DashboardHeader from "../components/DashboardPage/DashboardHeader";

import Menu from "../components/DashboardPage/Menu";
import FindHistory from "../components/DashboardPage/FindHistory";

function History() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FB] font-montserrat">
      <DashboardHeader />

      <div className="flex ">
        <Menu />
        <div className="w-full px-8 py-4">
          {/* <TransferMoney currentStep={1} /> */}
          <div className="flex gap-4 mb-4">
            <img src="./time.svg" alt="history" />
            <p className="text-lg font-bold">History Transaction</p>
          </div>
          <FindHistory />
        </div>
      </div>
    </div>
  );
}

export default History;
