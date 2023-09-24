import {
  PageContainer,
  PaymentContainer,
  PaymentTable,
} from '@shared/components';
import { useInputFields } from '@shared/hooks/useInputFields';
import { useReactPrint } from '@shared/hooks/useReactPrint';
import { useMemo } from 'react';
import {
  AdvancePaymentTableBody,
  AdvancePaymentCalculator,
  AdvancePaymentCalculatorFields,
} from './components';

export function AdvancePayment() {
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
    <PageContainer title="Vale adiantamento">
      <PaymentContainer
        calculator={
          <AdvancePaymentCalculator
            onChange={onChangeValue}
            onPrint={setPrint}
            values={values}
          />
        }
        printRef={printRef}
      >
        <PaymentTable
          headerType="ADIANTAMENTO"
          name={values.name}
          monthRef={values.refDate}
        >
          {bodyMemoized}
        </PaymentTable>
      </PaymentContainer>
    </PageContainer>
  );
}
