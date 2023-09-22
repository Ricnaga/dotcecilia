import { ChangeEvent, useState } from 'react';
import { Input, InputProps } from '../Input';

interface InputNumberProps extends Omit<InputProps, 'onChange'> {
  onChange: (value: number) => void;
}

export function InputNumber({ onChange, ...props }: InputNumberProps) {
  const [value, setValue] = useState<null | string>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value.replace(/[^0-9]/g, '');

    setValue(targetValue);
    onChange(parseInt(targetValue, 10) || 0);
  };

  return <Input {...props} onChange={handleChange} value={value || ''} />;
}
