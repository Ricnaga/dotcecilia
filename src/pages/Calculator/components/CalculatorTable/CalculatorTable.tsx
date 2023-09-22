import { PropsWithChildren } from 'react';

type CalculatorTableProps = {
  title: string;
  total?: string;
};

export type TBodyKey = Array<Record<'label' | 'value', string>>;

export function CalculatorTable({
  title,
  children,
  total,
}: PropsWithChildren<CalculatorTableProps>) {
  return (
    <table className="bg-teal-600 text-gray-100 rounded-xl hover:brightness-105 transition-all">
      <thead>
        <tr>
          <th
            colSpan={2}
            className="bg-teal-700 rounded-t-xl text-xlg font-bold leading-5 text-center p-2"
          >
            {title}
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
      {total && (
        <tfoot>
          <tr>
            <td colSpan={2} align="center" className="p-2 border-t">
              Total: {total}
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  );
}
