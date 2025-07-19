import React from 'react';
import useRecurrenceStore from './recurrenceStore';

const DateRangePicker = () => {
  const { dateRange, setDateRange } = useRecurrenceStore();

  const handleStartChange = (e) => {
    setDateRange({ start: e.target.value });
  };

  const handleEndChange = (e) => {
    setDateRange({ end: e.target.value });
  };

  const isInvalidRange = dateRange.start && dateRange.end && dateRange.start > dateRange.end;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <label className="font-semibold min-w-[90px]">Start Date:</label>
        <div className="relative w-full max-w-xs">
          <input
            type="date"
            value={dateRange.start || ''}
            onChange={handleStartChange}
            className="border rounded-lg px-3 py-1.5 w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-150 shadow-sm pr-10"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M7 4V2m10 2V2M3 8h18M5 8v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8M5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/></svg>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <label className="font-semibold min-w-[90px]">End Date (optional):</label>
        <div className="relative w-full max-w-xs">
          <input
            type="date"
            value={dateRange.end || ''}
            onChange={handleEndChange}
            className="border rounded-lg px-3 py-1.5 w-full focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-150 shadow-sm pr-10"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M7 4V2m10 2V2M3 8h18M5 8v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8M5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/></svg>
          </span>
        </div>
      </div>
      {isInvalidRange && (
        <span className="text-red-500 text-xs ml-2">End date must be after start date</span>
      )}
    </div>
  );
};

export default DateRangePicker; 