import { HeaderPrint, Input, InputMonth } from '@shared/components';
import { InputCurrency } from '@shared/components/Input/InputCurrency/InputCurrency';
import { CalculatorType } from '@shared/utils/types';
import { useMemo } from 'react';

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
  const headerPrint = useMemo(() => <HeaderPrint onPrint={onPrint} />, []);
  const inputName = useMemo(
    () => (
      <Input
        placeholder="Digite o nome"
        value={values.name}
        onChange={({ target }) => onChange('name', target.value)}
      />
    ),
    [values.name],
  );
  const inputSalary = useMemo(
    () => (
      <InputCurrency
        placeholder="salário"
        value={values.salary}
        onChange={(value) => onChange('salary', value)}
      />
    ),
    [values.salary],
  );

  const inputMonth = useMemo(
    () => (
      <InputMonth
        dateValue={values.refDate}
        onMonthChange={(date) => onChange('refDate', date.toString())}
      />
    ),
    [values.refDate],
  );
  return (
    <>
      {headerPrint}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="col-span-2">{inputName}</div>
        <div>{inputSalary}</div>
        <div>{inputMonth}</div>
      </div>
    </>
  );
}
