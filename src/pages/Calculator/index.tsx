import {
  CalculatorDiscount,
  CalculatorExtraHour,
  CalculatorTransport,
} from './components';

export function CalculatorPage() {
  return (
    <div className="w-full mt-8">
      <p className="text-6xl font-bold mb-12">Calculadora</p>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4">
          <CalculatorExtraHour />
        </div>
        <div className="col-span-2">
          <CalculatorDiscount />
        </div>
        <div className="col-span-6">
          <p className="text-5xl font-bold mb-4">Total</p>
        </div>
        <div className="col-span-6">
          <CalculatorTransport />
        </div>
      </div>
    </div>
  );
}
