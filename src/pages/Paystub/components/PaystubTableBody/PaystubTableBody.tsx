import { PaymentTableCell, PaymentTableRow } from '@shared/components';
import { PaystubCalculatorFields } from '../PaystubCalculator/PaystubCalculator';
import { usePaystubTableBody } from './hooks/usePaystubTableBody';

export type PaystubTableBodyItems = Omit<PaystubCalculatorFields, 'name'>;

type PaystubTableBodyProps = Record<'values', PaystubTableBodyItems>;

export function PaystubTableBody({ values }: PaystubTableBodyProps) {
  const {
    data: {
      formattedValues,
      formattedVtr,
      formattedHours,
      formattedMissingDays,
    },
  } = usePaystubTableBody({ values });
  return (
    <tbody className="border-t border-slate-800">
      <tr>
        <PaymentTableCell colSpan={3} />
        <PaymentTableCell colSpan={1} className="text-center">
          Ref.
        </PaymentTableCell>
        <PaymentTableCell className="text-center">Vencimento</PaymentTableCell>
        <PaymentTableCell colSpan={2} className="text-center">
          Descontos
        </PaymentTableCell>
      </tr>
      <PaymentTableRow>
        <PaymentTableCell colSpan={3}>Salário do mês</PaymentTableCell>
        <PaymentTableCell colSpan={1} className="text-center">
          30
        </PaymentTableCell>
        <PaymentTableCell className="text-center">
          {formattedValues.salary}
        </PaymentTableCell>
        <PaymentTableCell colSpan={2} className="border-b" />
      </PaymentTableRow>
      {formattedHours.extraHour && (
        <PaymentTableRow>
          <PaymentTableCell colSpan={3}>Hora extra 60%</PaymentTableCell>
          <PaymentTableCell colSpan={1} className="text-center">
            {formattedHours.hours}
          </PaymentTableCell>
          <PaymentTableCell className="text-center">
            {formattedHours.extraHourValue}
          </PaymentTableCell>
          <PaymentTableCell colSpan={2} />
        </PaymentTableRow>
      )}
      {formattedHours.fullExtra && (
        <PaymentTableRow>
          <PaymentTableCell colSpan={3}>Hora extra 100%</PaymentTableCell>
          <PaymentTableCell colSpan={1} className="text-center">
            {formattedHours.hours}
          </PaymentTableCell>
          <PaymentTableCell className="text-center">
            {formattedHours.fullExtraValue}
          </PaymentTableCell>
          <PaymentTableCell colSpan={2} />
        </PaymentTableRow>
      )}
      {formattedValues.hasUnsanitary && (
        <PaymentTableRow>
          <PaymentTableCell colSpan={3}>Insalubridade</PaymentTableCell>
          <PaymentTableCell colSpan={1} className="text-center">
            0
          </PaymentTableCell>
          <PaymentTableCell className="text-center">
            {formattedValues.unsanitary}
          </PaymentTableCell>
          <PaymentTableCell colSpan={2} />
        </PaymentTableRow>
      )}
      <PaymentTableRow className="border">
        <PaymentTableCell colSpan={2}>
          Vtr - {formattedVtr.dateRange}
        </PaymentTableCell>
        <PaymentTableCell className="text-center">
          {formattedVtr.vtr}
        </PaymentTableCell>
        <PaymentTableCell className="text-center">
          {formattedVtr.vtrRef}
        </PaymentTableCell>
        <PaymentTableCell className="text-center">
          {formattedVtr.vtrMonthValue}
        </PaymentTableCell>
        <PaymentTableCell colSpan={2} className="border-r" />
      </PaymentTableRow>
      <PaymentTableRow>
        <PaymentTableCell colSpan={3}>Falta dia</PaymentTableCell>
        <PaymentTableCell className="text-center">
          {formattedMissingDays.missingDays}
        </PaymentTableCell>
        <PaymentTableCell className="text-center" />
        <PaymentTableCell className="text-center" colSpan={2}>
          {formattedMissingDays.totalMissingDays}
        </PaymentTableCell>
      </PaymentTableRow>
      <PaymentTableRow>
        <PaymentTableCell colSpan={3}>Adiantamento anterior</PaymentTableCell>
        <PaymentTableCell className="text-center" />
        <PaymentTableCell className="text-center" />
        <PaymentTableCell className="text-center" colSpan={2}>
          {formattedValues.previousAdvance}
        </PaymentTableCell>
      </PaymentTableRow>
      <PaymentTableRow>
        <PaymentTableCell colSpan={3}>Desconto 6% Vtr</PaymentTableCell>
        <PaymentTableCell className="text-center" />
        <PaymentTableCell className="text-center" />
        <PaymentTableCell className="text-center" colSpan={2}>
          {formattedVtr.discountedVtr}
        </PaymentTableCell>
      </PaymentTableRow>
      <tr className="border-t border-slate-800">
        <td colSpan={4}>
          <p className="mt-4 border-r border-t border-slate-800">Total:</p>
        </td>
        <td colSpan={1}>
          <p className="mt-4 text-center border-r border-t border-slate-800">
            {formattedValues.total}
          </p>
        </td>
        <td colSpan={3}>
          <p className="mt-4 text-center border-t border-slate-800">
            {formattedValues.totalDiscount}
          </p>
        </td>
      </tr>
      <tr className="mb-4 border-y border-slate-800">
        <td colSpan={4}>
          <p className="mb-4 border-b border-r border-slate-800">
            Total líquido:
          </p>
        </td>
        <td colSpan={4}>
          <p className="mb-4 border-b border-slate-800 text-center">
            {formattedValues.netTotal}
          </p>
        </td>
      </tr>
    </tbody>
  );
}
