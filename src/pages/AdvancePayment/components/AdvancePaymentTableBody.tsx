import { CeciliaTableCell, CeciliaTableRow } from 'shared/components';

export function AdvancePaymentTableBody() {
  return (
    <tbody className="border-t border-slate-800">
      <tr>
        <CeciliaTableCell>SALÁRIO BASE</CeciliaTableCell>
        <CeciliaTableCell colSpan={3} className="text-center">
          R$ 12,52
        </CeciliaTableCell>
        <CeciliaTableCell colSpan={2} className="text-center">
          Ref.
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center">vencimento</CeciliaTableCell>
        <CeciliaTableCell className="text-center">desconto</CeciliaTableCell>
      </tr>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={5}>
          <p className="mb-20">Adiantamento:</p>
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center">
          <p className="mb-20">40</p>
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center">
          <p className="mb-20 text-center">R$ 49,50</p>
        </CeciliaTableCell>
        <CeciliaTableCell>
          <p className="mb-20 text-center">R$ 0,00</p>
        </CeciliaTableCell>
      </CeciliaTableRow>
      <CeciliaTableRow>
        <td colSpan={5}>
          <p className="my-4">Total líquido:</p>
        </td>
        <CeciliaTableCell colSpan={3} className="text-center">
          R$ 12,25
        </CeciliaTableCell>
      </CeciliaTableRow>
    </tbody>
  );
}
