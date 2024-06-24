import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { SaleByCategory } from "@/types";

ChartJS.register(ArcElement, Tooltip, Legend);

interface SalesByCategoryProps {
  data: SaleByCategory[];
}

export const SalesByCategory: React.FC<SalesByCategoryProps> = ({ data }) => {
  const chartData: ChartData<"pie"> = {
    datasets: [
      {
        data: data.map((item) => item.sales),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
    labels: data.map((item) => item.category),
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full flex items-center justify-center">
      <Pie data={chartData} />
    </div>
  );
};
