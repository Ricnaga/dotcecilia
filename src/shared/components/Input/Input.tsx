import { ComponentProps } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  isError?: boolean;
  errorMessage?: string;
}

export function Input({
  type = 'text',
  errorMessage,
  isError = false,
  ...props
}: InputProps) {
  return (
    <div>
      <div data-error={isError} data-variants="input-wrapper">
        <input type={type} data-variants="input" {...props} />
      </div>
      {errorMessage && (
        <span className="text-red-500 ml-8">{errorMessage}</span>
      )}
    </div>
  );
}
