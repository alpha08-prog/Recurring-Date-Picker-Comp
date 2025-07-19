import React from 'react';
import useRecurrenceStore from './recurrenceStore';

const options = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Yearly', value: 'yearly' },
];

const RecurrenceOptions = () => {
  const recurrenceType = useRecurrenceStore((s) => s.recurrenceType);
  const setRecurrenceType = useRecurrenceStore((s) => s.setRecurrenceType);

  return (
    <div className="flex gap-4">
      {options.map((opt) => (
        <button
          key={opt.value}
          className={`relative px-5 py-2 rounded-lg border font-semibold focus:outline-none transition-all duration-200
            ${recurrenceType === opt.value
              ? 'bg-primary text-white border-primary shadow-md scale-105'
              : 'bg-white text-text border-border hover:bg-accent-light hover:text-primary-dark hover:border-accent'}
          `}
          style={{ minWidth: 90 }}
          onClick={() => setRecurrenceType(opt.value)}
          aria-pressed={recurrenceType === opt.value}
        >
          {opt.label}
          {recurrenceType === opt.value && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-1 bg-accent rounded-full animate-pulse" />
          )}
        </button>
      ))}
    </div>
  );
};

export default RecurrenceOptions; 