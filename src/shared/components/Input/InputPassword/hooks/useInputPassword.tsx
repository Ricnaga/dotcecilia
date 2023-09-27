import { CallBackProps } from '@shared/utils/types';
import { Ref, useCallback, useState } from 'react';
import { InputProps } from '../../Input';

type InputPasswordBaseProps = Omit<InputProps, 'endIcon' | 'type'>;

export interface UseInputPasswordProps extends InputPasswordBaseProps {
  ref?: Ref<HTMLInputElement>;
}

type InputPasswordProps = (props?: InputProps) => InputPasswordBaseProps;
type ButtonPasswordProps = CallBackProps<'button'>;

export const useInputPassword = (baseProps: UseInputPasswordProps) => {
  const [isPassword, setAsPassword] = useState<boolean>(false);

  const inputPasswordProps: InputPasswordProps = useCallback(
    (props = {}) => ({
      ...props,
      ...baseProps,
      type: isPassword ? 'text' : 'password',
    }),
    [baseProps, isPassword],
  );

  const buttonPasswordProps: ButtonPasswordProps = useCallback(
    (props = {}) => ({
      ...props,
      type: 'button',
      onClick: () => setAsPassword((state) => !state),
    }),
    [],
  );

  return {
    inputPasswordProps,
    buttonPasswordProps,
    isPassword,
  };
};
