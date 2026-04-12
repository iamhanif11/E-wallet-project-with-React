import DashboardHeader from "../components/DashboardPage/DashboardHeader"
import Menu from "../components/DashboardPage/Menu"
import FinancialChart from "../components/DashboardPage/FinancialChart"
import BalanceCard from "../components/DashboardPage/BalanceCard"
import ServiceCard from "../components/DashboardPage/ServiceCard"
import HistoryCard from "../components/DashboardPage/HistoryCard"

function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col font-montserrat">
            <DashboardHeader />
            <div className="flex flex-1 overflow-hidden">
                <div className="hidden md:block bg-white border-r bprder-gray-200 ">
                    <Menu />
                </div>

                <main className="flex-1 p-6 min-h-0 md:p-8 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        
                        <div className="md:col-span-1 ">
                            <BalanceCard />
                        </div>

                        <div className="md:col-span-2 ">
                            <ServiceCard />
                        </div>

                        <div className="md:col-span-2 ">
                            <FinancialChart />
                        </div>

                        <div className="md:col-span-1 ">
                            <HistoryCard />
                        </div>

                    </div>

                </main>

            </div>
        </div>
    );
}

export default Dashboard;