import React from "react";

interface HeaderProps {
  isDatePickerOpen: boolean;
  setIsDatePickerOpen: (isOpen: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isDatePickerOpen,
  setIsDatePickerOpen,
  isDarkMode,
  setIsDarkMode,
}) => {
  return (
    <header className="flex justify-between items-center mb-4">
      <div className="text-2xl font-bold">Sales Analytics</div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isDatePickerOpen ? "Close Date Picker" : "Select Date Range"}
        </button>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};
