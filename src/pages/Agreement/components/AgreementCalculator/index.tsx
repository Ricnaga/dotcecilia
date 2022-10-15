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
  startDate: string;
  endDate: string;
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
            value={values.startDate}
            onChange={({ target }) => {
              onChange(
                'startDate',
                target.value ? target.value.toString() : new Date().toString(),
              );
            }}
          />
        </div>
        <div className="col-span-6">
          <CeciliaDate
            label="Data Final"
            value={values.endDate}
            onChange={({ target }) => {
              onChange(
                'endDate',
                target.value ? target.value.toString() : new Date().toString(),
              );
            }}
          />
        </div>
      </div>
    </>
  );
}
