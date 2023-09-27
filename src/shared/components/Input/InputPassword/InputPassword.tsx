import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import { forwardRef, useMemo } from 'react';
import { Input } from '../Input';
import {
  UseInputPasswordProps,
  useInputPassword,
} from './hooks/useInputPassword';

type InputPasswordProps = UseInputPasswordProps;

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  (props, ref) => {
    const { buttonPasswordProps, inputPasswordProps, isPassword } =
      useInputPassword({ ...props, ref });

    const isShowPassword = useMemo(
      () => (
        <button {...buttonPasswordProps()}>
          {isPassword ? <EyeSlashIcon width={24} /> : <EyeIcon width={24} />}
        </button>
      ),
      [isPassword],
    );

    return <Input {...inputPasswordProps()} endIcon={isShowPassword} />;
  },
);
