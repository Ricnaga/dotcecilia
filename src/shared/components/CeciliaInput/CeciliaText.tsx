type CeciliaTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type?: 'text' | 'password';
};
export function CeciliaText({
  type = 'text',
  label,
  ...props
}: CeciliaTextProps) {
  return (
    <label htmlFor="text" className="text-2xl">
      {label}
      <input type={type} {...props} />
    </label>
  );
}
