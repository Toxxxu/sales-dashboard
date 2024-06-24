import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SalesLineGraphProps {
  data: { date: string; sales: number }[];
}

export const SalesLineGraph: React.FC<SalesLineGraphProps> = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Sales Over Time",
      },
    },
  };

  const chartData: ChartData<"line"> = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Sales",
        data: data.map((item) => item.sales),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full">
      <Line options={options} data={chartData} />
    </div>
  );
};
