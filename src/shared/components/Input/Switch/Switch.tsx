import { InputProps } from '../Input';

interface SwitchProps extends InputProps {
  label?: string;
}

export function Switch({ label, ...props }: SwitchProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg leading-6 font-medium">{label}</span>
      <label className="checkbox-container" htmlFor={label}>
        <input {...props} id={label} type="checkbox" className="peer sr-only" />
        <div className="checkbox-button peer peer-checked:bg-teal-700 peer-checked:after:translate-x-full peer-checked:after:border-teal-700 peer-focus:ring-green-800" />
      </label>
    </div>
  );
}
