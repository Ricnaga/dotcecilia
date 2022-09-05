import {
  CalculatorDiscount,
  CalculatorExtraHour,
  CalculatorTransport,
} from './components';

export function CalculatorPage() {
  return (
    <div className="w-full mt-8">
      <p className="text-5xl font-bold mb-12">Calculadora</p>

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
    </div>
  );
}
