import React, { ReactNode, useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

interface DatePickerProps {
  label: string;
  icon: ReactNode; // Assuming the icon is a ReactNode, you can adjust the type accordingly
  setDate: (date: Date) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  icon,
  setDate,
}) => {
  return (
    <Datetime
      onChange={(e) => {
        setDate(new Date(e.toString()));
      }}
      timeFormat={false}
      renderInput={(props, openCalendar, closeCalendar) => (
        <div>
          <div className=" w-full py-2 shadow border rounded flex justify-between items-center px-2">
            <div className="flex-1">
              <div className="text-xs font-normal">{label}</div>
              <input {...props} className="h-full min-h-5 w-full" />
            </div>

            {icon}
          </div>
        </div>
      )}
    />
  );
};
