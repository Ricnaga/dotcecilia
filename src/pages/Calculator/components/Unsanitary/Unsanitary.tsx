import { InputCurrency } from '@shared/components/Input/InputCurrency/InputCurrency';
import { useState } from 'react';
import { useCalc } from '@shared/hooks/useCalc';
import { CalculatorTable, TBodyKey } from '../CalculatorTable/CalculatorTable';
import { CalculatorTd } from '../CalculatorTable/CalculatorTd';
import { CalculatorTr } from '../CalculatorTable/CalculatorTr';

export function Unsanitary() {
  const { getUnsanitary, toBRL } = useCalc();
  const [value, setValue] = useState<number>(0);

  const dataSalary: TBodyKey = [
    {
      label: 'Insalubridade',
      value: toBRL(getUnsanitary(value)),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="col-span-2 sm:col-span-1 grid items-center">
        <InputCurrency
          placeholder="Salário"
          onChange={(value) => setValue(value)}
        />
      </div>
      <div className="col-span-2 sm:col-span-2 md:col-span-1">
        <CalculatorTable title="Valor">
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
