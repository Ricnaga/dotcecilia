type CeciliaDateProps = React.InputHTMLAttributes<HTMLInputElement> & {
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
  const formatDateValue = () => {
    const [day, month, year] = new Date(dateValue)
      .toLocaleDateString('pt-br')
      .split('/');
    return `${year}-${month}-${day}`;
  };

  const formattedValue = formatDateValue();

  const handleDateChange = (date: Date) => {
    const [day, month, year] = date.toLocaleDateString('pt-br').split('/');
    onDateChange(new Date(Number(year), Number(month) - 1, Number(day) + 1));
  };

  return (
    <label htmlFor="date" className="text-xl">
      {label}
      <input
        {...props}
        type="date"
        value={formattedValue}
        onChange={({ target }) =>
          handleDateChange(target.valueAsDate ?? new Date())
        }
      />
    </label>
  );
}
