import { useCeciliaMonth } from './useCeciliaMonth';

export type CeciliaMonthProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  dateValue: Date;
  onMonthChange: (date: Date) => void;
};

export function CeciliaMonth({
  label,
  dateValue,
  onMonthChange,
  ...props
}: CeciliaMonthProps) {
  const {
    data: { formattedValue },
    functions: { handleMonthChange },
  } = useCeciliaMonth({ dateValue, onMonthChange });

  return (
    <label htmlFor="month" className="text-xl">
      {label}
      <input
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
