import { forwardRef } from 'react';
import { Input } from '../Input';
import {
  UseInputCurrencyProps,
  useInputCurrency,
} from './hooks/useInputCurrency';

interface InputCurrencyProps extends UseInputCurrencyProps {}

export const InputCurrency = forwardRef<HTMLInputElement, InputCurrencyProps>(
  (props, ref) => {
    const { inputPasswordProps } = useInputCurrency({ ...props, ref });

    return <Input {...inputPasswordProps()} />;
  },
);

InputCurrency.displayName = 'DotCecilia.InputCurrency';
