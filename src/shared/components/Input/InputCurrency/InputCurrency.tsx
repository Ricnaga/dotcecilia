import { ChangeEvent, useState } from 'react';
import { Input, InputProps } from '../Input';

interface InputCurrencyProps extends Omit<InputProps, 'onChange'> {
  onChange: (value: number) => void;
}

export function InputCurrency({ onChange, ...props }: InputCurrencyProps) {
  const [value, setValue] = useState<null | string>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
  };

  return <Input {...props} onChange={handleChange} value={value || ''} />;
}
