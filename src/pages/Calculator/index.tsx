import { CeciliaPageHeader } from '../../shared/components';
import {
  CalculatorDiscount,
  CalculatorDiscountData,
  CalculatorExtraHour,
  CalculatorExtraHourData,
  CalculatorTotalList,
} from './components';
import { useCalculator } from './hook/useCalculator';

export type CalculatorPageProps = CalculatorExtraHourData &
  CalculatorDiscountData;

export function CalculatorPage() {
  const {
    data: { values },
    functions: { onChangeValue, onCheckedValue },
  } = useCalculator();
  return (
    <CeciliaPageHeader title="Calculadora">
      <div className="grid grid-cols-12 gap-10">
        <div className="grid grid-cols-12 col-span-8">
          <div className="col-span-12">
            <CalculatorExtraHour
              onChangeExtraHour={onChangeValue}
              extraHour={values}
              onCheckedExtraHour={onCheckedValue}
            />
          </div>
          <div className="col-span-12">
            <CalculatorDiscount
              discount={values}
              onChangeDiscount={onChangeValue}
            />
          </div>
        </div>
        <div className="col-span-4">
          <CalculatorTotalList values={values} />
        </div>
      </div>
    </CeciliaPageHeader>
  );
}
