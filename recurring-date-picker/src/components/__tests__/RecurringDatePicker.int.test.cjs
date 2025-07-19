const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
const RecurringDatePicker = require('../RecurringDatePicker').default;

describe('RecurringDatePicker integration', () => {
  it('lets user select daily recurrence and shows preview', () => {
    render(React.createElement(RecurringDatePicker));
    expect(screen.getByRole('button', { name: /daily/i })).toHaveClass('bg-primary');
    const intervalInput = screen.getByLabelText(/interval/i);
    fireEvent.change(intervalInput, { target: { value: 2 } });
    const startDate = screen.getByLabelText(/start date/i);
    fireEvent.change(startDate, { target: { value: '2024-01-01' } });
    const endDate = screen.getByLabelText(/end date/i);
    fireEvent.change(endDate, { target: { value: '2024-01-07' } });
    expect(screen.getByText('2024-01-01')).toBeInTheDocument();
    expect(screen.getByText('2024-01-03')).toBeInTheDocument();
    expect(screen.getByText('2024-01-05')).toBeInTheDocument();
    expect(screen.getByText('2024-01-07')).toBeInTheDocument();
  });

  it('lets user select weekly recurrence and days', () => {
    render(React.createElement(RecurringDatePicker));
    fireEvent.click(screen.getByRole('button', { name: /weekly/i }));
    fireEvent.click(screen.getByRole('button', { name: /mon/i }));
    fireEvent.click(screen.getByRole('button', { name: /wed/i }));
    fireEvent.change(screen.getByLabelText(/start date/i), { target: { value: '2024-01-01' } });
    fireEvent.change(screen.getByLabelText(/end date/i), { target: { value: '2024-01-10' } });
    expect(screen.getByText('2024-01-03')).toBeInTheDocument();
    expect(screen.getByText('2024-01-08')).toBeInTheDocument();
  });
}); 