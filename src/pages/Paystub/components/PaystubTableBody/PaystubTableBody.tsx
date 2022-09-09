import {
  CeciliaTableCell,
  CeciliaTableRow,
} from '../../../../shared/components';

export function PaystubTableBody() {
  return (
    <tbody className="border-t border-slate-800">
      <tr>
        <CeciliaTableCell colSpan={3} />
        <CeciliaTableCell colSpan={1} className="text-center">
          Ref.
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center">Vencimento</CeciliaTableCell>
        <CeciliaTableCell colSpan={2} className="text-center">
          Descontos
        </CeciliaTableCell>
      </tr>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={3}>Salário do mês</CeciliaTableCell>
        <CeciliaTableCell colSpan={1} className="text-center">
          30
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center">-</CeciliaTableCell>
        <CeciliaTableCell colSpan={2} />
      </CeciliaTableRow>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={3}>Hora extra 60%</CeciliaTableCell>
        <CeciliaTableCell colSpan={1} className="text-center">
          0
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center">-</CeciliaTableCell>
        <CeciliaTableCell colSpan={2} />
      </CeciliaTableRow>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={3}>Hora extra 100%</CeciliaTableCell>
        <CeciliaTableCell colSpan={1} className="text-center">
          0
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center">-</CeciliaTableCell>
        <CeciliaTableCell colSpan={2} />
      </CeciliaTableRow>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={3}>Insalubridade</CeciliaTableCell>
        <CeciliaTableCell colSpan={1} className="text-center">
          0
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center">-</CeciliaTableCell>
        <CeciliaTableCell colSpan={2} />
      </CeciliaTableRow>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={2}>Vtr - (01 à 30/09/22)</CeciliaTableCell>
        <CeciliaTableCell className="text-center ">12,25</CeciliaTableCell>
        <CeciliaTableCell className="text-center ">12,25</CeciliaTableCell>
        <CeciliaTableCell className="text-center ">-</CeciliaTableCell>
      </CeciliaTableRow>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={3}>Falta dia</CeciliaTableCell>
        <CeciliaTableCell className="text-center">0</CeciliaTableCell>
        <CeciliaTableCell className="text-center">-</CeciliaTableCell>
        <CeciliaTableCell className="text-center" colSpan={2}>
          -
        </CeciliaTableCell>
      </CeciliaTableRow>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={3}>Adiantamento anterior</CeciliaTableCell>
        <CeciliaTableCell className="text-center" />
        <CeciliaTableCell className="text-center" />
        <CeciliaTableCell className="text-center" colSpan={2}>
          -
        </CeciliaTableCell>
      </CeciliaTableRow>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={3}>Desconto 6% Vtr</CeciliaTableCell>
        <CeciliaTableCell className="text-center" />
        <CeciliaTableCell className="text-center" />
        <CeciliaTableCell className="text-center" colSpan={2}>
          -
        </CeciliaTableCell>
      </CeciliaTableRow>
      <tr className="border-t border-slate-800">
        <td colSpan={4}>
          <p className="mt-4 border-r border-t border-slate-800">Total:</p>
        </td>
        <td colSpan={1}>
          <p className="mt-4 text-center border-r border-t border-slate-800">
            -
          </p>
        </td>
        <td colSpan={3}>
          <p className="mt-4 text-center border-t border-slate-800">-</p>
        </td>
      </tr>
      <tr className="mb-4 border-y border-slate-800">
        <td colSpan={4}>
          <p className="mb-4 border-b border-r border-slate-800">
            Total líquido:
          </p>
        </td>
        <td colSpan={4}>
          <p className="mb-4 border-b border-slate-800 text-center">-</p>
        </td>
      </tr>
    </tbody>
  );
}
