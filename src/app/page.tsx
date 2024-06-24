"use client";

import React, { useState, useEffect } from "react";
import salesData from "../data/sales.json";
import { DateRangePickerComponent } from "@/components/DateRangePicker";
import { SummarySection } from "@/components/SummarySection";
import { TopProducts } from "@/components/TopProducts";
import { SalesLineGraph } from "@/components/SalesLineGraph";
import { SalesByCategory } from "@/components/SalesByCategory";
import { Insights } from "@/components/Insights";
import { SalesAndProfitsChart } from "@/components/SalesAndProfitsChart";
import { RangeKeyDict } from "react-date-range";
import { Header } from "@/containers/Header";

export default function Home() {
  const [range, setRange] = useState([
    {
      startDate: new Date(salesData.dateRange[0]),
      endDate: new Date(salesData.dateRange[1]),
      key: "selection",
    },
  ]);

  const [filteredData, setFilteredData] = useState(salesData);

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleRangeChange = (ranges: RangeKeyDict) => {
    const { selection } = ranges;
    if (selection.startDate && selection.endDate) {
      setRange([
        {
          startDate: selection.startDate,
          endDate: selection.endDate,
          key: "selection",
        },
      ]);
      filterSalesData(selection.startDate, selection.endDate);
    }
  };

  const filterSalesData = (startDate: Date, endDate: Date) => {
    const filteredSales = {
      ...salesData,
      salesOverTime: salesData.salesOverTime.filter(
        (sale) =>
          new Date(sale.date) >= startDate && new Date(sale.date) <= endDate
      ),
      profitsOverTime: salesData.profitsOverTime.filter(
        (profit) =>
          new Date(profit.date) >= startDate && new Date(profit.date) <= endDate
      ),
    };

    setFilteredData(filteredSales);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <Header
        isDatePickerOpen={isDatePickerOpen}
        setIsDatePickerOpen={setIsDatePickerOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <div className={`container mx-auto p-4 ${isDarkMode ? "dark" : ""}`}>
        {isDatePickerOpen && (
          <div className="flex items-center justify-center mb-4">
            <DateRangePickerComponent
              range={range}
              setRange={handleRangeChange}
            />
          </div>
        )}

        <div className="flex flex-row max-w-full gap-4 mb-4">
          <SummarySection
            title="Total Sales (Units)"
            value={filteredData.totalSalesUnits.value}
            percentage={filteredData.totalSalesUnits.percentage}
          />
          <SummarySection
            title="Total Sales ($)"
            value={filteredData.totalSalesValue.value}
            percentage={filteredData.totalSalesValue.percentage}
          />
        </div>
        <div className="mb-4">
          <TopProducts products={filteredData.topProducts} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col gap-4 flex-start">
            <div className="flex-grow">
              <SalesLineGraph data={filteredData.salesOverTime} />
            </div>
            <div className="flex-grow">
              <SalesAndProfitsChart
                salesData={filteredData.salesOverTime}
                profitsData={filteredData.profitsOverTime}
              />
            </div>
          </div>
          <div className="flex gap-4 flex-start">
            <SalesByCategory data={filteredData.salesByCategory} />
          </div>
        </div>
        <div>
          <Insights
            insights={filteredData.insights}
            recommendations={filteredData.recommendations}
          />
        </div>
      </div>
    </>
  );
}
