type CeciliaDateProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};
export function CeciliaDate({ label, ...props }: CeciliaDateProps) {
  return (
    <label htmlFor="date" className="text-xl">
      {label}
      <input type="date" {...props} />
    </label>
  );
}
