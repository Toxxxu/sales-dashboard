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
        // legend: {
        //   position: "top",
        // },
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

  return <Line options={options} data={chartData} />;
};
