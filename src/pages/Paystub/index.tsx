import { useState } from 'react';
import { CeciliaPageHeader, CeciliaTable } from 'shared/components';
import {
  PaystubCalculator,
  PaystubCalculatorFields,
  PaystubTableBody,
} from './components';

export function PaystubPage() {
  const [values, setValues] = useState<PaystubCalculatorFields>({
    name: '',
    hasUnsanitary: false,
    unsanitary: 0,
    extraHour: false,
    fullExtra: false,
    hours: 0,
    salary: 0,
    initialWorkdayMonth: new Date().toString(),
    lastWorkdayMonth: new Date().toString(),
    vtr: 0,
    missingDays: 0,
    discountedDays: 0,
  });
  const onChangeValue = (
    key: keyof PaystubCalculatorFields,
    value: number | string,
  ) =>
    setValues((state) =>
      value ? { ...state, [key]: value } : { ...state, [key]: 0 },
    );

  const onCheckedValue = (
    key: keyof Pick<
      PaystubCalculatorFields,
      'hasUnsanitary' | 'extraHour' | 'fullExtra'
    >,
  ) => setValues((state) => ({ ...state, [key]: !state[key] }));

  const generateTemplate = () => console.log('generateTemplate');

  return (
    <CeciliaPageHeader title="Holerite">
      <div className="grid grid-cols-12 gap-10">
        <div className="grid grid-cols-12 col-span-7">
          <CeciliaTable
            headerType="PAGAMENTO"
            name={values.name}
            monthRef={values.initialWorkdayMonth}
          >
            <PaystubTableBody values={values} />
          </CeciliaTable>
        </div>
        <div className="col-span-5">
          <PaystubCalculator
            values={values}
            onChange={onChangeValue}
            onChecked={onCheckedValue}
            generateTemplate={generateTemplate}
          />
        </div>
      </div>
    </CeciliaPageHeader>
  );
}
