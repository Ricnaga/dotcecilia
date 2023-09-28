import { ChangeEvent, Ref, useCallback, useState } from 'react';
import { InputProps } from '../../Input';

type InputNumberBaseProps = Omit<InputProps, 'type'>;
type InputNumberProps = (props?: InputProps) => InputNumberBaseProps;

export interface UseInputNumberProps extends Omit<InputProps, 'onChange'> {
  ref?: Ref<HTMLInputElement>;
  onChange: (value: number) => void;
}

export const useInputNumber = ({
  onChange,
  ...baseProps
}: UseInputNumberProps) => {
  const [value, setValue] = useState<null | string>(null);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value.replace(/[^0-9]/g, '');

    setValue(targetValue);
    onChange(parseInt(targetValue, 10) || 0);
  }, []);

  const inputNumberProps: InputNumberProps = useCallback(
    (props = {}) => ({
      ...props,
      ...baseProps,
      onChange: handleChange,
      value: value || '',
    }),
    [baseProps, value],
  );

  return {
    inputNumberProps,
  };
};
