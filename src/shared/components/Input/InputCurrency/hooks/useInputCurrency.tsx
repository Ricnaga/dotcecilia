import { ChangeEvent, Ref, useCallback, useState } from 'react';
import { InputProps } from '../../Input';

type InputCurrencyBaseProps = Omit<InputProps, 'onChange' | 'type'>;

export interface UseInputCurrencyProps extends InputCurrencyBaseProps {
  ref?: Ref<HTMLInputElement>;
  onChange: (value: number) => void;
}

type InputCurrencyProps = (props?: InputProps) => InputCurrencyBaseProps;

export const useInputCurrency = ({
  onChange,
  ...baseProps
}: UseInputCurrencyProps) => {
  const [value, setValue] = useState<null | string>(null);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value
      .replace(/[^0-9]/g, '')
      .padStart(3, '0')
      .replace(/^([0-9]*?)([0-9]{2})$/, '$1.$2');

    const valueNumber = parseFloat(targetValue).toFixed(2);
    const inputValue = !valueNumber
      ? ''
      : valueNumber.toString().replace('.', ',');

    setValue(inputValue);
    onChange(parseFloat(valueNumber));
  }, []);

  const inputPasswordProps: InputCurrencyProps = useCallback(
    (props = {}) => ({
      ...props,
      ...baseProps,
      onChange: handleChange,
      value: value || '',
    }),
    [baseProps, handleChange, value],
  );
  return {
    inputPasswordProps,
  };
};
