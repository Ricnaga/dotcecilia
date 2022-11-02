import {
  CeciliaCheckbox,
  CeciliaDate,
  CeciliaHeaderPrint,
  CeciliaNumber,
  CeciliaText,
} from '@shared/components';
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
      <CeciliaHeaderPrint onPrint={onPrint} />
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
            onChecked={() => onChecked && onChecked('hasUnsanitary')}
          />
          {values.hasUnsanitary && (
            <div className="mt-3">
              <CeciliaNumber
                currency
                placeholder="Valor insalubridade"
                value={values.unsanitary}
                onChangeValue={(value) => onChange('unsanitary', value)}
              />
            </div>
          )}
        </div>
        <div className="col-span-6 grid grid-cols-12 justify-around">
          <div className="col-span-6">
            <CeciliaCheckbox
              label="HE?"
              checked={values.extraHour}
              onChecked={() => onChecked && onChecked('extraHour')}
            />
          </div>
          {values.extraHour && (
            <>
              <div className="col-span-6">
                <CeciliaCheckbox
                  label="100% ?"
                  checked={values.fullExtra}
                  onChecked={() => onChecked && onChecked('fullExtra')}
                />
              </div>
              <div className="mt-3 col-span-12">
                <CeciliaNumber
                  placeholder="horas"
                  value={values.hours}
                  onChangeValue={(value) => onChange('hours', value)}
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
            onChangeValue={(value) => onChange('salary', value)}
          />
        </div>
        <div className="col-span-6">
          <CeciliaNumber
            placeholder="Dias faltados"
            value={values.missingDays}
            onChangeValue={(value) => onChange('missingDays', value)}
          />
        </div>
        <div className="col-span-6">
          <CeciliaNumber
            currency
            placeholder="Valor diário VTR"
            value={values.vtr}
            onChangeValue={(value) => onChange('vtr', value)}
          />
        </div>
        <div className="col-span-6">
          <CeciliaNumber
            placeholder="Desconto de dias"
            value={values.discountedDays}
            onChangeValue={(value) => onChange('discountedDays', value)}
          />
        </div>
        <div className="col-span-6">
          <CeciliaDate
            label="Primeiro dia útil"
            dateValue={values.initialWorkdayMonth}
            onDateChange={(date) => {
              onChange('initialWorkdayMonth', date.toString());
            }}
          />
        </div>
        <div className="col-span-6">
          <CeciliaDate
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
