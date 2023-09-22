import { Input, InputProps } from '../Input';
import { useInputDate } from './useInputDate';

export interface InputDateProps extends InputProps {
  label?: string;
  dateValue: Date;
  onDateChange: (date: Date) => void;
}
export function InputDate({
  label,
  dateValue,
  onDateChange,
  ...props
}: InputDateProps) {
  const {
    data: { formattedValue },
    functions: { onChange },
  } = useInputDate({ dateValue, onDateChange });

  return (
    <label htmlFor="date" className="text-lg ml-8 leading-6 font-medium">
      {label}
      <Input
        {...props}
        type="date"
        value={formattedValue}
        onChange={onChange}
      />
    </label>
  );
}
