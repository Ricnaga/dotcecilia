export type OnlyBooleanKeys<T extends object> = {
  [K in keyof T]-?: T[K] extends boolean ? K : never;
}[keyof T];

export type CalculatorType<T extends object> = Record<'values', T> & {
  onChange: (key: keyof T, value: number | string) => void;
  onChecked?: (key: OnlyBooleanKeys<T>) => void;
  onPrint: () => void;
};
