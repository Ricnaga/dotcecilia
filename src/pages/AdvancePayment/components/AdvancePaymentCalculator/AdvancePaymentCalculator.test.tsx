import { fireEvent, render, screen } from '@testing-library/react';
import {
  AdvancePaymentCalculator,
  AdvancePaymentCalculatorFields,
} from './AdvancePaymentCalculator';

jest.mock('@shared/hooks/useInputFields', () => ({
  __esModule: true,
  useInputFields: () => ({
    data: { values: '' },
    functions: { onChangeValue: jest.fn() },
  }),
}));

let mockValues: AdvancePaymentCalculatorFields = {
  name: '',
  refDate: new Date(2022, 10, 10),
  salary: 1000,
};

const handleOnChange = (
  key: keyof AdvancePaymentCalculatorFields,
  value: string | number,
) => {
  mockValues = { ...mockValues, [key]: value };
};

describe('Components: AdvancePaymentCalculator', () => {
  beforeEach(() =>
    render(
      <AdvancePaymentCalculator
        values={mockValues}
        onChange={handleOnChange}
        onPrint={jest.fn}
      />,
    ),
  );

  afterEach(() => {
    mockValues = {
      name: '',
      refDate: new Date(2022, 10, 10),
      salary: 1000,
    };
  });

  it('should be able to type a name', () => {
    const value = 'John Doe';
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value },
    });
    expect(mockValues.name).toEqual(value);
  });

  it('should be able to type a salary', () => {
    const value = 2000;
    fireEvent.change(screen.getByRole('spinbutton'), {
      target: { value },
    });
    expect(mockValues.salary).toEqual(value);
  });

  it('should be able to change refDate', () => {
    const value = new Date(2020, 5, 1);
    fireEvent.change(screen.getByDisplayValue(/2022-11/i), {
      target: { valueAsDate: value },
    });
    expect(new Date(mockValues.refDate)).toEqual(value);
  });
});
