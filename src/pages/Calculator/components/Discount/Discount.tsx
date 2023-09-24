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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="col-span-2 sm:col-span-1 grid items-center">
        <InputNumber
          placeholder="Dias faltados"
          onChange={(value) => setValue(value)}
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <CalculatorTable title="Desconto">
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
