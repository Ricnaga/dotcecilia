import { renderHook } from '@testing-library/react';
import { PaystubCalculatorFields } from '../../PaystubCalculator/PaystubCalculator';
import { usePaystubTableBody } from './usePaystubTableBody';

jest.mock('@shared/hooks/useCalcPayments', () => ({
  __esModule: true,
  useCalcPayments: () => ({
    functions: {
      formatBRL: (value: number) => value,
      getExtraHour: (args: Record<'percentage' | 'money' | 'hours', number>) =>
        args.money,
      getUnsanitaryValue: (value: number) => value,
      getPreviousAdvanceValue: jest.fn(),
      getVTRDiscountValue: jest.fn(),
    },
  }),
}));

const values: PaystubCalculatorFields = {
  name: '',
  hasUnsanitary: true,
  unsanitary: 10000,
  extraHour: true,
  fullExtra: true,
  hours: 0,
  salary: 0,
  initialWorkdayMonth: new Date(2022, 10, 10),
  lastWorkdayMonth: new Date(2022, 10, 10),
  vtr: 0,
  missingDays: 0,
  discountedDays: 0,
};

describe('Hooks: usePaystubTableBody', () => {
  it('test extraHour values', () => {
    const { result } = renderHook(() => usePaystubTableBody({ values }));
    expect(result.current.data.formattedHours.extraHour).toBeFalsy();
    expect(result.current.data.formattedHours.fullExtra).toBeTruthy();
  });

  it('test unsanitary functions', () => {
    const { result } = renderHook(() => usePaystubTableBody({ values }));
    expect(result.current.data.formattedValues.total.slice(1)).toBe(
      '10.000,00',
    );

    const { result: resultHook } = renderHook(() =>
      usePaystubTableBody({
        values: { ...values, hasUnsanitary: false, unsanitary: 100 },
      }),
    );
    expect(resultHook.current.data.formattedValues.total.slice(1)).toBe('0,00');
  });
});
