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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface SalesAndProfitsChartProps {
  salesData: { date: string; sales: number }[];
  profitsData: { date: string; profit: number }[];
}

export const SalesAndProfitsChart: React.FC<SalesAndProfitsChartProps> = ({
  salesData,
  profitsData,
}) => {
  const options = {
    response: true,
    plugins: {
      //   legend: {
      //     position: "top",
      //   },
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

  return <Bar options={options} data={chartData} />;
};
