import { CeciliaText } from '../../../../shared/components';
import { CalculatorDisclosure } from '../CalculatorDisclosure/CalculatorDisclosure';

export function CalculatorDiscount() {
  return (
    <CalculatorDisclosure title="Desconto">
      <div className="accordion-content">
        <div className="col-span-4">
          <p className="text-2xl">Dias faltados</p>
          <CeciliaText placeholder="Dias" />
        </div>
      </div>
    </CalculatorDisclosure>
  );
}
