import React from 'react';
import useRecurrenceStore from './recurrenceStore';

// Helper to format date as YYYY-MM-DD
const formatDate = (date) => date.toISOString().split('T')[0];

const MiniCalendarPreview = () => {
  const previewDates = useRecurrenceStore((s) => s.previewDates);

  // For demo, just show the dates as a list (replace with calendar grid later)
  return (
    <div className="border rounded-2xl p-6 bg-blue-50/40 shadow-inner transition-all duration-300">
      <div className="font-bold mb-3 text-lg flex items-center gap-2">
        <svg width='20' height='20' fill='none' viewBox='0 0 24 24' className='text-blue-400'><path stroke='currentColor' strokeWidth='2' d='M7 4V2m10 2V2M3 8h18M5 8v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8M5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2'/></svg>
        Preview Dates
      </div>
      {previewDates && previewDates.length > 0 ? (
        <ul className="grid grid-cols-3 gap-2 animate-fade-in">
          {previewDates.map((d, i) => (
            <li key={i} className="bg-blue-100 text-blue-800 rounded-lg px-2 py-1 text-center text-xs shadow-sm transition-all duration-200 animate-fade-in">
              {formatDate(new Date(d))}
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-400 text-sm gap-2 min-h-[40px]">
          <svg width='32' height='32' fill='none' viewBox='0 0 24 24'><path stroke='currentColor' strokeWidth='2' d='M7 4V2m10 2V2M3 8h18M5 8v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8M5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2'/></svg>
          No dates selected
        </div>
      )}
    </div>
  );
};

export default MiniCalendarPreview; 