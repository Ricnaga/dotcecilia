import {
  CeciliaButton,
  CeciliaCheckbox,
  CeciliaDate,
  CeciliaNumber,
  CeciliaText,
} from '@shared/components';

export type PaystubCalculatorFields = {
  name: string;
  hasUnsanitary: boolean;
  unsanitary: number;
  extraHour: boolean;
  fullExtra: boolean;
  hours: number;
  salary: number;
  initialWorkdayMonth: string;
  lastWorkdayMonth: string;
  vtr: number;
  missingDays: number;
  discountedDays: number;
};

type PaystubCalculatorProps = Record<'values', PaystubCalculatorFields> & {
  onChange: (
    key: keyof PaystubCalculatorFields,
    value: number | string,
  ) => void;
  onChecked: (
    key: keyof Pick<
      PaystubCalculatorFields,
      'hasUnsanitary' | 'extraHour' | 'fullExtra'
    >,
  ) => void;
  onPrint: () => void;
};

export function PaystubCalculator({
  values,
  onChange,
  onChecked,
  onPrint,
}: PaystubCalculatorProps) {
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
          <CeciliaCheckbox
            label="Insalubridade ?"
            checked={values.hasUnsanitary}
            onChecked={() => onChecked('hasUnsanitary')}
          />
          {values.hasUnsanitary && (
            <div className="mt-3">
              <CeciliaNumber
                currency
                placeholder="Insalubridade"
                value={values.unsanitary}
                onChange={({ target }) =>
                  onChange('unsanitary', target.valueAsNumber)
                }
              />
            </div>
          )}
        </div>
        <div className="col-span-6 grid grid-cols-12 justify-around">
          <div className="col-span-6">
            <CeciliaCheckbox
              label="HE?"
              checked={values.extraHour}
              onChecked={() => onChecked('extraHour')}
            />
          </div>
          {values.extraHour && (
            <>
              <div className="col-span-6">
                <CeciliaCheckbox
                  label="100% ?"
                  checked={values.fullExtra}
                  onChecked={() => onChecked('fullExtra')}
                />
              </div>
              <div className="mt-3 col-span-12">
                <CeciliaNumber
                  placeholder="horas"
                  value={values.hours}
                  onChange={({ target }) =>
                    onChange('hours', target.valueAsNumber)
                  }
                />
              </div>
            </>
          )}
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
          <CeciliaNumber
            placeholder="Dias faltados"
            value={values.missingDays}
            onChange={({ target }) =>
              onChange('missingDays', target.valueAsNumber)
            }
          />
        </div>
        <div className="col-span-6">
          <CeciliaNumber
            currency
            placeholder="Valor diário VTR"
            value={values.vtr}
            onChange={({ target }) => onChange('vtr', target.valueAsNumber)}
          />
        </div>
        <div className="col-span-6">
          <CeciliaNumber
            placeholder="Desconto de dias"
            value={values.discountedDays}
            onChange={({ target }) =>
              onChange('discountedDays', target.valueAsNumber)
            }
          />
        </div>
        <div className="col-span-6">
          <CeciliaDate
            label="Primeiro dia útil"
            value={values.initialWorkdayMonth}
            onChange={({ target }) => {
              onChange(
                'initialWorkdayMonth',
                target.value ? target.value.toString() : new Date().toString(),
              );
            }}
          />
        </div>
        <div className="col-span-6">
          <CeciliaDate
            label="Último dia útil"
            value={values.lastWorkdayMonth}
            onChange={({ target }) =>
              onChange(
                'lastWorkdayMonth',
                target.value ? target.value.toString() : new Date().toString(),
              )
            }
          />
        </div>
      </div>
    </>
  );
}
