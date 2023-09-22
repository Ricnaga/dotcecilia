import { InputCurrency } from '@shared/components/Input/InputCurrency/InputCurrency';
import { useState } from 'react';
import { CalculatorTable, TBodyKey } from '../CalculatorTable/CalculatorTable';
import { CalculatorTd } from '../CalculatorTable/CalculatorTd';
import { CalculatorTr } from '../CalculatorTable/CalculatorTr';

const MINIMUM_WAGE = 1320;
const UNSANITARY_VALUE = 0.2;

export function Unsanitary() {
  const [value, setValue] = useState<number>(0);

  const toBRL = (value: number) =>
    new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);

  const dataSalary: TBodyKey = [
    {
      label: 'Insalubridade',
      value: toBRL(
        value ? value * UNSANITARY_VALUE : MINIMUM_WAGE * UNSANITARY_VALUE,
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 items-center">
      <InputCurrency
        placeholder="Salário"
        onChange={(value) => setValue(value)}
      />
      <CalculatorTable title="Valor">
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
