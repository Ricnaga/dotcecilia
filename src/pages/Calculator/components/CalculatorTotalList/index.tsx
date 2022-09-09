import React from 'react';
import { CalculatorPageProps } from '../..';
import { useCalculatorTotalList } from './hook/useCalculatorTotalList';

type CalculatorTotalListProps = {
  values: CalculatorPageProps;
};

const listTitle = {
  'Valor/hora': 'Valor/hora',
  '60%': '60%',
  '100%': '100%',
  Insalubridade: 'Insalubridade',
  Transporte: 'Transporte',
  'Dias faltados': 'Dias faltados',
  'Desconto 6% VTR': 'Desconto 6% VTR',
  'Adiantamento anterior': 'Adiantamento anterior',
  'Desconto do dia faltado': 'Desconto do dia faltado',
  Férias: 'Férias',
  '13º': '13º',
  'Férias - 1/3': 'Férias - 1/3',
};

type TitleKeys = keyof typeof listTitle;

export type TitleItems = {
  title: TitleKeys;
  formattedValue: string | number;
  show: boolean;
};

export function CalculatorTotalList({ values }: CalculatorTotalListProps) {
  const {
    data: { totalListItems },
  } = useCalculatorTotalList(values);

  return (
    <>
      <p className="text-4xl text-center font-bold mb-4">Total</p>
      {totalListItems.map(
        ({ title, formattedValue, show }) =>
          show && (
            <div
              key={title}
              className="border-b border-slate-900 grid grid-cols-2 items-center"
            >
              <p className="text-xl leading-10 text-left">{title}:</p>
              <p className="text-xl leading-10 text-right">{formattedValue}</p>
            </div>
          ),
      )}
    </>
  );
}
