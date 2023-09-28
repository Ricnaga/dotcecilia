import { forwardRef, useMemo } from 'react';
import { UseSwitchProps, useSwitch } from './hooks/useSwitch';

type SwitchProps = UseSwitchProps;

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const {
      containerProps,
      innerWrapperProps,
      inputProps,
      labelProps,
      wrapperProps,
      label,
    } = useSwitch({ ...props, ref });

    const input = useMemo(() => <input {...inputProps()} />, [inputProps]);
    const innerWrapper = useMemo(
      () => <div {...innerWrapperProps()} />,
      [innerWrapperProps],
    );

    const wrapper = useMemo(
      () => (
        <label {...wrapperProps()} htmlFor={label}>
          {input}
          {innerWrapper}
        </label>
      ),
      [wrapperProps, input, label],
    );

    const switchLabel = useMemo(
      () => <span {...labelProps()}>{label}</span>,
      [labelProps],
    );

    return (
      <div {...containerProps()}>
        {switchLabel}
        {wrapper}
      </div>
    );
  },
);

Switch.displayName = 'DotCecilia.Switch';
