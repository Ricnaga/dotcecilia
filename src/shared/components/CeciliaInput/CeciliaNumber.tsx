type CeciliaNumberProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  currency?: boolean;
  value: number;
};
export function CeciliaNumber({
  currency = false,
  value,
  label,
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
      />
    </label>
  );
}
