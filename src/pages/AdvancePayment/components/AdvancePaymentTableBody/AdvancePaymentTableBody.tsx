import { CeciliaTableCell, CeciliaTableRow } from '@shared/components';
import { AdvancePaymentCalculatorFields } from '../AdvancePaymentCalculator/AdvancePaymentCalculator';

type AdvancePaymentTableBodyProps = Record<
  'values',
  AdvancePaymentCalculatorFields
>;
export function AdvancePaymentTableBody({
  values,
}: AdvancePaymentTableBodyProps) {
  return (
    <tbody className="border-t border-slate-800">
      <tr>
        <CeciliaTableCell>SALÁRIO BASE</CeciliaTableCell>
        <CeciliaTableCell colSpan={3} className="text-center">
          {values.salary}
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
          <p className="mb-20 text-center"> {values.salary * 0.4}</p>
        </CeciliaTableCell>
      </CeciliaTableRow>
      <CeciliaTableRow>
        <td colSpan={5}>
          <p className="my-4">Total líquido:</p>
        </td>
        <CeciliaTableCell colSpan={3} className="text-center">
          {values.salary * 0.4}
        </CeciliaTableCell>
      </CeciliaTableRow>
    </tbody>
  );
}
