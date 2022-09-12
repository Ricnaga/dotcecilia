type CeciliaTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type?: 'text' | 'password';
  value?: string;
};
export function CeciliaText({
  type = 'text',
  value,
  label,
  ...props
}: CeciliaTextProps) {
  return (
    <label htmlFor="text" className="text-xl">
      {label}
      <input type={type} value={value || ''} {...props} />
    </label>
  );
}
