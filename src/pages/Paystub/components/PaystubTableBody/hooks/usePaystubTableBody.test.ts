import { renderHook } from '@testing-library/react';
import { PaystubCalculatorFields } from '../../PaystubCalculator/PaystubCalculator';
import { usePaystubTableBody } from './usePaystubTableBody';

jest.mock('@shared/hooks/useCalc', () => ({
  __esModule: true,
  useCalc: () => ({
    toBRL: jest.fn(),
    getExtraHour: jest.fn(),
    getUnsanitary: jest.fn(),
    getPreviousAdvanceValue: jest.fn(),
    getVTRDiscountValue: jest.fn(),
    getMissingDays: jest.fn(() => 1),
    getVTR: jest.fn(),
    getPreviousAdvance: jest.fn(),
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

  it('test all data', () => {
    const { result } = renderHook(() => usePaystubTableBody({ values }));
    expect(result.current.data.formattedHours).toBeDefined();
    expect(result.current.data.formattedMissingDays).toBeDefined();
    expect(result.current.data.formattedValues).toBeDefined();
    expect(result.current.data.formattedVtr).toBeDefined();
  });
});
