import { CeciliaPageHeader } from '../../shared/components';
import {
  CalculatorDiscount,
  CalculatorExtraHour,
  CalculatorTransport,
} from './components';

export function CalculatorPage() {
  return (
    <CeciliaPageHeader title="Calculadora">
      <div className="grid grid-cols-12 gap-10">
        <div className="grid grid-cols-12 col-span-7">
          <div className="col-span-12 mb-4">
            <CalculatorExtraHour />
          </div>
          <div className="col-span-12 mb-4">
            <CalculatorDiscount />
          </div>
          <div className="col-span-12 mb-4">
            <CalculatorTransport />
          </div>
        </div>
        <div className="col-span-5">
          <p className="text-4xl text-center font-bold mb-4">Total</p>
        </div>
      </div>
    </CeciliaPageHeader>
  );
}
