import React from 'react';
/**
 * MonthlyPatternSelector component for selecting monthly recurrence patterns.
 * @param {Object} props
 * @param {string} pattern - The selected pattern value.
 * @param {function} onPatternChange - Handler for pattern change.
 * @param {Array<{label: string, value: string|null}>} patterns - List of pattern options.
 * @param {string} [className] - Optional extra class names.
 */
const Tooltip = ({ text }) => (
  <span className="ml-1 text-gray-400 cursor-help" title={text}>ⓘ</span>
);
const MonthlyPatternSelector = ({ pattern, onPatternChange, patterns, className = '' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <label className="mr-2 font-semibold text-text">Pattern:</label>
    <select
      value={pattern || ''}
      onChange={onPatternChange}
      className="border border-border rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-150 text-text bg-white"
      aria-label="Monthly Pattern"
    >
      {patterns.map((p) => (
        <option key={p.value || 'none'} value={p.value || ''}>{p.label}</option>
      ))}
    </select>
    <Tooltip text="Choose a monthly pattern, like 'Second Tuesday' or 'Last Friday' of every month." />
  </div>
);
export default MonthlyPatternSelector; 