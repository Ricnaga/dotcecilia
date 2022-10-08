import { CeciliaTableCell, CeciliaTableRow } from '@shared/components';
import { AdvancePaymentCalculatorFields } from '../AdvancePaymentCalculator/AdvancePaymentCalculator';
import { useAdvancePaymentTableBody } from './hooks/useAdvancePaymentTableBody';

type AdvancePaymentTableBodyProps = Record<
  'values',
  AdvancePaymentCalculatorFields
>;
export function AdvancePaymentTableBody({
  values,
}: AdvancePaymentTableBodyProps) {
  const {
    data: { baseSalary, valueToPay },
  } = useAdvancePaymentTableBody({ salary: values.salary });
  return (
    <tbody className="border-t border-slate-800">
      <tr>
        <CeciliaTableCell>SALÁRIO BASE</CeciliaTableCell>
        <CeciliaTableCell colSpan={3} className="text-center">
          {baseSalary}
        </CeciliaTableCell>
        <CeciliaTableCell colSpan={2} className="text-center">
          Ref.
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center">vencimento</CeciliaTableCell>
      </tr>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={5}>
          <p className="mb-20">Adiantamento:</p>
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center">
          <p className="mb-20">40</p>
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center">
          <p className="mb-20 text-center"> {valueToPay}</p>
        </CeciliaTableCell>
      </CeciliaTableRow>
      <CeciliaTableRow>
        <td colSpan={5}>
          <p className="my-4">Total líquido:</p>
        </td>
        <CeciliaTableCell colSpan={3} className="text-center">
          {valueToPay}
        </CeciliaTableCell>
      </CeciliaTableRow>
    </tbody>
  );
}
