import { memo } from 'react';

type CeciliaTableCellProps = React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
> & {
  className?: string;
};

function CeciliaTableCellComp({ className, ...props }: CeciliaTableCellProps) {
  return <td className={`border-r border-slate-800 ${className}`} {...props} />;
}

export const CeciliaTableCell = memo(CeciliaTableCellComp);

CeciliaTableCell.displayName = 'CeciliaTableCell';
