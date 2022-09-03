type CeciliaTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};
export function CeciliaText({ label, ...props }: CeciliaTextProps) {
  return (
    <label htmlFor="text" className="text-2xl">
      {label}
      <input type="text" {...props} />
    </label>
  );
}
