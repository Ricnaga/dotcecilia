import { useCallback } from 'react';
import { InputMonthProps } from './InputMonth';

type UseInputMonthProps = Pick<InputMonthProps, 'dateValue' | 'onMonthChange'>;

export const useInputMonth = ({
  dateValue,
  onMonthChange,
}: UseInputMonthProps) => {
  const formatMonthValue = useCallback(() => {
    const [__, month, year] = new Date(dateValue)
      .toLocaleDateString('pt-br')
      .split('/');
    return `${year}-${month}`;
  }, [dateValue]);

  const formattedValue = formatMonthValue();

  const handleMonthChange = (date: Date) => {
    const [day, month, year] = date.toLocaleDateString('pt-br').split('/');
    onMonthChange(new Date(Number(year), Number(month) - 1, Number(day) + 1));
  };

  return {
    data: {
      formattedValue,
    },
    functions: {
      handleMonthChange,
    },
  };
};
