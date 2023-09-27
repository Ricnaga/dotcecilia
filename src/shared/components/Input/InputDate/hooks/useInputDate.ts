import { ChangeEvent, Ref, useCallback } from 'react';
import { InputProps } from '../../Input';

type InputDateBaseProps = Omit<InputProps, 'type'>;
type InputDateProps = (props?: InputProps) => InputDateBaseProps;

export interface UseInputDateProps extends InputProps {
  ref?: Ref<HTMLInputElement>;
  label?: string;
  dateValue: Date;
  onDateChange: (date: Date) => void;
}

export const useInputDate = ({
  label,
  dateValue,
  onDateChange,
  ...baseProps
}: UseInputDateProps) => {
  const formatDateValue = useCallback(() => {
    const [day, month, year] = new Date(dateValue)
      .toLocaleDateString('pt-br')
      .split('/');
    return `${year}-${month}-${day}`;
  }, [dateValue]);

  const formattedValue = formatDateValue();

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const date = event.target.valueAsDate || new Date();

    const [day, month, year] = date.toLocaleDateString('pt-br').split('/');

    onDateChange(new Date(Number(year), Number(month) - 1, Number(day) + 1));
  }, []);

  const inputDateProps: InputDateProps = useCallback(
    (props = {}) => ({
      ...props,
      ...baseProps,
      type: 'date',
      value: formattedValue,
      onChange,
    }),
    [baseProps],
  );

  return {
    label,
    inputDateProps,
  };
};
