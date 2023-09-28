import { forwardRef, useMemo } from 'react';
import { Input } from '../Input';
import { UseInputMonthProps, useInputMonth } from './hooks/useInputMonth';

export type InputMonthProps = UseInputMonthProps;

export const InputMonth = forwardRef<HTMLInputElement, InputMonthProps>(
  (props, ref) => {
    const { inputMonthProps, label, labelProps } = useInputMonth({
      ...props,
      ref,
    });

    const input = useMemo(
      () => <Input {...inputMonthProps()} />,
      [inputMonthProps],
    );

    return (
      <label {...labelProps()} htmlFor="month">
        {label}
        {input}
      </label>
    );
  },
);

InputMonth.displayName = 'DotCecilia.InputMonth';
