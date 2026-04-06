import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Ticks,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);


function FinancialChart (){
    const data = {
        labels:['Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets:[
            {
                label: "expense",
                data: [20000, 55000, 65000, 35000, 5000, 60000, 50000],
                backgroundColor: "Red",
                borderRadius: 8,
            },
            
            {
                label: "Income",
                data: [80000, 80000, 85000, 30000, 22000, 70000, 5000],
                backgroundColor:"Blue",
                borderRadius: 8
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
                    boxHeight:10,
                },
            },
        },
        scales: {
            y: {
                max: 100000,
                beginAtZero: true,
                ticks:{
                    stepSize: 25000,
                },
            },
        },
    };

    return(
        <div className="flex flex-col font-montserrat border border-gray-200 p-2" style={{width: "600px", margin: "auto"}}>
            <div className="flex justify-between">
            <h3>Financial Chart</h3>
            <div className="flex gap-4 ">
                <button className="flex gap-1 p-2 border rounded-xs text-sm bg-gray-100 ">
                  7 Days <img src="../src/assets/down.svg" alt="down" />
                </button>
                <button className="flex gap-1 p-2 border rounded-xs text-sm bg-gray-100">
                  All <img src="../src/assets/down.svg" alt="down" />
                </button>
            </div>    

            </div >
            <div className="h-100">
            <Bar data={data} options={options}></Bar>
            </div>
        </div>
    );
};

export default FinancialChart