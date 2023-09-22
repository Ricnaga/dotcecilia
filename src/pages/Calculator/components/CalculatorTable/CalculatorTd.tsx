import { ComponentProps } from 'react';

type CalculatorTdProps = ComponentProps<'td'>;

export function CalculatorTd(props: CalculatorTdProps) {
  return <td {...props} className="px-6 py-1" />;
}
