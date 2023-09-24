import { InputNumber } from '@shared/components';
import { InputCurrency } from '@shared/components/Input/InputCurrency/InputCurrency';
import { useState } from 'react';
import { useCalc } from '@shared/hooks/useCalc';
import { CalculatorTable, TBodyKey } from '../CalculatorTable/CalculatorTable';
import { CalculatorTd } from '../CalculatorTable/CalculatorTd';
import { CalculatorTr } from '../CalculatorTable/CalculatorTr';

export function ExtraHour() {
  const {
    toBRL,
    getHourValue,
    getVTR,
    getPreviousAdvance,
    getMissingDays,
    getExtraHour,
  } = useCalc();

  const [value, setValue] = useState<Record<'salary' | 'valueHour', number>>({
    salary: 0,
    valueHour: 0,
  });

  const dataSalary: TBodyKey = [
    {
      label: 'Valor/hora',
      value: toBRL(getHourValue(value.salary)),
    },
    {
      label: '6% VTR',
      value: toBRL(getVTR(value.salary)),
    },
    {
      label: 'Adiantamento',
      value: toBRL(getPreviousAdvance(value.salary)),
    },
    {
      label: 'Desconto dias faltados',
      value: toBRL(getMissingDays(value.salary)),
    },
  ];

  const dataExtraHour: TBodyKey = [
    {
      label: '60 %',
      value: toBRL(
        getExtraHour({
          extra: 1.6,
          salary: value.salary,
          valueHour: value.valueHour,
        }),
      ),
    },
    {
      label: '100 %',
      value: toBRL(
        getExtraHour({
          extra: 2,
          salary: value.salary,
          valueHour: value.valueHour,
        }),
      ),
    },
  ];

  const total = toBRL(
    getExtraHour({
      extra: 1.6,
      salary: value.salary,
      valueHour: value.valueHour,
    }) +
      getExtraHour({
        extra: 2,
        salary: value.salary,
        valueHour: value.valueHour,
      }),
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 gap-4 xl:items-baseline">
      <div className="col-span-2 xl:col-span-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-4">
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
      <div className="col-span-2 grid grid-cols-1 gap-4">
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
