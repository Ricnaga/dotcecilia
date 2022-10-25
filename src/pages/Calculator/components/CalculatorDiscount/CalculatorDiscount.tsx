import { CeciliaNumber } from '@shared/components';
import { CalculatorDisclosure } from '../CalculatorDisclosure/CalculatorDisclosure';

export type CalculatorDiscountData = {
  missingDays: number;
};

type CalculatorDiscountProps = {
  onChangeDiscount: (key: keyof CalculatorDiscountData, value: number) => void;
  discount: CalculatorDiscountData;
};

export function CalculatorDiscount({
  discount,
  onChangeDiscount,
}: CalculatorDiscountProps) {
  return (
    <CalculatorDisclosure title="Desconto">
      <div className="accordion-content">
        <div className="col-span-4">
          <p className="text-2xl">Dias faltados</p>
          <CeciliaNumber
            placeholder="Dias"
            value={discount.missingDays}
            onChangeValue={(value) => onChangeDiscount('missingDays', value)}
          />
        </div>
      </div>
    </CalculatorDisclosure>
  );
}
