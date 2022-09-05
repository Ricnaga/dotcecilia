import React from 'react';
import { Switch } from '@headlessui/react';

type CeciliaCheckboxProps = {
  label?: string | null;
};
export function CeciliaCheckbox({ label }: CeciliaCheckboxProps) {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4">{label}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`btn-switch ${enabled && 'bg-teal-500'} `}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}
