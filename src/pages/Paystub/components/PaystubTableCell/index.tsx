type PaystubTableCellProps = React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
> & {
  className?: string;
};

export function PaystubTableCell({
  className,
  ...props
}: PaystubTableCellProps) {
  return <td className={`border-r border-slate-800 ${className}`} {...props} />;
}
