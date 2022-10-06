import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { PaystubCalculatorFields } from '../components/PaystubCalculator/PaystubCalculator';

export const usePaystub = () => {
  const tableRef = useRef<HTMLTableElement>(null);
  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });
  const [values, setValues] = useState<PaystubCalculatorFields>({
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
  const onChangeValue = (
    key: keyof PaystubCalculatorFields,
    value: number | string,
  ) =>
    setValues((state) =>
      value ? { ...state, [key]: value } : { ...state, [key]: 0 },
    );

  const onCheckedValue = (
    key: keyof Pick<
      PaystubCalculatorFields,
      'hasUnsanitary' | 'extraHour' | 'fullExtra'
    >,
  ) => setValues((state) => ({ ...state, [key]: !state[key] }));

  return {
    data: { tableRef, values },
    functions: { handlePrint, onChangeValue, onCheckedValue },
  };
};
