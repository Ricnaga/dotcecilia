type CeciliaNumberProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  currency?: boolean;
  value: number;
  onChangeValue?: (value: number) => void;
};
export function CeciliaNumber({
  currency = false,
  value,
  label,
  onChangeValue,
  ...props
}: CeciliaNumberProps) {
  return (
    <label htmlFor="text" className="text-2xl">
      {label}
      <input
        {...props}
        value={value || ''}
        type="number"
        min={currency ? '0.00' : '0'}
        step={currency ? '0.01' : '1'}
        onChange={({ target }) =>
          onChangeValue && onChangeValue(target.valueAsNumber)
        }
      />
    </label>
  );
}
