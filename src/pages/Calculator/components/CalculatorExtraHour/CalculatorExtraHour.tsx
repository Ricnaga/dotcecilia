import { CeciliaCheckbox, CeciliaNumber } from '@shared/components';
import { OnlyBooleanKeys } from '@shared/utils/types';
import { CalculatorDisclosure } from '../CalculatorDisclosure/CalculatorDisclosure';

export type CalculatorExtraHourData = {
  salary: number;
  hours: number;
  unsanitary: boolean;
  minimumWage: number;
  agreement: boolean;
  workedMonths: number;
};

type CalculatorExtraHourProps = {
  onChangeExtraHour: (
    key: keyof CalculatorExtraHourData,
    value: number,
  ) => void;
  onCheckedExtraHour: (key: OnlyBooleanKeys<CalculatorExtraHourData>) => void;
  extraHour: CalculatorExtraHourData;
};

export function CalculatorExtraHour({
  onChangeExtraHour,
  onCheckedExtraHour,
  extraHour,
}: CalculatorExtraHourProps) {
  return (
    <CalculatorDisclosure title="Hora extra">
      <div className="accordion-content">
        <div className="col-span-3">
          <CeciliaCheckbox
            label="Insalubridade"
            checked={extraHour.unsanitary}
            onChecked={() => onCheckedExtraHour('unsanitary')}
          />
          <CeciliaNumber
            value={extraHour.salary}
            onChangeValue={(value) => onChangeExtraHour('salary', value)}
            currency
            label="Salário"
            placeholder="R$"
          />
        </div>
        <div className="col-span-3">
          <CeciliaCheckbox
            label="Acerto"
            checked={extraHour.agreement}
            onChecked={() => onCheckedExtraHour('agreement')}
          />
          <CeciliaNumber
            value={extraHour.hours}
            onChangeValue={(value) => onChangeExtraHour('hours', value)}
            currency
            label="Horas"
            placeholder="Horas"
          />
        </div>
        {extraHour.unsanitary && (
          <div className="col-span-3 grid items-end h-full">
            <CeciliaNumber
              value={extraHour.minimumWage}
              onChangeValue={(value) => onChangeExtraHour('minimumWage', value)}
              currency
              label="Valor mínimo"
              placeholder="R$ 1200,00"
            />
          </div>
        )}
        {extraHour.agreement && (
          <div className="col-span-3 grid items-end h-full">
            <CeciliaNumber
              value={extraHour.workedMonths}
              onChangeValue={(value) =>
                onChangeExtraHour('workedMonths', value)
              }
              currency
              label="Meses trabalhados"
              placeholder="Meses"
            />
          </div>
        )}
      </div>
    </CalculatorDisclosure>
  );
}
