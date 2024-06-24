import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface SalesByCategoryProps {
  data: { category: string; sales: number }[];
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
  };

  return <Pie data={chartData} />;
};
