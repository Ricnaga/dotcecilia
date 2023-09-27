import { CallBackProps } from '@shared/utils/types';
import { ComponentProps, ReactNode, Ref, useCallback } from 'react';

export interface UseInputProps extends ComponentProps<'input'> {
  ref?: Ref<HTMLInputElement>;
  errorMessage?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

type InputWrapperProps = CallBackProps<'div'>;
type InputProps = CallBackProps<'input'>;

export const useInput = ({
  type = 'text',
  errorMessage,
  startIcon,
  endIcon,
  ...baseProps
}: UseInputProps) => {
  const inputWrapperProps: InputWrapperProps = useCallback(
    (props = {}) => ({
      ...props,
      'data-error': !!errorMessage,
      'data-variants': 'input-wrapper',
    }),
    [errorMessage],
  );

  const inputProps: InputProps = useCallback(
    (props = {}) => ({
      ...props,
      ...baseProps,
      type,
      'data-variants': 'input',
    }),
    [baseProps],
  );

  return {
    inputProps,
    inputWrapperProps,
    errorMessage,
    startIcon,
    endIcon,
  };
};
