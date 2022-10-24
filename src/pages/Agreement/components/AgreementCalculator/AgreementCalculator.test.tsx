import { fireEvent, render, screen, within } from '@testing-library/react';
import {
  AgreementCalculator,
  AgreementCalculatorFields,
} from './AgreementCalculator';

const mockDate = new Date(2022, 10, 10);

let mockValues: AgreementCalculatorFields = {
  name: '',
  salary: 0,
  startDate: mockDate,
  discount: 0,
  endDate: mockDate,
};

const handleOnChange = (
  key: keyof AgreementCalculatorFields,
  value: string | number,
) => {
  mockValues = { ...mockValues, [key]: value };
};

describe('Components: AdvancePaymentCalculator', () => {
  beforeEach(() =>
    render(
      <AgreementCalculator
        values={mockValues}
        onChange={handleOnChange}
        onPrint={jest.fn}
      />,
    ),
  );

  it('should be able to type a name', () => {
    const value = 'John Doe';
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value },
    });
    expect(mockValues.name).toEqual(value);
  });

  it('should be able to type a salary', () => {
    const value = 2000;
    fireEvent.change(screen.getByPlaceholderText(/salário/i), {
      target: { value },
    });
    expect(mockValues.salary).toEqual(value);
  });

  it('should be able to type a discount', () => {
    const value = 2000;
    fireEvent.change(screen.getByPlaceholderText(/descontos \(r\$\)/i), {
      target: { value },
    });
    expect(mockValues.discount).toEqual(value);
  });

  it('should be able to type a initial Date', () => {
    const value = new Date(2020, 5, 1);

    const initialDateInput = within(
      screen.getByText(/data inicial/i),
    ).getByDisplayValue(/2022-11-10/i);

    fireEvent.change(initialDateInput, {
      target: { valueAsDate: value },
    });
    expect(new Date(mockValues.startDate)).toEqual(value);
  });

  it('should be able to type a end Date', () => {
    const value = new Date(2020, 5, 1);

    const initialDateInput = within(
      screen.getByText(/data final/i),
    ).getByDisplayValue(/2022-11-10/i);

    fireEvent.change(initialDateInput, {
      target: { valueAsDate: value },
    });
    expect(new Date(mockValues.startDate)).toEqual(value);
  });
});
