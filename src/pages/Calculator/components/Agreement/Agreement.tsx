import { InputNumber } from '@shared/components';
import { InputCurrency } from '@shared/components/Input/InputCurrency/InputCurrency';
import { useCalc } from '@shared/hooks/useCalc';
import { useState } from 'react';
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
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="col-span-2 xl:col-span-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
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

      <div className="col-span-2">
        <CalculatorTable title="Férias">
          {dataSalary.map((data) => (
            <CalculatorTr key={data.label}>
              <CalculatorTd>{data.label}</CalculatorTd>
              <CalculatorTd>{data.value}</CalculatorTd>
            </CalculatorTr>
          ))}
        </CalculatorTable>
      </div>
    </div>
  );
}
