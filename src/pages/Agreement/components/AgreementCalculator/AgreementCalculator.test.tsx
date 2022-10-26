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

  it('should test input number', () => {
    const numberInputs = [
      {
        placeholder: /salário/i,
        value: 2000,
      },
      {
        placeholder: /descontos \(r\$\)/i,
        value: 2000,
      },
    ];

    numberInputs.map((input) =>
      fireEvent.change(screen.getByPlaceholderText(input.placeholder), {
        target: { value: input.value },
      }),
    );
    expect(mockValues.salary).toEqual(numberInputs[0].value);
    expect(mockValues.discount).toEqual(numberInputs[1].value);
  });

  it('should test input Date', () => {
    const value = new Date(2020, 5, 1);

    [/data inicial/i, /data final/i].map((date) => {
      const dateInput = within(screen.getByText(date)).getByDisplayValue(
        /2022-11-10/i,
      );

      return fireEvent.change(dateInput, {
        target: { valueAsDate: value },
      });
    });

    expect(new Date(mockValues.startDate)).toEqual(value);
    expect(new Date(mockValues.endDate)).toEqual(value);
  });
});
