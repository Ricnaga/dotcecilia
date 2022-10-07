import {
  CeciliaButton,
  CeciliaDate,
  CeciliaNumber,
  CeciliaText,
} from '@shared/components';

export type AdvancePaymentCalculatorFields = {
  name: string;
  salary: number;
  refDate: string;
};

type AdvancePaymentCalculatorProps = Record<
  'values',
  AdvancePaymentCalculatorFields
> & {
  onChange: (
    key: keyof AdvancePaymentCalculatorFields,
    value: number | string,
  ) => void;
  onPrint: () => void;
};

export function AdvancePaymentCalculator({
  values,
  onChange,
  onPrint,
}: AdvancePaymentCalculatorProps) {
  return (
    <>
      <div className="grid grid-cols-12">
        <p className="text-4xl text-left font-bold mb-4 col-span-6">Cálculos</p>
        <CeciliaButton
          className="col-start-9 col-end-13 mb-4"
          title="Imprimir"
          onClick={onPrint}
        />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <CeciliaText
            placeholder="Digite o nome"
            value={values.name}
            onChange={({ target }) => onChange('name', target.value)}
          />
        </div>
        <div className="col-span-6">
          <CeciliaNumber
            currency
            placeholder="salário"
            value={values.salary}
            onChange={({ target }) => onChange('salary', target.valueAsNumber)}
          />
        </div>
        <div className="col-span-6">
          <CeciliaDate
            value={values.refDate}
            onChange={({ target }) => {
              onChange(
                'refDate',
                target.value ? target.value.toString() : new Date().toString(),
              );
            }}
          />
        </div>
      </div>
    </>
  );
}
