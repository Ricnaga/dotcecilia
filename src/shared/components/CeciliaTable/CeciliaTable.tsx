import {
  ENV_COMPANY_ADDRESS,
  ENV_COMPANY_CPNJ,
  ENV_COMPANY_NAME,
} from '@config';
import { useCeciliaTable } from './hooks/useCeciliaTable';

type CeciliaTableProps = Partial<Record<'name' | 'monthRef', string | null>> &
  Partial<Record<'startDate' | 'endDate', string>> & {
    children: React.ReactNode;
    headerType: 'PAGAMENTO' | 'ADIANTAMENTO' | 'ACERTO';
  };

export function CeciliaTable({
  children,
  name,
  headerType,
  monthRef,
  startDate,
  endDate,
}: CeciliaTableProps) {
  const {
    data: { formattedMonthRef, dateDifference },
  } = useCeciliaTable({
    monthRef,
    endDate,
    startDate,
  });

  return (
    <table className="col-span-12 h-1 bg-slate-100 border border-slate-800 text-slate-900">
      <thead className={headerType === 'PAGAMENTO' ? 'bg-yellow-100' : ''}>
        <tr>
          <th colSpan={6}>{ENV_COMPANY_NAME}</th>
          <th colSpan={2}>RECIBO DE {headerType}</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th colSpan={6} className="text-right">
            {ENV_COMPANY_ADDRESS}
          </th>
          {headerType !== 'ACERTO' && (
            <th colSpan={2}>{`Ref. ${formattedMonthRef}`}</th>
          )}
        </tr>
        <tr>
          <th colSpan={8}>CNPJ: {ENV_COMPANY_CPNJ}</th>
        </tr>
        {headerType === 'ACERTO' && (
          <tr>
            <th colSpan={8}>
              <p className="mt-4 border-y border-slate-800 bg-yellow-100">
                ACERTO: {dateDifference}
              </p>
            </th>
          </tr>
        )}
        <tr>
          <th colSpan={8}>
            <p className="my-4 border-y border-slate-800">
              {!name ? 'Nome' : name}
            </p>
          </th>
        </tr>
      </thead>
      {children}
      <tfoot className="border-t border-slate-800">
        <tr>
          <td colSpan={4}>
            <p className="my-8 text-center">
              Assinatura:.......................................................
            </p>
          </td>
          <td colSpan={4}>
            <p className="my-8 text-center">Data:__/__/__</p>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
