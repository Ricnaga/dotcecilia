import { HeaderPrint, Input, InputDate } from '@shared/components';
import { InputCurrency } from '@shared/components/Input/InputCurrency/InputCurrency';
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
      <HeaderPrint onPrint={onPrint} />
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="col-span-2">
          <Input
            placeholder="Digite o nome"
            value={values.name}
            onChange={({ target }) => onChange('name', target.value)}
          />
        </div>
        <div>
          <InputCurrency
            placeholder="salário"
            value={values.salary}
            onChange={(value) => onChange('salary', value)}
          />
        </div>
        <div>
          <InputCurrency
            placeholder="Descontos (R$)"
            value={values.discount}
            onChange={(value) => onChange('discount', value)}
          />
        </div>
        <div>
          <InputDate
            label="Data inicial"
            dateValue={values.startDate}
            onDateChange={(date) => onChange('startDate', date.toString())}
          />
        </div>
        <div>
          <InputDate
            label="Data Final"
            dateValue={values.endDate}
            onDateChange={(date) => onChange('endDate', date.toString())}
          />
        </div>
      </div>
    </>
  );
}
