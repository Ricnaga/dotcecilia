import { CeciliaButton } from '../CeciliaButton/CeciliaButton';

type CeciliaHeaderPrintProps = Record<'onPrint', () => void>;

export function CeciliaHeaderPrint({ onPrint }: CeciliaHeaderPrintProps) {
  return (
    <div className="grid grid-cols-12">
      <p className="text-4xl text-left font-bold mb-4 col-span-6">Cálculos</p>
      <CeciliaButton
        className="col-start-9 col-end-13 mb-4"
        title="Imprimir"
        onClick={onPrint}
      />
    </div>
  );
}
