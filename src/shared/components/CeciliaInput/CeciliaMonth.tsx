type CeciliaMonthProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};
export function CeciliaMonth({ label, ...props }: CeciliaMonthProps) {
  return (
    <label htmlFor="month" className="text-xl">
      {label}
      <input type="month" {...props} />
    </label>
  );
}
