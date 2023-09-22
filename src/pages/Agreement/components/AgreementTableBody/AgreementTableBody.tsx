import { PaymentTableCell, PaymentTableRow } from '@shared/components';
import { AgreementCalculatorFields } from '../AgreementCalculator/AgreementCalculator';
import { useAgreementTableBody } from './hooks/useAgreementTableBody';

type AgreementTableBodyProps = Record<'values', AgreementCalculatorFields>;

export const agreementValues = {
  thirteenth: '13º',
  vacation: 'FÉRIAS',
  oneThirdVcation: '1/3 - Férias',
};

export function AgreementTableBody({ values }: AgreementTableBodyProps) {
  const {
    data: { formattedValues, salary, totalToPay, total },
  } = useAgreementTableBody({ values });

  return (
    <tbody className="border-t border-slate-800">
      <tr>
        <PaymentTableCell colSpan={3}>SALÁRIO:</PaymentTableCell>
        <PaymentTableCell className="text-center" colSpan={2}>
          {salary}
        </PaymentTableCell>
        <PaymentTableCell colSpan={2} className="text-center">
          Pagar
        </PaymentTableCell>
        <PaymentTableCell className="text-center">Desconto</PaymentTableCell>
      </tr>
      {formattedValues.map(({ title, value, discount }) => (
        <PaymentTableRow key={title}>
          <PaymentTableCell colSpan={3}>
            {agreementValues[title]}
          </PaymentTableCell>
          <PaymentTableCell className="text-center" colSpan={2} />
          <PaymentTableCell colSpan={2} className="text-center">
            {value}
          </PaymentTableCell>
          <PaymentTableCell className="text-center">
            {discount || ''}
          </PaymentTableCell>
        </PaymentTableRow>
      ))}

      <PaymentTableRow>
        <td colSpan={6}>
          <p className="mt-4 border-t border-slate-800">Sub.total:</p>
        </td>
        <td className="text-center">
          <p className="mt-4 border-t border-slate-800">{totalToPay}</p>
        </td>
        <PaymentTableCell className="text-center">
          <p className="mt-4 border-t border-slate-800">
            {formattedValues[0].discount}
          </p>
        </PaymentTableCell>
      </PaymentTableRow>
      <PaymentTableRow>
        <td colSpan={5} className="border-b border-slate-800">
          <p className="mb-4 border-b border-slate-800">Total á pagar:</p>
        </td>
        <PaymentTableCell colSpan={3} className="text-center">
          <p className="mb-4 border-b border-slate-800">{total}</p>
        </PaymentTableCell>
      </PaymentTableRow>
    </tbody>
  );
}
