import { ReactNode, forwardRef, useMemo } from 'react';
import { UseInputProps, useInput } from './hooks/useInput';

export type InputProps = UseInputProps;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { endIcon, errorMessage, inputProps, inputWrapperProps, startIcon } =
    useInput({ ...props, ref });

  const hasErrorMessage = errorMessage && (
    <span className="text-red-500 ml-16">{errorMessage}</span>
  );

  const hasIcon = (icon: ReactNode) => icon && icon;

  const input = useMemo(() => <input {...inputProps()} />, [inputProps]);

  const inputWrapper = useMemo(
    () => (
      <div {...inputWrapperProps()}>
        {hasIcon(startIcon)}
        {input}
        {hasIcon(endIcon)}
      </div>
    ),
    [inputWrapperProps, input],
  );

  return (
    <div>
      {inputWrapper}
      {hasErrorMessage}
    </div>
  );
});

Input.displayName = 'DotCecilia.Input';
