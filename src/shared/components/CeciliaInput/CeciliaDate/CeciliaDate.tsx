import { useCeciliaDate } from './useCeciliaDate';

export type CeciliaDateProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  dateValue: Date;
  onDateChange: (date: Date) => void;
};
export function CeciliaDate({
  label,
  dateValue,
  onDateChange,
  ...props
}: CeciliaDateProps) {
  const {
    data: { formattedValue },
    functions: { handleDateChange },
  } = useCeciliaDate({ dateValue, onDateChange });

  return (
    <label htmlFor="date" className="text-xl">
      {label}
      <input
        {...props}
        type="date"
        value={formattedValue}
        onChange={({ target }) =>
          target.valueAsDate && handleDateChange(target.valueAsDate)
        }
      />
    </label>
  );
}
