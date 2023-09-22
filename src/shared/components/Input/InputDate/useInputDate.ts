import { ChangeEvent, useCallback } from 'react';
import { InputDateProps } from './InputDate';

type UseInputDateProps = Pick<InputDateProps, 'dateValue' | 'onDateChange'>;

export const useInputDate = ({
  dateValue,
  onDateChange,
}: UseInputDateProps) => {
  const formatDateValue = useCallback(() => {
    const [day, month, year] = new Date(dateValue)
      .toLocaleDateString('pt-br')
      .split('/');
    return `${year}-${month}-${day}`;
  }, [dateValue]);

  const formattedValue = formatDateValue();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const date = event.target.valueAsDate || new Date();

    const [day, month, year] = date.toLocaleDateString('pt-br').split('/');

    onDateChange(new Date(Number(year), Number(month) - 1, Number(day) + 1));
  };

  return {
    data: {
      formattedValue,
    },
    functions: {
      onChange,
    },
  };
};
