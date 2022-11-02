import { OnlyBooleanKeys } from '@shared/utils/types';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    await userEvent.click(
      screen.getByRole('switch', {
        name: /insalubridade \?/i,
      }),
    );
    await userEvent.click(
      screen.getByRole('switch', {
        name: /he\?/i,
      }),
    );
    await userEvent.click(
      screen.getByRole('switch', {
        name: /100% \?/i,
      }),
    );

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
      target: { valueAsNumber: inputValue.unsanitary },
    });
    fireEvent.change(screen.getByPlaceholderText(/horas/i), {
      target: { valueAsNumber: inputValue.hours },
    });
    fireEvent.change(screen.getByPlaceholderText(/salário/i), {
      target: { valueAsNumber: inputValue.salary },
    });
    fireEvent.change(screen.getByPlaceholderText(/dias faltados/i), {
      target: { valueAsNumber: inputValue.missingDays },
    });
    fireEvent.change(screen.getByPlaceholderText(/valor diário vtr/i), {
      target: { valueAsNumber: inputValue.vtr },
    });
    fireEvent.change(screen.getByPlaceholderText(/desconto de dias/i), {
      target: { valueAsNumber: inputValue.discountedDays },
    });

    expect(values.unsanitary).toBe(inputValue.unsanitary);
    expect(values.hours).toBe(inputValue.hours);
    expect(values.salary).toBe(inputValue.salary);
    expect(values.missingDays).toBe(inputValue.missingDays);
    expect(values.vtr).toBe(inputValue.vtr);
    expect(values.discountedDays).toBe(inputValue.discountedDays);
  });

  it('should be able to type a name', () => {
    const value = 'John Doe';
    fireEvent.change(screen.getByRole('textbox'), {
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
