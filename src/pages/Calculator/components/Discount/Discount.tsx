import { InputNumber } from '@shared/components';
import { useState } from 'react';
import { CalculatorTable, TBodyKey } from '../CalculatorTable/CalculatorTable';
import { CalculatorTd } from '../CalculatorTable/CalculatorTd';
import { CalculatorTr } from '../CalculatorTable/CalculatorTr';

export function Discount() {
  const [value, setValue] = useState<number>(0);

  const dataSalary: TBodyKey = [
    {
      label: 'Dias faltados',
      value: value.toString(),
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-2 justify-around">
        <InputNumber
          placeholder="Dias faltados"
          onChange={(value) => setValue(value)}
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
