import { ComponentProps } from 'react';

type CalculatorTrProps = ComponentProps<'tr'>;

export function CalculatorTr(props: CalculatorTrProps) {
  return <tr {...props} className="border-t" />;
}
