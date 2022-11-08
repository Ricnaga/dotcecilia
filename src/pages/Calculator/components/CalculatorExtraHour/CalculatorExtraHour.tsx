import { CeciliaCheckbox, CeciliaNumber } from '@shared/components';
import { OnlyBooleanKeys } from '@shared/utils/types';
import { useMemo } from 'react';
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
  const unsanitaryCheckBox = useMemo(
    () => (
      <CeciliaCheckbox
        label="Insalubridade"
        checked={extraHour.unsanitary}
        onChecked={() => onCheckedExtraHour('unsanitary')}
      />
    ),
    [extraHour.unsanitary],
  );

  const unsanitaryButton = useMemo(
    () =>
      extraHour.unsanitary && (
        <div className="col-span-3 grid items-end h-full">
          <CeciliaNumber
            value={extraHour.minimumWage}
            onChangeValue={(value) => onChangeExtraHour('minimumWage', value)}
            currency
            label="Valor mínimo"
            placeholder="R$ 1200,00"
          />
        </div>
      ),
    [extraHour.unsanitary, extraHour.minimumWage],
  );
  const agreementButton = useMemo(
    () =>
      extraHour.agreement && (
        <div className="col-span-3 grid items-end h-full">
          <CeciliaNumber
            value={extraHour.workedMonths}
            onChangeValue={(value) => onChangeExtraHour('workedMonths', value)}
            currency
            label="Meses trabalhados"
            placeholder="Meses"
          />
        </div>
      ),
    [extraHour.agreement, extraHour.workedMonths],
  );

  const salaryButton = useMemo(
    () => (
      <CeciliaNumber
        value={extraHour.salary}
        onChangeValue={(value) => onChangeExtraHour('salary', value)}
        currency
        label="Salário"
        placeholder="R$"
      />
    ),
    [extraHour.salary],
  );
  const agreementCheckBox = useMemo(
    () => (
      <CeciliaCheckbox
        label="Acerto"
        checked={extraHour.agreement}
        onChecked={() => onCheckedExtraHour('agreement')}
      />
    ),
    [extraHour.agreement],
  );

  const hoursButton = useMemo(
    () => (
      <CeciliaNumber
        value={extraHour.hours}
        onChangeValue={(value) => onChangeExtraHour('hours', value)}
        currency
        label="Horas"
        placeholder="Horas"
      />
    ),
    [extraHour.hours],
  );
  return (
    <CalculatorDisclosure title="Hora extra">
      <div className="accordion-content">
        <div className="col-span-3">
          {unsanitaryCheckBox}
          {salaryButton}
        </div>
        <div className="col-span-3">
          {agreementCheckBox}
          {hoursButton}
        </div>
        {unsanitaryButton}
        {agreementButton}
      </div>
    </CalculatorDisclosure>
  );
}
