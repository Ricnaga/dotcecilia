import { InputNumber } from '@shared/components';
import { InputCurrency } from '@shared/components/Input/InputCurrency/InputCurrency';
import { useState } from 'react';
import { CalculatorTable, TBodyKey } from '../CalculatorTable/CalculatorTable';
import { CalculatorTd } from '../CalculatorTable/CalculatorTd';
import { CalculatorTr } from '../CalculatorTable/CalculatorTr';

const MONTH_HOUR = 220;
const VTR_DISCOUNT_VALUE = 0.06;
const PREVIOUS_ADVANCE_VALUE = 0.4;
const DISCOUNT_VALUE = 30;

export function ExtraHour() {
  const [value, setValue] = useState<Record<'salary' | 'valueHour', number>>({
    salary: 0,
    valueHour: 0,
  });

  const toBRL = (value: number) =>
    new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);

  const dataSalary: TBodyKey = [
    {
      label: 'Valor/hora',
      value: toBRL(value.salary / MONTH_HOUR),
    },
    {
      label: '6% VTR',
      value: toBRL(value.salary * VTR_DISCOUNT_VALUE),
    },
    {
      label: 'Adiantamento',
      value: toBRL(value.salary * PREVIOUS_ADVANCE_VALUE),
    },
    {
      label: 'Desconto dias faltados',
      value: toBRL(value.salary / DISCOUNT_VALUE),
    },
  ];
  const dataExtraHour: TBodyKey = [
    {
      label: '60 %',
      value: toBRL((value.salary / MONTH_HOUR) * value.valueHour * 0.6),
    },
    {
      label: '100 %',
      value: toBRL((value.salary / MONTH_HOUR) * value.valueHour),
    },
  ];

  const total = toBRL(
    (value.salary / MONTH_HOUR) * value.valueHour * 0.6 +
      (value.salary / MONTH_HOUR) * value.valueHour,
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-1 flex flex-col gap-2 justify-around">
        <InputCurrency
          placeholder="Salário"
          onChange={(value) =>
            setValue((state) => ({ ...state, salary: value }))
          }
        />
        <InputNumber
          placeholder="Horas trabalhadas"
          onChange={(value) =>
            setValue((state) => ({ ...state, valueHour: value }))
          }
        />
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-4">
        <CalculatorTable title="Salário">
          {dataSalary.map((data) => (
            <CalculatorTr key={data.label}>
              <CalculatorTd>{data.label}</CalculatorTd>
              <CalculatorTd>{data.value}</CalculatorTd>
            </CalculatorTr>
          ))}
        </CalculatorTable>

        <CalculatorTable title="Hora extra" total={total}>
          {dataExtraHour.map((data) => (
            <CalculatorTr key={data.label}>
              <CalculatorTd>{data.label}</CalculatorTd>
              <CalculatorTd align="right">{data.value}</CalculatorTd>
            </CalculatorTr>
          ))}
        </CalculatorTable>
      </div>
    </div>
  );
}
