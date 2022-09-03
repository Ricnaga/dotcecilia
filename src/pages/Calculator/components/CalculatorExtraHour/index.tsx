import { CeciliaText, CeciliaCheckbox } from '../../../../shared/components';

export function CalculatorExtraHour() {
  return (
    <div>
      <p className="text-4xl font-bold mb-4">Hora extra</p>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6">
          <CeciliaText label="Salário" placeholder="R$" />
        </div>
        <div className="col-span-6">
          <CeciliaText label="Horas" placeholder="Horas" />
        </div>
        <div className="col-span-6">
          <CeciliaCheckbox label="Insalubridade" />
          <CeciliaText label="Salário mínimo" placeholder="R$ 1200,00" />
        </div>
        <div className="col-span-6">
          <CeciliaCheckbox label="Acerto" />
          <CeciliaText label="Meses trabalhados" placeholder="Meses" />
        </div>
      </div>
    </div>
  );
}
