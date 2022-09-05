import { CeciliaText, CeciliaCheckbox } from '../../../../shared/components';
import { CalculatorDisclosure } from '../CalculatorDisclosure/CalculatorDisclosure';

export function CalculatorExtraHour() {
  return (
    <CalculatorDisclosure title="Hora extra">
      <div className="accordion-content">
        <div className="col-span-3">
          <CeciliaText label="Salário" placeholder="R$" />
        </div>
        <div className="col-span-3">
          <CeciliaText label="Horas" placeholder="Horas" />
        </div>
        <div className="col-span-3">
          <CeciliaCheckbox label="Insalubridade" />
          <CeciliaText label="Salário mínimo" placeholder="R$ 1200,00" />
        </div>
        <div className="col-span-3">
          <CeciliaCheckbox label="Acerto" />
          <CeciliaText label="Meses trabalhados" placeholder="Meses" />
        </div>
      </div>
    </CalculatorDisclosure>
  );
}
