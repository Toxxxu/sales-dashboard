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
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`container mx-auto p-4 ${isDarkMode ? "dark" : ""}`}>
      <Header
        isDatePickerOpen={isDatePickerOpen}
        setIsDatePickerOpen={setIsDatePickerOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {isDatePickerOpen && (
        <div className="mb-4">
          <DateRangePickerComponent
            range={range}
            setRange={handleRangeChange}
          />
        </div>
      )}

      <div className="flex flex-row max-w-full gap-4 mb-4">
        <SummarySection
          title="Total Sales (Units)"
          value={salesData.totalSalesUnits}
          percentage={10}
        />
        <SummarySection
          title="Total Sales ($)"
          value={salesData.totalSalesValue}
          percentage={15}
        />
      </div>
      <div className="mb-4">
        <TopProducts products={salesData.topProducts} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="mb-4">
          <SalesLineGraph data={salesData.salesOverTime} />
        </div>
        <div className="mb-4">
          <SalesByCategory data={salesData.salesByCategory} />
        </div>
        <div className="mb-4">
          <SalesAndProfitsChart
            salesData={salesData.salesOverTime}
            profitsData={salesData.profitsOverTime}
          />
        </div>
      </div>
      <div className="mb-4">
        <Insights
          insights={salesData.insights}
          recommendations={salesData.recommendations}
        />
      </div>
    </div>
  );
}
