import {
  ENV_COMPANY_ADDRESS,
  ENV_COMPANY_CPNJ,
  ENV_COMPANY_NAME,
} from '../../../../config';

export function PaystubTableHead() {
  return (
    <>
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
        <tr>
          <th colSpan={8}>
            <p className="my-4 border-y border-slate-800">Fulano de tal</p>
          </th>
        </tr>
      </thead>
    </>
  );
}
