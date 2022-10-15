import { CeciliaTableCell, CeciliaTableRow } from '@shared/components';
import { AgreementCalculatorFields } from '../AgreementCalculator';
import { useAgreementTableBody } from './hooks/useAgreementTableBody';

type AgreementTableBodyProps = Record<'values', AgreementCalculatorFields>;

export const agreementValues = {
  thirteenth: '13º',
  vacation: 'FÉRIAS',
  oneThirdVcation: '1/3 - Férias',
};

type TitleKeys = keyof typeof agreementValues;

export type TitleItems = {
  title: TitleKeys;
  value: string;
  discount?: string;
};

export function AgreementTableBody({ values }: AgreementTableBodyProps) {
  const {
    data: { formattedValues, salary, totalToPay, total },
  } = useAgreementTableBody({ values });

  return (
    <tbody className="border-t border-slate-800">
      <tr>
        <CeciliaTableCell colSpan={3}>SALÁRIO:</CeciliaTableCell>
        <CeciliaTableCell className="text-center" colSpan={2}>
          {salary}
        </CeciliaTableCell>
        <CeciliaTableCell colSpan={2} className="text-center">
          Pagar
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center">Desconto</CeciliaTableCell>
      </tr>
      {formattedValues.map(({ title, value, discount }) => (
        <CeciliaTableRow key={title}>
          <CeciliaTableCell colSpan={3}>
            {agreementValues[title]}
          </CeciliaTableCell>
          <CeciliaTableCell className="text-center" colSpan={2} />
          <CeciliaTableCell colSpan={2} className="text-center">
            {value}
          </CeciliaTableCell>
          <CeciliaTableCell className="text-center">
            {discount || ''}
          </CeciliaTableCell>
        </CeciliaTableRow>
      ))}

      <CeciliaTableRow>
        <td colSpan={6}>
          <p className="mt-4 border-t border-slate-800">Sub.total:</p>
        </td>
        <td className="text-center">
          <p className="mt-4 border-t border-slate-800">{totalToPay}</p>
        </td>
        <CeciliaTableCell className="text-center">
          <p className="mt-4 border-t border-slate-800">
            {formattedValues[0].discount}
          </p>
        </CeciliaTableCell>
      </CeciliaTableRow>
      <CeciliaTableRow>
        <td colSpan={5} className="border-b border-slate-800">
          <p className="mb-4 border-b border-slate-800">Total á pagar:</p>
        </td>
        <CeciliaTableCell colSpan={3} className="text-center">
          <p className="mb-4 border-b border-slate-800">{total}</p>
        </CeciliaTableCell>
      </CeciliaTableRow>
    </tbody>
  );
}
