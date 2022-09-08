type PaystubTableRowProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement & {
    className?: string;
  }
>;

export function PaystubTableRow({ className, ...props }: PaystubTableRowProps) {
  return <tr className={`border-t border-slate-800 ${className}`} {...props} />;
}
