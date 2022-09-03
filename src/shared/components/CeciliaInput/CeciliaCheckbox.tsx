type CeciliaCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string | null;
};
export function CeciliaCheckbox({ label, ...props }: CeciliaCheckboxProps) {
  return (
    <div>
      <label className="text-xl" htmlFor="checkbox">
        <input
          type="checkbox"
          className="h-5 w-5 mr-2 mb-2 accent-sky-900"
          {...props}
        />
        {label}
      </label>
    </div>
  );
}
