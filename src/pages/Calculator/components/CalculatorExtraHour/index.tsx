import { CeciliaCheckbox, CeciliaNumber } from '@shared/components';
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
  onCheckedExtraHour: (
    key: keyof Pick<CalculatorExtraHourData, 'unsanitary' | 'agreement'>,
  ) => void;
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
            onChange={(e) =>
              onChangeExtraHour('salary', e.target.valueAsNumber)
            }
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
            onChange={(e) => onChangeExtraHour('hours', e.target.valueAsNumber)}
            currency
            label="Horas"
            placeholder="Horas"
          />
        </div>
        {extraHour.unsanitary && (
          <div className="col-span-3 grid items-end h-full">
            <CeciliaNumber
              value={extraHour.minimumWage}
              onChange={(e) =>
                onChangeExtraHour('minimumWage', e.target.valueAsNumber)
              }
              currency
              label="Salário mínimo"
              placeholder="R$ 1200,00"
            />
          </div>
        )}
        {extraHour.agreement && (
          <div className="col-span-3 grid items-end h-full">
            <CeciliaNumber
              value={extraHour.workedMonths}
              onChange={(e) =>
                onChangeExtraHour('workedMonths', e.target.valueAsNumber)
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
