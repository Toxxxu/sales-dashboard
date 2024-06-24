import React from "react";

interface SummarySectionProps {
  title: string;
  value: number;
  percentage: number;
}

export const SummarySection: React.FC<SummarySectionProps> = ({
  title,
  value,
  percentage,
}) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md text-black dark:text-white w-full">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl">{value}</p>
      <p
        className={`text-sm ${
          percentage > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {percentage > 0 ? "+" : ""}
        {percentage}%
      </p>
    </div>
  );
};
