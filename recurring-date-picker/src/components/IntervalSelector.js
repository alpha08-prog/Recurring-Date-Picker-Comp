import React from 'react';
/**
 * IntervalSelector component for selecting interval and unit (days/weeks/months/years).
 * @param {Object} props
 * @param {number} props.interval - The interval value.
 * @param {string} props.unit - The selected unit.
 * @param {function} props.onIntervalChange - Handler for interval change.
 * @param {function} props.onUnitChange - Handler for unit change.
 * @param {string} [props.className] - Optional extra class names.
 */
const units = [
  { label: 'Days', value: 'days' },
  { label: 'Weeks', value: 'weeks' },
  { label: 'Months', value: 'months' },
  { label: 'Years', value: 'years' },
];
const Tooltip = ({ text }) => (
  <span className="ml-1 text-gray-400 cursor-help" title={text}>ⓘ</span>
);
const IntervalSelector = ({ interval, unit, onIntervalChange, onUnitChange, className = '' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className="font-semibold text-text">Every</span>
    <input
      type="number"
      min={1}
      value={interval}
      onChange={onIntervalChange}
      className="w-16 px-3 py-1.5 border border-border rounded-lg shadow-sm focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-150 text-center font-medium text-text bg-white"
      aria-label="Interval"
    />
    <select
      value={unit}
      onChange={onUnitChange}
      className="border border-border rounded-lg px-2 py-1 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-150 text-text bg-white"
      aria-label="Unit"
    >
      {units.map((u) => (
        <option key={u.value} value={u.value}>{u.label}</option>
      ))}
    </select>
    <Tooltip text="Choose the interval and unit for recurrence (e.g., every 2 weeks)" />
  </div>
);
export default IntervalSelector; 