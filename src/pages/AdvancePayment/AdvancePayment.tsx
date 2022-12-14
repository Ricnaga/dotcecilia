import { CeciliaPageHeader, CeciliaTable } from '@shared/components';
import { useInputFields } from '@shared/hooks/useInputFields';
import { useReactPrint } from '@shared/hooks/useReactPrint';
import { useMemo } from 'react';
import {
  AdvancePaymentTableBody,
  AdvancePaymentCalculator,
  AdvancePaymentCalculatorFields,
} from './components';

export function AdvancePaymentPage() {
  const {
    data: { printRef },
    functions: { setPrint },
  } = useReactPrint();

  const {
    data: { values },
    functions: { onChangeValue },
  } = useInputFields<AdvancePaymentCalculatorFields>({
    name: '',
    salary: 0,
    refDate: new Date(),
  });

  const bodyMemoized = useMemo(
    () => <AdvancePaymentTableBody salary={values.salary} />,
    [values.salary],
  );

  return (
    <CeciliaPageHeader title="Vale adiantamento">
      <div className="grid grid-cols-12 gap-10">
        <div className="grid grid-cols-12 col-span-7" ref={printRef}>
          <CeciliaTable
            headerType="ADIANTAMENTO"
            name={values.name}
            monthRef={values.refDate}
          >
            {bodyMemoized}
          </CeciliaTable>
        </div>
        <div className="col-span-5">
          <AdvancePaymentCalculator
            onChange={onChangeValue}
            onPrint={setPrint}
            values={values}
          />
        </div>
      </div>
    </CeciliaPageHeader>
  );
}
