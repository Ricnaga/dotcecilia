import { OnlyBooleanKeys } from '@shared/utils/types';
import { useState } from 'react';

export const useInputFields = <T extends object>(inputValues: T) => {
  const [values, setValues] = useState<T>(inputValues);

  const onChangeValue = (key: keyof T, value: number | string) =>
    setValues((state) =>
      value ? { ...state, [key]: value } : { ...state, [key]: 0 },
    );

  const onCheckedValue = (key: OnlyBooleanKeys<T>) =>
    setValues((state) => ({ ...state, [key]: !state[key] }));

  return {
    data: { values },
    functions: { onChangeValue, onCheckedValue },
  };
};
