import {
  CeciliaDate,
  CeciliaHeaderPrint,
  CeciliaNumber,
  CeciliaText,
} from '@shared/components';
import { CalculatorType } from '@shared/utils/types';

export type AgreementCalculatorFields = {
  name: string;
  salary: number;
  discount: number;
  startDate: Date;
  endDate: Date;
};

type AgreementCalculatorProps = CalculatorType<AgreementCalculatorFields>;

export function AgreementCalculator({
  values,
  onChange,
  onPrint,
}: AgreementCalculatorProps) {
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
          <CeciliaNumber
            currency
            placeholder="Descontos (R$)"
            value={values.discount}
            onChange={({ target }) =>
              onChange('discount', target.valueAsNumber)
            }
          />
        </div>
        <div className="col-span-6">
          <CeciliaDate
            label="Data inicial"
            dateValue={values.startDate}
            onDateChange={(date) => onChange('startDate', date.toString())}
          />
        </div>
        <div className="col-span-6">
          <CeciliaDate
            label="Data Final"
            dateValue={values.endDate}
            onDateChange={(date) => onChange('endDate', date.toString())}
          />
        </div>
      </div>
    </>
  );
}
