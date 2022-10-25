import React from 'react';
import { CalculatorPageProps } from '../../Calculator';
import { useCalculatorTotalList } from './hook/useCalculatorTotalList';

type CalculatorTotalListProps = {
  values: CalculatorPageProps;
};

export const listTitle = {
  valorHora: 'Valor/hora',
  extra60: '60%',
  extra100: '100%',
  insalubridade: 'Insalubridade',
  transporte: 'Transporte',
  diasFaltados: 'Dias faltados',
  descontoVTR6: 'Desconto 6% VTR',
  adiantamentoAnterior: 'Adiantamento anterior',
  descontoDiaFaltado: 'Desconto do dia faltado',
  ferias: 'Férias',
  decimoTerceiro: '13º',
  ferias1_3: 'Férias - 1/3',
};

export function CalculatorTotalList({ values }: CalculatorTotalListProps) {
  const {
    data: { totalListItems },
  } = useCalculatorTotalList(values);

  return (
    <>
      <p className="text-4xl text-center font-bold mb-4">Total</p>
      {totalListItems.map(
        ({ title, value, show }) =>
          show && (
            <div
              key={title}
              className="border-b border-slate-900 grid grid-cols-2 items-center"
            >
              <p className="text-xl leading-10 text-left">
                {listTitle[title]}:
              </p>
              <p className="text-xl leading-10 text-right">{value}</p>
            </div>
          ),
      )}
    </>
  );
}
