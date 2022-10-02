import {
  CeciliaTableCell,
  CeciliaTableRow,
} from '../../../../shared/components';
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
        <CeciliaTableCell className="text-center">
          {formattedValues.salary}
        </CeciliaTableCell>
        <CeciliaTableCell colSpan={2} />
      </CeciliaTableRow>
      {formattedHours.extraHour && (
        <CeciliaTableRow>
          <CeciliaTableCell colSpan={3}>Hora extra 60%</CeciliaTableCell>
          <CeciliaTableCell colSpan={1} className="text-center">
            {formattedHours.hours}
          </CeciliaTableCell>
          <CeciliaTableCell className="text-center">
            {formattedHours.extraHourValue}
          </CeciliaTableCell>
          <CeciliaTableCell colSpan={2} />
        </CeciliaTableRow>
      )}
      {formattedHours.fullExtra && (
        <CeciliaTableRow>
          <CeciliaTableCell colSpan={3}>Hora extra 100%</CeciliaTableCell>
          <CeciliaTableCell colSpan={1} className="text-center">
            {formattedHours.hours}
          </CeciliaTableCell>
          <CeciliaTableCell className="text-center">
            {formattedHours.fullExtraValue}
          </CeciliaTableCell>
          <CeciliaTableCell colSpan={2} />
        </CeciliaTableRow>
      )}
      {formattedValues.hasUnsanitary && (
        <CeciliaTableRow>
          <CeciliaTableCell colSpan={3}>Insalubridade</CeciliaTableCell>
          <CeciliaTableCell colSpan={1} className="text-center">
            0
          </CeciliaTableCell>
          <CeciliaTableCell className="text-center">
            {formattedValues.unsanitary}
          </CeciliaTableCell>
          <CeciliaTableCell colSpan={2} />
        </CeciliaTableRow>
      )}
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={2}>
          Vtr - {formattedVtr.dateRange}
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center ">
          {formattedVtr.vtr}
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center ">
          {formattedVtr.vtrRef}
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center ">
          {formattedVtr.vtrMonthValue}
        </CeciliaTableCell>
      </CeciliaTableRow>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={3}>Falta dia</CeciliaTableCell>
        <CeciliaTableCell className="text-center">
          {formattedMissingDays.missingDays}
        </CeciliaTableCell>
        <CeciliaTableCell className="text-center" />
        <CeciliaTableCell className="text-center" colSpan={2}>
          {formattedMissingDays.totalMissingDays}
        </CeciliaTableCell>
      </CeciliaTableRow>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={3}>Adiantamento anterior</CeciliaTableCell>
        <CeciliaTableCell className="text-center" />
        <CeciliaTableCell className="text-center" />
        <CeciliaTableCell className="text-center" colSpan={2}>
          {formattedValues.previousAdvance}
        </CeciliaTableCell>
      </CeciliaTableRow>
      <CeciliaTableRow>
        <CeciliaTableCell colSpan={3}>Desconto 6% Vtr</CeciliaTableCell>
        <CeciliaTableCell className="text-center" />
        <CeciliaTableCell className="text-center" />
        <CeciliaTableCell className="text-center" colSpan={2}>
          {formattedVtr.discountedVtr}
        </CeciliaTableCell>
      </CeciliaTableRow>
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
