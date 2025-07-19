import { create } from 'zustand';

const defaultState = {
  recurrenceType: 'daily', // daily, weekly, monthly, yearly
  custom: {
    interval: 1, // every X days/weeks/months/years
    daysOfWeek: [], // [0-6] for Sun-Sat
    pattern: null, // e.g., 'second-tuesday'
  },
  dateRange: {
    start: null,
    end: null,
  },
  previewDates: [], // calculated preview dates
};

const useRecurrenceStore = create((set) => ({
  ...defaultState,
  setRecurrenceType: (recurrenceType) => set({ recurrenceType }),
  setCustom: (custom) => set((state) => ({ custom: { ...state.custom, ...custom } })),
  setDateRange: (dateRange) => set((state) => ({ dateRange: { ...state.dateRange, ...dateRange } })),
  setPreviewDates: (previewDates) => set({ previewDates }),
  reset: () => set(defaultState),
}));

export default useRecurrenceStore; 