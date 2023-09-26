import { ComponentProps } from 'react';

export type OnlyBooleanKeys<T extends object> = {
  [K in keyof T]-?: T[K] extends boolean ? K : never;
}[keyof T];

export interface CalculatorType<T extends object> extends Record<'values', T> {
  onChange: (key: keyof T, value: number | string) => void;
  onChecked?: (key: OnlyBooleanKeys<T>) => void;
  onPrint: () => void;
}

export type TitleItems<T, ExtraValue extends object = object> = Array<
  {
    title: keyof T;
    value: string | number;
  } & Partial<ExtraValue>
>;

export type ResultHook<T extends (...args: Array<unknown>) => unknown> = Record<
  'current',
  ReturnType<T>
>;

export type CallBackProps<
  T extends keyof React.JSX.IntrinsicElements,
  C extends object = object,
> = (props?: ComponentProps<T>) => Omit<ComponentProps<T>, 'className'> & C;
