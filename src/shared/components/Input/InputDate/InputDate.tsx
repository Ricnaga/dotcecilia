import { forwardRef } from 'react';
import { Input } from '../Input';
import { UseInputDateProps, useInputDate } from './hooks/useInputDate';

export interface InputDateProps extends UseInputDateProps {}

export const InputDate = forwardRef<HTMLInputElement, InputDateProps>(
  (props, ref) => {
    const { inputDateProps, label } = useInputDate({ ...props, ref });

    return (
      <label htmlFor="date" className="text-lg ml-8 leading-6 font-medium">
        {label}
        <Input {...inputDateProps()} />
      </label>
    );
  },
);

InputDate.displayName = 'DotCecilia.InputDate';
