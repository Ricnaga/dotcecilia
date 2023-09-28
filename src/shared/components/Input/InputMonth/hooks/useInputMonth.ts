import { useCallback } from 'react';
import { CallBackProps } from '@shared/utils/types';
import { InputProps } from '../../Input';

type InputMonthBaseProps = Omit<InputProps, 'type'>;
type InputMonthProps = (props?: InputProps) => InputMonthBaseProps;
type LabelProps = CallBackProps<'label'>;

export interface UseInputMonthProps extends Omit<InputProps, 'onChange'> {
  label?: string;
  dateValue: Date;
  onMonthChange: (date: Date) => void;
}

export const useInputMonth = ({
  dateValue,
  onMonthChange,
  label,
  ...baseProps
}: UseInputMonthProps) => {
  const formatMonthValue = useCallback(() => {
    const [__, month, year] = new Date(dateValue)
      .toLocaleDateString('pt-br')
      .split('/');
    return `${year}-${month}`;
  }, [dateValue]);

  const formattedValue = formatMonthValue();

  const handleMonthChange = useCallback((date: Date) => {
    const [day, month, year] = date.toLocaleDateString('pt-br').split('/');
    onMonthChange(new Date(Number(year), Number(month) - 1, Number(day) + 1));
  }, []);

  const inputMonthProps: InputMonthProps = useCallback(
    (props = {}) => ({
      ...props,
      ...baseProps,
      type: 'month',
      value: formattedValue,
      onChange: ({ target }) =>
        target.valueAsDate && handleMonthChange(target.valueAsDate),
    }),
    [baseProps],
  );

  const labelProps: LabelProps = useCallback(
    (props = {}) => ({
      ...props,
      className: 'text-xl',
    }),
    [],
  );

  return {
    inputMonthProps,
    labelProps,
    label,
  };
};
