import { Product } from "@/types";
import React from "react";

interface TopProductsProps {
  products: Product[];
}

export const TopProducts: React.FC<TopProductsProps> = ({ products }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md text-black dark:text-white w-full">
      <h2 className="text-lg font-semibold mb-4">Top 5 Selling Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span>{product.name}</span>
            <span>{product.sales}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
