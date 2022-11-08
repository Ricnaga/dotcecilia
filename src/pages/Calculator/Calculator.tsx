import { CeciliaPageHeader } from '@shared/components';
import { useInputFields } from '@shared/hooks/useInputFields';
import { useMemo } from 'react';
import {
  CalculatorDiscount,
  CalculatorDiscountData,
  CalculatorExtraHour,
  CalculatorExtraHourData,
  CalculatorTotalList,
} from './components';

export type CalculatorPageProps = CalculatorExtraHourData &
  CalculatorDiscountData;

export function CalculatorPage() {
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

  const calculatorExtraHourMemoized = useMemo(
    () => (
      <CalculatorExtraHour
        onChangeExtraHour={onChangeValue}
        extraHour={values}
        onCheckedExtraHour={onCheckedValue}
      />
    ),
    [
      values.agreement,
      values.hours,
      values.minimumWage,
      values.salary,
      values.unsanitary,
      values.workedMonths,
    ],
  );

  const calculatorDiscountMemoized = useMemo(
    () => (
      <CalculatorDiscount discount={values} onChangeDiscount={onChangeValue} />
    ),
    [values.missingDays],
  );

  return (
    <CeciliaPageHeader title="Calculadora">
      <div className="grid grid-cols-12 gap-10">
        <div className="grid grid-cols-12 col-span-8">
          <div className="col-span-12">{calculatorExtraHourMemoized}</div>
          <div className="col-span-12">{calculatorDiscountMemoized}</div>
        </div>
        <div className="col-span-4">
          <CalculatorTotalList values={values} />
        </div>
      </div>
    </CeciliaPageHeader>
  );
}
