import { CeciliaNumber, CeciliaText } from '../../../../shared/components';
import { CalculatorDisclosure } from '../CalculatorDisclosure/CalculatorDisclosure';

export type CalculatorTransportData = {
  transportValue: number;
  firstBusinessDay: Date;
  discountedDays: number;
};

type CalculatorTransportProps = {
  onChangeTransport: (
    key: keyof CalculatorTransportData,
    value: number,
  ) => void;
  transport: CalculatorTransportData;
};

export function CalculatorTransport({
  onChangeTransport,
  transport,
}: CalculatorTransportProps) {
  return (
    <CalculatorDisclosure title="Vale transporte">
      <div className="accordion-content">
        <div className="col-span-4">
          <CeciliaNumber
            placeholder="R$"
            label="Valor"
            value={transport.transportValue}
            onChange={(e) =>
              onChangeTransport('transportValue', e.target.valueAsNumber)
            }
          />
        </div>
        <div className="col-span-4">
          <CeciliaText placeholder="dd/mm/aaaa" label="1º dia útil do mês" />
        </div>
        <div className="col-span-4">
          <CeciliaNumber
            placeholder="Dias"
            label="Dias descontados"
            value={transport.discountedDays}
            onChange={(e) =>
              onChangeTransport('discountedDays', e.target.valueAsNumber)
            }
          />
        </div>
      </div>
    </CalculatorDisclosure>
  );
}
