type CeciliaTableCellProps = React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
> & {
  className?: string;
};

export function CeciliaTableCell({
  className,
  ...props
}: CeciliaTableCellProps) {
  return <td className={`border-r border-slate-800 ${className}`} {...props} />;
}
