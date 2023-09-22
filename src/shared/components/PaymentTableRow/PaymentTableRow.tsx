import { ComponentProps } from 'react';

type PaymentTableRowProps = ComponentProps<'tr'>;

export function PaymentTableRow({ className, ...props }: PaymentTableRowProps) {
  return <tr className={`border-t border-slate-800 ${className}`} {...props} />;
}
