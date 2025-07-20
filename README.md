# Recurring-Date-Picker-Comp

A reusable React component for selecting recurring dates, supporting daily, weekly, monthly, yearly, and custom recurrence patterns. Built with Next.js, Tailwind CSS, and Zustand for state management.

## Features
- Select daily, weekly, monthly, yearly, or custom recurrence patterns
- Flexible date range selection
- Preview upcoming recurring dates
- Custom intervals and patterns (e.g., "every 2nd Tuesday")
- Modern UI with Tailwind CSS
- Easily embeddable in any React/Next.js project

## Tech Stack
- **Framework:** [Next.js](https://nextjs.org/) (React 19)
- **UI:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Date Utilities:** [date-fns](https://date-fns.org/)
- **Testing:** [Jest](https://jestjs.io/), [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
- **Linting:** [ESLint](https://eslint.org/) (with Next.js core-web-vitals)
- **Build Tools:** [PostCSS](https://postcss.org/), [Autoprefixer](https://github.com/postcss/autoprefixer)
- **Config/Tooling:** jsconfig for path aliases

## Project Structure
- **recurring-date-picker/**: Main Next.js app and component source code
  - `src/components/RecurringDatePicker.js`: Main component
  - `src/components/recurrenceUtils.js`: Recurrence calculation logic
  - `src/components/__tests__/`: Unit and integration tests

## Getting Started

1. **Install dependencies**
   ```bash
   cd recurring-date-picker
   npm install
   # or
   yarn install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Running Tests

This project uses Jest for unit and integration tests.

```bash
npx jest
```

Example test (from `recurrenceUtils.test.js`):
```js
import { calculateRecurringDates } from '../recurrenceUtils';

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
});
```

## Customization & Usage
- Import and use `<RecurringDatePicker />` in your React/Next.js app.
- Modify or extend recurrence logic in `recurrenceUtils.js` as needed.

## License
MIT
