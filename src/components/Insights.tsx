import React from "react";

interface InsightProps {
  insights: string[];
  recommendations: string[];
}

export const Insights: React.FC<InsightProps> = ({
  insights,
  recommendations,
}) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md text-black dark:text-white w-full">
      <h2 className="text-lg font-semibold mb-4">Insights & Recommendations</h2>
      <h3 className="font-semibold">Insights</h3>
      <ul className="mb-4">
        {insights.map((insight, index) => (
          <li key={index}>{insight}</li>
        ))}
      </ul>
      <h3 className="font-semibold">Recommendations</h3>
      <ul>
        {recommendations.map((recommendations, index) => (
          <li key={index}>{recommendations}</li>
        ))}
      </ul>
    </div>
  );
};
