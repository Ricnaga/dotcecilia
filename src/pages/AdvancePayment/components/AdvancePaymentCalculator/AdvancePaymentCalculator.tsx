import {
  CeciliaDate,
  CeciliaHeaderPrint,
  CeciliaNumber,
  CeciliaText,
} from '@shared/components';
import { CalculatorType } from '@shared/utils/types';

export type AdvancePaymentCalculatorFields = {
  name: string;
  salary: number;
  refDate: Date;
};

type AdvancePaymentCalculatorProps =
  CalculatorType<AdvancePaymentCalculatorFields>;

export function AdvancePaymentCalculator({
  values,
  onChange,
  onPrint,
}: AdvancePaymentCalculatorProps) {
  return (
    <>
      <CeciliaHeaderPrint onPrint={onPrint} />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <CeciliaText
            placeholder="Digite o nome"
            value={values.name}
            onChange={({ target }) => onChange('name', target.value)}
          />
        </div>
        <div className="col-span-6">
          <CeciliaNumber
            currency
            placeholder="salário"
            value={values.salary}
            onChange={({ target }) => onChange('salary', target.valueAsNumber)}
          />
        </div>
        <div className="col-span-6">
          <CeciliaDate
            dateValue={values.refDate}
            onDateChange={(date) => onChange('refDate', date.toString())}
          />
        </div>
      </div>
    </>
  );
}
