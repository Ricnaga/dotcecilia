import {
  ENV_COMPANY_ADDRESS,
  ENV_COMPANY_CPNJ,
  ENV_COMPANY_NAME,
} from '../../../../config';

export function PaystubTable() {
  return (
    <table className="col-span-12 h-1 bg-slate-100 border border-slate-800 text-slate-900">
      <thead className="bg-yellow-100">
        <tr>
          <th colSpan={6}>{ENV_COMPANY_NAME}</th>
          <th colSpan={2}>RECIBO DE PAGAMENTO</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th colSpan={6} className="text-right">
            {ENV_COMPANY_ADDRESS}
          </th>
          <th colSpan={2}>
            Ref.
            {new Date().toLocaleDateString('pt-br', {
              month: 'long',
              year: 'numeric',
            })}
          </th>
        </tr>
        <tr>
          <th colSpan={8}>CNPJ: {ENV_COMPANY_CPNJ}</th>
        </tr>
        <tr />
        <tr>
          <th colSpan={8}>
            <p className="my-4 border-y border-slate-800">Fulano de tal</p>
          </th>
        </tr>
      </thead>
      <tbody className="border-t border-slate-800">
        <tr>
          <td colSpan={3} className="border-r border-slate-800" />
          <td colSpan={1} className="text-center border-r border-slate-800">
            Ref.
          </td>
          <td className="text-center border-r border-slate-800">Vencimento</td>
          <td colSpan={2} className="text-center">
            Descontos
          </td>
        </tr>
        <tr className="border-t border-slate-800">
          <td colSpan={3} className="w-2/5 border-r border-slate-800">
            Salário do mês
          </td>
          <td colSpan={1} className="text-center border-r border-slate-800">
            30
          </td>
          <td className="text-center border-r border-slate-800">-</td>
          <td colSpan={2} />
        </tr>
        <tr className="border-t border-slate-800">
          <td colSpan={3} className="w-2/5 border-r border-slate-800">
            Hora extra 60%
          </td>
          <td colSpan={1} className="text-center border-r border-slate-800">
            0
          </td>
          <td className="text-center border-r border-slate-800">-</td>
          <td colSpan={2} />
        </tr>
        <tr className="border-t border-slate-800">
          <td colSpan={3} className="w-2/5 border-r border-slate-800">
            Hora extra 100%
          </td>
          <td colSpan={1} className="text-center border-r border-slate-800">
            0
          </td>
          <td className="text-center border-r border-slate-800">-</td>
          <td colSpan={2} />
        </tr>
        <tr className="border-t border-slate-800">
          <td colSpan={3} className="w-2/5 border-r border-slate-800">
            Insalubridade
          </td>
          <td colSpan={1} className="text-center border-r border-slate-800">
            0
          </td>
          <td className="text-center border-r border-slate-800">-</td>
          <td colSpan={2} />
        </tr>
      </tbody>
    </table>
  );
}
