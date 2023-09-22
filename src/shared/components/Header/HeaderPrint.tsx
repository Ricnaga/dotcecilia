import { Button } from '../Button/Button';

type HeaderPrintProps = {
  onPrint: () => void;
};

export function HeaderPrint({ onPrint }: HeaderPrintProps) {
  return (
    <div className="grid grid-cols-2 items-center">
      <p className="text-4xl font-bold leading-9">Cálculos</p>
      <Button className="justify-self-end" onClick={onPrint} variants="smoosh">
        Imprimir
      </Button>
    </div>
  );
}
