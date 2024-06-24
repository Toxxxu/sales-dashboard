import { DateRangePicker, RangeKeyDict, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface DateRangePickerProps {
  range: Range[];
  setRange: (ranges: RangeKeyDict) => void;
}

export const DateRangePickerComponent: React.FC<DateRangePickerProps> = ({
  range,
  setRange,
}) => {
  return (
    <DateRangePicker
      ranges={range}
      onChange={setRange}
      className="text-black"
    />
  );
};
