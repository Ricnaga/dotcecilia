import { Switch } from '@headlessui/react';

type CeciliaCheckboxProps = {
  label?: string | null;
  checked: boolean;
  onChecked: () => void;
};
export function CeciliaCheckbox({
  checked,
  onChecked,
  label,
}: CeciliaCheckboxProps) {
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4">{label}</Switch.Label>
        <Switch
          checked={checked}
          onChange={onChecked}
          className={`btn-switch ${checked && 'bg-teal-500'} `}
        >
          <span
            className={`${
              checked ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}
