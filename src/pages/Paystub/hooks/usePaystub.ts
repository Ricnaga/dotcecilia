import { useInputFields } from '@shared/hooks/useInputFields';
import { useReactPrint } from '@shared/hooks/useReactPrint';
import { PaystubCalculatorFields } from '../components/PaystubCalculator/PaystubCalculator';

export const usePaystub = () => {
  const {
    data: { printRef },
    functions: { setPrint },
  } = useReactPrint();

  const {
    data: { values },
    functions: { onChangeValue, onCheckedValue },
  } = useInputFields<PaystubCalculatorFields>({
    name: '',
    hasUnsanitary: false,
    unsanitary: 0,
    extraHour: false,
    fullExtra: false,
    hours: 0,
    salary: 0,
    initialWorkdayMonth: new Date().toString(),
    lastWorkdayMonth: new Date().toString(),
    vtr: 0,
    missingDays: 0,
    discountedDays: 0,
  });

  return {
    data: { printRef, values },
    functions: { setPrint, onChangeValue, onCheckedValue },
  };
};
