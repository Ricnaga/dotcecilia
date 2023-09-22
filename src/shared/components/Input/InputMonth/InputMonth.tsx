import { Input, InputProps } from '../Input';
import { useInputMonth } from './useInputMonth';

export interface InputMonthProps extends InputProps {
  label?: string;
  dateValue: Date;
  onMonthChange: (date: Date) => void;
}

export function InputMonth({
  label,
  dateValue,
  onMonthChange,
  ...props
}: InputMonthProps) {
  const {
    data: { formattedValue },
    functions: { handleMonthChange },
  } = useInputMonth({ dateValue, onMonthChange });

  return (
    <label htmlFor="month" className="text-xl">
      {label}
      <Input
        {...props}
        type="month"
        value={formattedValue}
        onChange={({ target }) =>
          target.valueAsDate && handleMonthChange(target.valueAsDate)
        }
      />
    </label>
  );
}
