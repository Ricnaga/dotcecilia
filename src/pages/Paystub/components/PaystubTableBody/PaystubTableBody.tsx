import { PaystubTableCell } from '../PaystubTableCell';
import { PaystubTableRow } from '../PaystubTableRow';

export function PaystubTableBody() {
  return (
    <tbody className="border-t border-slate-800">
      <tr>
        <PaystubTableCell colSpan={3} />
        <PaystubTableCell colSpan={1} className="text-center">
          Ref.
        </PaystubTableCell>
        <PaystubTableCell>Vencimento</PaystubTableCell>
        <PaystubTableCell colSpan={2} className="text-center">
          Descontos
        </PaystubTableCell>
      </tr>
      <PaystubTableRow>
        <PaystubTableCell colSpan={3}>Salário do mês</PaystubTableCell>
        <PaystubTableCell colSpan={1} className="text-center">
          30
        </PaystubTableCell>
        <PaystubTableCell className="text-center">-</PaystubTableCell>
        <PaystubTableCell colSpan={2} />
      </PaystubTableRow>
      <PaystubTableRow>
        <PaystubTableCell colSpan={3}>Hora extra 60%</PaystubTableCell>
        <PaystubTableCell colSpan={1} className="text-center">
          0
        </PaystubTableCell>
        <PaystubTableCell className="text-center">-</PaystubTableCell>
        <PaystubTableCell colSpan={2} />
      </PaystubTableRow>
      <PaystubTableRow>
        <PaystubTableCell colSpan={3}>Hora extra 100%</PaystubTableCell>
        <PaystubTableCell colSpan={1} className="text-center">
          0
        </PaystubTableCell>
        <PaystubTableCell className="text-center">-</PaystubTableCell>
        <PaystubTableCell colSpan={2} />
      </PaystubTableRow>
      <PaystubTableRow>
        <PaystubTableCell colSpan={3}>Insalubridade</PaystubTableCell>
        <PaystubTableCell colSpan={1} className="text-center">
          0
        </PaystubTableCell>
        <PaystubTableCell className="text-center">-</PaystubTableCell>
        <PaystubTableCell colSpan={2} />
      </PaystubTableRow>
      <PaystubTableRow>
        <PaystubTableCell colSpan={2}>Vtr - (01 à 30/09/22)</PaystubTableCell>
        <PaystubTableCell className="text-center ">12,25</PaystubTableCell>
        <PaystubTableCell className="text-center ">12,25</PaystubTableCell>
        <PaystubTableCell className="text-center ">-</PaystubTableCell>
      </PaystubTableRow>
      <PaystubTableRow>
        <PaystubTableCell colSpan={3}>Falta dia</PaystubTableCell>
        <PaystubTableCell className="text-center">0</PaystubTableCell>
        <PaystubTableCell className="text-center">-</PaystubTableCell>
        <PaystubTableCell className="text-center" colSpan={2}>
          -
        </PaystubTableCell>
      </PaystubTableRow>
      <PaystubTableRow>
        <PaystubTableCell colSpan={3}>Adiantamento anterior</PaystubTableCell>
        <PaystubTableCell className="text-center" />
        <PaystubTableCell className="text-center" />
        <PaystubTableCell className="text-center" colSpan={2}>
          -
        </PaystubTableCell>
      </PaystubTableRow>
      <PaystubTableRow>
        <PaystubTableCell colSpan={3}>
          Desconto 6% VPaystubTableRow
        </PaystubTableCell>
        <PaystubTableCell className="text-center" />
        <PaystubTableCell className="text-center" />
        <PaystubTableCell className="text-center" colSpan={2}>
          -
        </PaystubTableCell>
      </PaystubTableRow>
      <tr />
    </tbody>
  );
}
