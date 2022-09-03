type CeciliaNumberProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  currency?: boolean;
};
export function CeciliaNumber({
  currency = false,
  label,
  ...props
}: CeciliaNumberProps) {
  return (
    <label htmlFor="text" className="text-2xl">
      {label}
      <input
        type="number"
        {...props}
        min={currency ? '0.00' : '0'}
        step={currency ? '0.01' : '1'}
      />
    </label>
  );
}
