import { useCallback } from 'react';
import { CeciliaDateProps } from './CeciliaDate';

type UseCeciliaDateProps = Pick<CeciliaDateProps, 'dateValue' | 'onDateChange'>;

export const useCeciliaDate = ({
  dateValue,
  onDateChange,
}: UseCeciliaDateProps) => {
  const formatDateValue = useCallback(() => {
    const [day, month, year] = new Date(dateValue)
      .toLocaleDateString('pt-br')
      .split('/');
    return `${year}-${month}-${day}`;
  }, [dateValue]);

  const formattedValue = formatDateValue();

  const handleDateChange = (date: Date) => {
    const [day, month, year] = date.toLocaleDateString('pt-br').split('/');
    onDateChange(new Date(Number(year), Number(month) - 1, Number(day) + 1));
  };

  return {
    data: {
      formattedValue,
    },
    functions: {
      handleDateChange,
    },
  };
};
