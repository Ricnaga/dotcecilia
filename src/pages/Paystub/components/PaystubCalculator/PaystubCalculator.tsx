import {
  Switch,
  InputDate,
  HeaderPrint,
  InputNumber,
  Input,
} from '@shared/components';
import { InputCurrency } from '@shared/components/Input/InputCurrency/InputCurrency';
import { CalculatorType } from '@shared/utils/types';

export type PaystubCalculatorFields = {
  name: string;
  hasUnsanitary: boolean;
  unsanitary: number;
  extraHour: boolean;
  fullExtra: boolean;
  hours: number;
  salary: number;
  initialWorkdayMonth: Date;
  lastWorkdayMonth: Date;
  vtr: number;
  missingDays: number;
  discountedDays: number;
};

type PaystubCalculatorProps = CalculatorType<PaystubCalculatorFields>;

export function PaystubCalculator({
  values,
  onChange,
  onChecked,
  onPrint,
}: PaystubCalculatorProps) {
  return (
    <>
      <HeaderPrint onPrint={onPrint} />
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="col-span-2">
          <Input
            placeholder="Digite o nome"
            value={values.name}
            onChange={({ target }) => onChange('name', target.value)}
          />
        </div>
        <div className="col-span-2 grid grid-cols-2 px-4">
          <div className="col-span-2">
            <p className="text-lg font-medium leading-6 text-center mb-2">
              Opções
            </p>
          </div>
          <Switch
            label="Insalubridade ?"
            checked={values.hasUnsanitary}
            onChange={() => onChecked && onChecked('hasUnsanitary')}
          />
          <div className="grid grid-cols-1 justify-items-end">
            <div className="col-span-1 mb-2">
              <Switch
                label="HE ?"
                checked={values.extraHour}
                onChange={() => onChecked && onChecked('extraHour')}
              />
            </div>
            {values.extraHour && (
              <Switch
                label="100% ?"
                checked={values.fullExtra}
                onChange={() => onChecked && onChecked('fullExtra')}
              />
            )}
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {values.hasUnsanitary && (
            <div className="mt-1 col-span-1">
              <InputCurrency
                placeholder="Valor insalubridade"
                value={values.unsanitary}
                onChange={(value) => onChange('unsanitary', value)}
              />
            </div>
          )}
          {values.extraHour && (
            <div className="mt-1 col-span-1">
              <InputNumber
                placeholder="horas"
                value={values.hours}
                onChange={(value) => onChange('hours', value)}
              />
            </div>
          )}
        </div>
        <div>
          <InputCurrency
            placeholder="salário"
            value={values.salary}
            onChange={(value) => onChange('salary', value)}
          />
        </div>
        <div>
          <InputNumber
            placeholder="Dias faltados"
            value={values.missingDays}
            onChange={(value) => onChange('missingDays', value)}
          />
        </div>
        <div>
          <InputCurrency
            placeholder="Valor diário VTR"
            value={values.vtr}
            onChange={(value) => onChange('vtr', value)}
          />
        </div>
        <div>
          <InputNumber
            placeholder="Desconto de dias"
            value={values.discountedDays}
            onChange={(value) => onChange('discountedDays', value)}
          />
        </div>
        <div>
          <InputDate
            label="Primeiro dia útil"
            dateValue={values.initialWorkdayMonth}
            onDateChange={(date) => {
              onChange('initialWorkdayMonth', date.toString());
            }}
          />
        </div>
        <div>
          <InputDate
            label="Último dia útil"
            dateValue={values.lastWorkdayMonth}
            onDateChange={(date) =>
              onChange('lastWorkdayMonth', date.toString())
            }
          />
        </div>
      </div>
    </>
  );
}
