import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Profit, Sale } from "@/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface SalesAndProfitsChartProps {
  salesData: Sale[];
  profitsData: Profit[];
}

export const SalesAndProfitsChart: React.FC<SalesAndProfitsChartProps> = ({
  salesData,
  profitsData,
}) => {
  const options = {
    response: true,
    plugins: {
      title: {
        display: true,
        text: "Sales and Profits Over Time",
      },
    },
  };

  const chartData: ChartData<"bar"> = {
    labels: salesData.map((item) => item.date),
    datasets: [
      {
        label: "Sales",
        data: salesData.map((item) => item.sales),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Profits",
        data: profitsData.map((item) => item.profit),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 flex justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md w-full">
      <Bar options={options} data={chartData} />
    </div>
  );
};
