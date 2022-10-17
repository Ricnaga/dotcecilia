import { CeciliaMonthProps } from './CeciliaMonth';

type UseCeciliaMonthProps = Pick<
  CeciliaMonthProps,
  'dateValue' | 'onMonthChange'
>;

export const useCeciliaMonth = ({
  dateValue,
  onMonthChange,
}: UseCeciliaMonthProps) => {
  const formatMonthValue = () => {
    const [__, month, year] = new Date(dateValue)
      .toLocaleDateString('pt-br')
      .split('/');
    return `${year}-${month}`;
  };

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
