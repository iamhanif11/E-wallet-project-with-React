import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function FinancialChart() {
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: "Expense",
        data: [20000, 55000, 65000, 35000, 5000, 60000, 50000],
        backgroundColor: "Red",
        borderRadius: 4,
      },
      {
        label: "Income",
        data: [80000, 80000, 85000, 30000, 22000, 70000, 5000],
        backgroundColor: "Blue",
        borderRadius: 4
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 10,
          boxHeight: 10,
        },
      },
    },
    scales: {
      y: {
        max: 100000,
        beginAtZero: true,
        ticks: {
          stepSize: 25000,
        },
      },
    },
  };

  return (
    
    <div className="flex flex-col font-montserrat border border-gray-200 p-4 rounded-xs w-full max-w-xl mx-auto">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-4 mb-4">
        <h3 className="font-semibold text-lg">Financial Chart</h3>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 p-2 border border-gray-200 rounded-md text-sm bg-gray-50 hover:bg-gray-100">
            7 Days <img src="/down.svg" alt="down" className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 p-2 border border-gray-200 rounded-md text-sm bg-gray-50 hover:bg-gray-100">
            All <img src="/down.svg" alt="down" className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative w-full h-64 md:h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default FinancialChart;