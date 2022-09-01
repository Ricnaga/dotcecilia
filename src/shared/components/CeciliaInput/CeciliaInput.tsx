export function CeciliaInput({
  type = 'text',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full rounded-sm text-2xl px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-sky-900"
      type={type}
      {...props}
    />
  );
}
