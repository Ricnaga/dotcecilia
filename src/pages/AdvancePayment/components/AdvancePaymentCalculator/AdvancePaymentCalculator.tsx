import {
  CeciliaHeaderPrint,
  CeciliaMonth,
  CeciliaNumber,
  CeciliaText,
} from '@shared/components';
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
  const headerPrint = useMemo(
    () => <CeciliaHeaderPrint onPrint={onPrint} />,
    [],
  );
  const inputName = useMemo(
    () => (
      <CeciliaText
        placeholder="Digite o nome"
        value={values.name}
        onChange={({ target }) => onChange('name', target.value)}
      />
    ),
    [values.name],
  );
  const inputSalary = useMemo(
    () => (
      <CeciliaNumber
        currency
        placeholder="salário"
        value={values.salary}
        onChangeValue={(value) => onChange('salary', value)}
      />
    ),
    [values.salary],
  );

  const inputMonth = useMemo(
    () => (
      <CeciliaMonth
        dateValue={values.refDate}
        onMonthChange={(date) => onChange('refDate', date.toString())}
      />
    ),
    [values.refDate],
  );
  return (
    <>
      {headerPrint}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">{inputName}</div>
        <div className="col-span-6">{inputSalary}</div>
        <div className="col-span-6">{inputMonth}</div>
      </div>
    </>
  );
}
