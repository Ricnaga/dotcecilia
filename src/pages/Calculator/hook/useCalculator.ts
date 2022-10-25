import { useInputFields } from '@shared/hooks/useInputFields';
import { CalculatorPageProps } from '../Calculator';

export const useCalculator = () => {
  const {
    data: { values },
    functions: { onChangeValue, onCheckedValue },
  } = useInputFields<CalculatorPageProps>({
    salary: 0,
    hours: 0,
    unsanitary: false,
    minimumWage: 0,
    agreement: false,
    workedMonths: 0,
    missingDays: 0,
  });
  return {
    data: { values },
    functions: { onChangeValue, onCheckedValue },
  };
};
