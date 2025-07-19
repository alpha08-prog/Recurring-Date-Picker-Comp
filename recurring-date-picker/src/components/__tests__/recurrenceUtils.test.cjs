const { calculateRecurringDates } = require('../recurrenceUtils');

describe('calculateRecurringDates', () => {
  it('generates daily recurring dates', () => {
    const result = calculateRecurringDates({
      recurrenceType: 'daily',
      custom: { interval: 2 },
      dateRange: { start: '2024-01-01', end: '2024-01-07' },
      maxCount: 10,
    });
    expect(result.map(d => d.toISOString().slice(0,10))).toEqual([
      '2024-01-01', '2024-01-03', '2024-01-05', '2024-01-07'
    ]);
  });

  it('generates weekly recurring dates for specific days', () => {
    const result = calculateRecurringDates({
      recurrenceType: 'weekly',
      custom: { interval: 1, daysOfWeek: [1,3] }, // Mon, Wed
      dateRange: { start: '2024-01-01', end: '2024-01-10' },
      maxCount: 10,
    });
    expect(result.map(d => d.toISOString().slice(0,10))).toContain('2024-01-03');
    expect(result.map(d => d.toISOString().slice(0,10))).toContain('2024-01-08');
  });

  it('generates monthly recurring dates for second Tuesday', () => {
    const result = calculateRecurringDates({
      recurrenceType: 'monthly',
      custom: { interval: 1, pattern: 'second-tuesday' },
      dateRange: { start: '2024-01-01', end: '2024-03-31' },
      maxCount: 10,
    });
    expect(result.map(d => d.toISOString().slice(0,10))).toEqual([
      '2024-01-09', '2024-02-13', '2024-03-12'
    ]);
  });
}); 