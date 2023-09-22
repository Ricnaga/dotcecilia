import { OnlyBooleanKeys } from '@shared/utils/types';
import { fireEvent, render, screen, within } from '@testing-library/react';
import {
  PaystubCalculator,
  PaystubCalculatorFields,
} from './PaystubCalculator';

const mockDate = new Date(2022, 10, 10);

let values: PaystubCalculatorFields = {
  name: '',
  hasUnsanitary: true,
  unsanitary: 0,
  extraHour: true,
  fullExtra: true,
  hours: 0,
  salary: 0,
  initialWorkdayMonth: mockDate,
  lastWorkdayMonth: mockDate,
  vtr: 0,
  missingDays: 0,
  discountedDays: 0,
};

const handleChange = (
  key: keyof PaystubCalculatorFields,
  value: string | number,
) => {
  values = { ...values, [key]: value };
};

const handleChecked = (key: OnlyBooleanKeys<PaystubCalculatorFields>) => {
  values = { ...values, [key]: !values[key] };
};

describe('Component: PaystubCalculator', () => {
  beforeEach(() => {
    render(
      <PaystubCalculator
        values={values}
        onChange={handleChange}
        onChecked={handleChecked}
        onPrint={jest.fn()}
      />,
    );
  });

  afterEach(() => {
    values = {
      name: '',
      hasUnsanitary: true,
      unsanitary: 0,
      extraHour: true,
      fullExtra: true,
      hours: 0,
      salary: 0,
      initialWorkdayMonth: mockDate,
      lastWorkdayMonth: mockDate,
      vtr: 0,
      missingDays: 0,
      discountedDays: 0,
    };
  });

  it('should test switch buttons', async () => {
    const allcheckboxes = screen.getAllByRole('checkbox');

    allcheckboxes.map((checkbox) => fireEvent.click(checkbox));

    expect(values.hasUnsanitary).toBeFalsy();
    expect(values.extraHour).toBeFalsy();
    expect(values.fullExtra).toBeFalsy();
  });

  it('should test number inputs', () => {
    const inputValue = {
      salary: 100000,
      missingDays: 10,
      vtr: 1000,
      discountedDays: 10,
      unsanitary: 150000,
      hours: 10,
    };

    fireEvent.change(screen.getByPlaceholderText(/valor insalubridade/i), {
      target: { value: inputValue.unsanitary },
    });
    fireEvent.change(screen.getByPlaceholderText(/horas/i), {
      target: { value: inputValue.hours },
    });
    fireEvent.change(screen.getByPlaceholderText(/salário/i), {
      target: { value: inputValue.salary },
    });
    fireEvent.change(screen.getByPlaceholderText(/dias faltados/i), {
      target: { value: inputValue.missingDays },
    });
    fireEvent.change(screen.getByPlaceholderText(/valor diário vtr/i), {
      target: { value: inputValue.vtr },
    });
    fireEvent.change(screen.getByPlaceholderText(/desconto de dias/i), {
      target: { value: inputValue.discountedDays },
    });

    expect(values.unsanitary).toBe(inputValue.unsanitary / 100);
    expect(values.salary).toBe(inputValue.salary / 100);
    expect(values.vtr).toBe(inputValue.vtr / 100);
    expect(values.hours).toBe(inputValue.hours);
    expect(values.missingDays).toBe(inputValue.missingDays);
    expect(values.discountedDays).toBe(inputValue.discountedDays);
  });

  it('should be able to type a name', () => {
    const value = 'John Doe';
    fireEvent.change(screen.getByPlaceholderText(/Digite o nome/i), {
      target: { value },
    });
    expect(values.name).toEqual(value);
  });

  it('should test input Date', () => {
    const value = new Date(2020, 5, 1);

    [/primeiro dia útil/i, /último dia útil/i].map((date) => {
      const dateInput = within(screen.getByText(date)).getByDisplayValue(
        /2022-11-10/i,
      );

      return fireEvent.change(dateInput, {
        target: { valueAsDate: value },
      });
    });

    expect(new Date(values.initialWorkdayMonth)).toEqual(value);
    expect(new Date(values.lastWorkdayMonth)).toEqual(value);
  });
});
