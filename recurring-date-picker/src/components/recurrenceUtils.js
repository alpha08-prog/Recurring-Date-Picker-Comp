// Utility to calculate recurring dates based on options
// Supports daily, weekly, monthly, yearly, and custom patterns

export function calculateRecurringDates({
  recurrenceType,
  custom,
  dateRange,
  maxCount = 30, // limit preview to 30 dates
}) {
  if (!dateRange.start) return [];
  const start = new Date(dateRange.start);
  const end = dateRange.end ? new Date(dateRange.end) : null;
  const dates = [];
  let current = new Date(start);
  let count = 0;

  while (count < maxCount) {
    if (end && current > end) break;
    // Daily
    if (recurrenceType === 'daily') {
      dates.push(new Date(current));
      current.setDate(current.getDate() + custom.interval);
    }
    // Weekly
    else if (recurrenceType === 'weekly') {
      // If specific days selected, add each day in week
      if (custom.daysOfWeek && custom.daysOfWeek.length > 0) {
        // Find the first day in the week >= start
        let weekStart = new Date(current);
        for (let i = 0; i < 7 && count < maxCount; i++) {
          const day = (weekStart.getDay() + i) % 7;
          if (custom.daysOfWeek.includes(day)) {
            const d = new Date(weekStart);
            d.setDate(start.getDate() + i + (count > 0 ? (custom.interval - 1) * 7 : 0));
            if ((!end || d <= end) && d >= start) {
              dates.push(new Date(d));
              count++;
              if (count >= maxCount) break;
            }
          }
        }
        current.setDate(current.getDate() + 7 * custom.interval);
      } else {
        dates.push(new Date(current));
        current.setDate(current.getDate() + 7 * custom.interval);
      }
    }
    // Monthly
    else if (recurrenceType === 'monthly') {
      if (custom.pattern === 'second-tuesday') {
        // Find the second Tuesday of the month
        const year = current.getFullYear();
        const month = current.getMonth();
        let d = new Date(year, month, 1);
        let tuesdays = [];
        while (d.getMonth() === month) {
          if (d.getDay() === 2) tuesdays.push(new Date(d));
          d.setDate(d.getDate() + 1);
        }
        if (tuesdays[1] && (!end || tuesdays[1] <= end) && tuesdays[1] >= start) {
          dates.push(tuesdays[1]);
        }
        current.setMonth(current.getMonth() + custom.interval);
      } else {
        dates.push(new Date(current));
        current.setMonth(current.getMonth() + custom.interval);
      }
    }
    // Yearly
    else if (recurrenceType === 'yearly') {
      dates.push(new Date(current));
      current.setFullYear(current.getFullYear() + custom.interval);
    }
    count++;
  }
  return dates.slice(0, maxCount);
} 