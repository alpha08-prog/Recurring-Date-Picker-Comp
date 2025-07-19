import React from 'react';
/**
 * WeeklyDaySelector component for selecting days of the week.
 * @param {Object} props
 * @param {number[]} props.selectedDays - Array of selected day indices (0=Sun).
 * @param {function} props.onToggleDay - Handler for toggling a day.
 * @param {string} [props.className] - Optional extra class names.
 */
const daysOfWeekLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const Tooltip = ({ text }) => (
  <span className="ml-1 text-gray-400 cursor-help" title={text}>ⓘ</span>
);
const WeeklyDaySelector = ({ selectedDays, onToggleDay, className = '' }) => (
  <div className={`flex flex-col gap-1 ${className}`}>
    <div className="flex gap-2">
      {daysOfWeekLabels.map((label, idx) => (
        <button
          key={label}
          className={`px-3 py-1 rounded-lg border font-semibold transition-all duration-150 focus:outline-none
            ${selectedDays.includes(idx)
              ? 'bg-primary text-white border-primary shadow scale-105'
              : 'bg-white text-text border-border hover:bg-accent-light hover:text-primary-dark hover:border-accent'}
          `}
          onClick={() => onToggleDay(idx)}
          type="button"
          aria-pressed={selectedDays.includes(idx)}
        >
          {label}
        </button>
      ))}
    </div>
    <span className="text-xs text-text-secondary ml-1">Select one or more days of the week<Tooltip text="Choose which days of the week this recurrence should apply to." /></span>
  </div>
);
export default WeeklyDaySelector; 