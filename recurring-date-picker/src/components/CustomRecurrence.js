import React from 'react';
import useRecurrenceStore from './recurrenceStore';
import IntervalSelector from './IntervalSelector';
import WeeklyDaySelector from './WeeklyDaySelector';
import MonthlyPatternSelector from './MonthlyPatternSelector';

/**
 * CustomRecurrence component for configuring custom recurrence rules.
 * Handles interval/unit, weekly day selection, and monthly pattern selection.
 */
const patterns = [
  { label: 'None', value: null },
  { label: 'First Sunday of every month', value: 'first-sunday' },
  { label: 'First Monday of every month', value: 'first-monday' },
  { label: 'First Tuesday of every month', value: 'first-tuesday' },
  { label: 'First Wednesday of every month', value: 'first-wednesday' },
  { label: 'First Thursday of every month', value: 'first-thursday' },
  { label: 'First Friday of every month', value: 'first-friday' },
  { label: 'First Saturday of every month', value: 'first-saturday' },
  { label: 'Second Sunday of every month', value: 'second-sunday' },
  { label: 'Second Monday of every month', value: 'second-monday' },
  { label: 'Second Tuesday of every month', value: 'second-tuesday' },
  { label: 'Second Wednesday of every month', value: 'second-wednesday' },
  { label: 'Second Thursday of every month', value: 'second-thursday' },
  { label: 'Second Friday of every month', value: 'second-friday' },
  { label: 'Second Saturday of every month', value: 'second-saturday' },
  { label: 'Third Sunday of every month', value: 'third-sunday' },
  { label: 'Third Monday of every month', value: 'third-monday' },
  { label: 'Third Tuesday of every month', value: 'third-tuesday' },
  { label: 'Third Wednesday of every month', value: 'third-wednesday' },
  { label: 'Third Thursday of every month', value: 'third-thursday' },
  { label: 'Third Friday of every month', value: 'third-friday' },
  { label: 'Third Saturday of every month', value: 'third-saturday' },
  { label: 'Fourth Sunday of every month', value: 'fourth-sunday' },
  { label: 'Fourth Monday of every month', value: 'fourth-monday' },
  { label: 'Fourth Tuesday of every month', value: 'fourth-tuesday' },
  { label: 'Fourth Wednesday of every month', value: 'fourth-wednesday' },
  { label: 'Fourth Thursday of every month', value: 'fourth-thursday' },
  { label: 'Fourth Friday of every month', value: 'fourth-friday' },
  { label: 'Fourth Saturday of every month', value: 'fourth-saturday' },
  { label: 'Last Sunday of every month', value: 'last-sunday' },
  { label: 'Last Monday of every month', value: 'last-monday' },
  { label: 'Last Tuesday of every month', value: 'last-tuesday' },
  { label: 'Last Wednesday of every month', value: 'last-wednesday' },
  { label: 'Last Thursday of every month', value: 'last-thursday' },
  { label: 'Last Friday of every month', value: 'last-friday' },
  { label: 'Last Saturday of every month', value: 'last-saturday' },
];

const CustomRecurrence = () => {
  const { recurrenceType, custom, setCustom } = useRecurrenceStore();

  // Handlers for interval and unit
  const handleIntervalChange = (e) => setCustom({ interval: Number(e.target.value) });
  const handleUnitChange = (e) => setCustom({ unit: e.target.value });

  // Handler for toggling days of the week
  const handleToggleDay = (idx) => {
    const days = custom.daysOfWeek.includes(idx)
      ? custom.daysOfWeek.filter((d) => d !== idx)
      : [...custom.daysOfWeek, idx];
    setCustom({ daysOfWeek: days });
  };

  // Handler for monthly pattern change
  const handlePatternChange = (e) => setCustom({ pattern: e.target.value });

  return (
    <div className="flex flex-col gap-4">
      {/* Interval and unit selector */}
      <IntervalSelector
        interval={custom.interval}
        unit={custom.unit || 'days'}
        onIntervalChange={handleIntervalChange}
        onUnitChange={handleUnitChange}
      />
      {/* Helper text for invalid input */}
      {custom.interval < 1 && (
        <span className="text-red-500 text-xs ml-2">Interval must be at least 1</span>
      )}
      {/* Weekly day selector */}
      {(custom.unit === 'weeks' || recurrenceType === 'weekly') && (
        <WeeklyDaySelector
          selectedDays={custom.daysOfWeek}
          onToggleDay={handleToggleDay}
        />
      )}
      {/* Monthly pattern selector */}
      {(custom.unit === 'months' || recurrenceType === 'monthly') && (
        <MonthlyPatternSelector
          pattern={custom.pattern}
          onPatternChange={handlePatternChange}
          patterns={patterns}
        />
      )}
    </div>
  );
};

export default CustomRecurrence; 