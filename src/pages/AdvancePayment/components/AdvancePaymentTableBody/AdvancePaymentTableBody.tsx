import { PaymentTableCell, PaymentTableRow } from '@shared/components';
import { useMemo } from 'react';
import { useAdvancePaymentTableBody } from './hooks/useAdvancePaymentTableBody';

type AdvancePaymentTableBodyProps = { salary: number };
export function AdvancePaymentTableBody({
  salary,
}: AdvancePaymentTableBodyProps) {
  const {
    data: { baseSalary, valueToPay },
  } = useAdvancePaymentTableBody({ salary });

  const valueToPayRow = useMemo(
    () => (
      <PaymentTableRow>
        <td colSpan={5}>
          <p className="my-4">Total líquido:</p>
        </td>
        <PaymentTableCell colSpan={3} className="text-center">
          {valueToPay}
        </PaymentTableCell>
      </PaymentTableRow>
    ),
    [valueToPay],
  );
  return (
    <tbody className="border-t border-slate-800">
      <tr>
        <PaymentTableCell>SALÁRIO BASE</PaymentTableCell>
        <PaymentTableCell colSpan={3} className="text-center">
          {baseSalary}
        </PaymentTableCell>
        <PaymentTableCell colSpan={2} className="text-center">
          Ref.
        </PaymentTableCell>
        <PaymentTableCell className="text-center">vencimento</PaymentTableCell>
      </tr>
      <PaymentTableRow>
        <PaymentTableCell colSpan={5}>
          <p className="mb-20">Adiantamento:</p>
        </PaymentTableCell>
        <PaymentTableCell className="text-center">
          <p className="mb-20">40</p>
        </PaymentTableCell>
        <PaymentTableCell className="text-center">
          <p className="mb-20 text-center"> {valueToPay}</p>
        </PaymentTableCell>
      </PaymentTableRow>
      {valueToPayRow}
    </tbody>
  );
}
