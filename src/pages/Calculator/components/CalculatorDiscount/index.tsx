import { CeciliaText } from '../../../../shared/components';

export function CalculatorDiscount() {
  return (
    <div>
      <p className="text-4xl font-bold mb-4">Desconto</p>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <p className="text-2xl">Dias faltados</p>
          <CeciliaText placeholder="Dias" />
        </div>
      </div>
    </div>
  );
}
