import { InputCurrency } from '@shared/components/Input/InputCurrency/InputCurrency';
import { useState } from 'react';
import { InputNumber } from '@shared/components';
import { useCalc } from '@shared/hooks/useCalc';
import { CalculatorTable, TBodyKey } from '../CalculatorTable/CalculatorTable';
import { CalculatorTd } from '../CalculatorTable/CalculatorTd';
import { CalculatorTr } from '../CalculatorTable/CalculatorTr';

export function Agreement() {
  const { toBRL, getVacation, getOneThirdVacation } = useCalc();

  const [value, setValue] = useState<
    Record<'salary' | 'workingMonths', number>
  >({
    salary: 0,
    workingMonths: 0,
  });

  const dataSalary: TBodyKey = [
    {
      label: 'Férias',
      value: toBRL(getVacation(value.salary, value.workingMonths)),
    },
    {
      label: '13º',
      value: toBRL(getVacation(value.salary, value.workingMonths)),
    },
    {
      label: 'Férias - 1/3',
      value: toBRL(getOneThirdVacation(value.salary, value.workingMonths)),
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-2 justify-around">
        <InputCurrency
          placeholder="Salário"
          onChange={(value) =>
            setValue((state) => ({ ...state, salary: value }))
          }
        />
        <InputNumber
          placeholder="Meses trabalhados"
          onChange={(value) =>
            setValue((state) => ({ ...state, workingMonths: value }))
          }
        />
      </div>
      <CalculatorTable title="Salário">
        {dataSalary.map((data) => (
          <CalculatorTr key={data.label}>
            <CalculatorTd>{data.label}</CalculatorTd>
            <CalculatorTd>{data.value}</CalculatorTd>
          </CalculatorTr>
        ))}
      </CalculatorTable>
    </div>
  );
}
