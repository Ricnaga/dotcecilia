type CeciliaTableRowProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement & {
    className?: string;
  }
>;

export function CeciliaTableRow({ className, ...props }: CeciliaTableRowProps) {
  return <tr className={`border-t border-slate-800 ${className}`} {...props} />;
}
