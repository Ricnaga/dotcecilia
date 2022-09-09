import {
  CeciliaTableCell,
  CeciliaTableRow,
} from '../../../../shared/components';

export function AgreementTableBody() {
  return (
    <tbody className="border-t border-slate-800">
      <tr>
        <CeciliaTableCell colSpan={3}>SALÁRIO:</CeciliaTableCell>
        <CeciliaTableCell className="text-center" colSpan={2}>
          -
        </CeciliaTableCell>
        <CeciliaTableCell colSpan={2} className="text-center">
          Pagar
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center">Desconto</CeciliaTableCell>
      </tr>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={3}>13º</CeciliaTableCell>
        <CeciliaTableCell className="text-center" colSpan={2}>
          -
        </CeciliaTableCell>
        <CeciliaTableCell colSpan={2} className="text-center">
          R$ 25,00
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center" />
      </CeciliaTableRow>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={3}>FÉRIAS</CeciliaTableCell>
        <CeciliaTableCell className="text-center" colSpan={2}>
          -
        </CeciliaTableCell>
        <CeciliaTableCell colSpan={2} className="text-center">
          R$ 25,00
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center" />
      </CeciliaTableRow>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={3}>1/3 - Férias</CeciliaTableCell>
        <CeciliaTableCell className="text-center" colSpan={2}>
          -
        </CeciliaTableCell>
        <CeciliaTableCell colSpan={2} className="text-center">
          R$ 25,00
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center" />
      </CeciliaTableRow>

      <CeciliaTableRow>
        <td colSpan={6}>
          <p className="mt-4 border-t border-slate-800">Sub.total:</p>
        </td>
        <td className="text-center">
          <p className="mt-4 border-t border-slate-800">R$ 12,25</p>
        </td>
        <CeciliaTableCell className="text-center">
          <p className="mt-4 border-t border-slate-800">R$ 12,25</p>
        </CeciliaTableCell>
      </CeciliaTableRow>
      <CeciliaTableRow>
        <td colSpan={5} className="border-b border-slate-800">
          <p className="mb-4 border-b border-slate-800">Total á pagar:</p>
        </td>
        <CeciliaTableCell colSpan={3} className="text-center">
          <p className="mb-4 border-b border-slate-800">R$ 12,25</p>
        </CeciliaTableCell>
      </CeciliaTableRow>
    </tbody>
  );
}
