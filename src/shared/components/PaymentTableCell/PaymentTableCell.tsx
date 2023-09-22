import { ComponentProps, memo } from 'react';

type PaymentTableCellProps = ComponentProps<'td'>;

function PaymentTableCellComp({ className, ...props }: PaymentTableCellProps) {
  return <td className={`border-r border-slate-800 ${className}`} {...props} />;
}

export const PaymentTableCell = memo(PaymentTableCellComp);

PaymentTableCell.displayName = 'PaymentTableCell';
