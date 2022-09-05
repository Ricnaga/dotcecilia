import { CeciliaText } from '../../../../shared/components';
import { CalculatorDisclosure } from '../CalculatorDisclosure/CalculatorDisclosure';

export function CalculatorTransport() {
  return (
    <CalculatorDisclosure title="Vale transporte">
      <div className="accordion-content">
        <div className="col-span-4">
          <CeciliaText placeholder="R$" label="Valor" />
        </div>
        <div className="col-span-4">
          <CeciliaText placeholder="dd/mm/aaaa" label="1º dia útil do mês" />
        </div>
        <div className="col-span-4">
          <CeciliaText placeholder="Dias" label="Dias descontados" />
        </div>
      </div>
    </CalculatorDisclosure>
  );
}
