import { CeciliaText } from '../../../../shared/components';

export function CalculatorTransport() {
  return (
    <div>
      <p className="text-4xl font-bold mb-4">Vale transporte</p>
      <div className="grid grid-cols-12 gap-6">
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
    </div>
  );
}
