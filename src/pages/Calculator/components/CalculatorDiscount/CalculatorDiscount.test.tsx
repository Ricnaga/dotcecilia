import { fireEvent, render, screen, within } from '@testing-library/react';
import {
  CalculatorDiscount,
  CalculatorDiscountData,
} from './CalculatorDiscount';

let mockValues: CalculatorDiscountData = {
  missingDays: 0,
};

const handleOnChange = (key: keyof CalculatorDiscountData, value: number) => {
  mockValues = { ...mockValues, [key]: value };
};

describe('Components: CalculatorDiscount', () => {
  it('should be able to type a missing Days', () => {
    render(
      <CalculatorDiscount
        discount={mockValues}
        onChangeDiscount={handleOnChange}
      />,
    );

    const buttonName = /desconto/i;

    fireEvent.click(
      within(
        screen.getByRole('button', {
          name: buttonName,
        }),
      ).getByText(buttonName),
    );

    const value = 10;

    fireEvent.change(screen.getByPlaceholderText(/dias/i), {
      target: { valueAsNumber: value },
    });

    expect(mockValues.missingDays).toEqual(value);
  });
});
