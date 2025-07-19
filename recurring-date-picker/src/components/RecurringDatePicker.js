"use client"
import React, { useEffect } from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import CustomRecurrence from './CustomRecurrence';
import DateRangePicker from './DateRangePicker';
import MiniCalendarPreview from './MiniCalendarPreview';
import useRecurrenceStore from './recurrenceStore';
import { calculateRecurringDates } from './recurrenceUtils';

const RecurringDatePicker = () => {
  const { recurrenceType, custom, dateRange, setPreviewDates } = useRecurrenceStore();

  useEffect(() => {
    const dates = calculateRecurringDates({ recurrenceType, custom, dateRange });
    setPreviewDates(dates);
  }, [recurrenceType, custom, dateRange, setPreviewDates]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background to-primary/10 py-10">
      <div className="w-full max-w-xl mx-auto p-8 bg-background-card rounded-2xl border border-accent shadow-2xl flex flex-col gap-8 transition-shadow duration-300">
        <h2 className="text-3xl font-extrabold mb-2 text-center tracking-tight text-primary-dark">Recurring Date Picker</h2>
        <RecurrenceOptions />
        <CustomRecurrence />
        <DateRangePicker />
        <MiniCalendarPreview />
      </div>
    </div>
  );
};

export default RecurringDatePicker; 