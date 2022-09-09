import React from 'react';
import { CalculatorPageProps } from '..';

export const useCalculator = () => {
  const [values, setValues] = React.useState<CalculatorPageProps>({
    salary: 0,
    hours: 0,
    unsanitary: false,
    minimumWage: 0,
    agreement: false,
    workedMonths: 0,
    missingDays: 0,
  });

  const onChangeValue = (key: keyof CalculatorPageProps, value: number) =>
    value
      ? setValues({
          ...values,
          [key]: value,
        })
      : setValues({
          ...values,
          [key]: 0,
        });

  const onCheckedValue = (
    key: keyof Pick<CalculatorPageProps, 'unsanitary' | 'agreement'>,
  ) => setValues({ ...values, [key]: !values[key] });
  return {
    data: { values },
    functions: { onChangeValue, onCheckedValue },
  };
};
