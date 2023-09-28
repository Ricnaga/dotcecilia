import { forwardRef } from 'react';
import { Input } from '../Input';
import { UseInputNumberProps, useInputNumber } from './hooks/useInputNumber';

type InputNumberProps = UseInputNumberProps;

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (props, ref) => {
    const { inputNumberProps } = useInputNumber({ ...props, ref });

    return <Input {...inputNumberProps()} />;
  },
);

InputNumber.displayName = 'DotCecilia.InputNumber';
