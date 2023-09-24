import {
  PageContainer,
  PaymentContainer,
  PaymentTable,
} from '@shared/components';
import { PaystubCalculator, PaystubTableBody } from './components';
import { usePaystub } from './hooks/usePaystub';

export function Paystub() {
  const {
    data: { printRef, values },
    functions: { setPrint, onChangeValue, onCheckedValue },
  } = usePaystub();
  return (
    <PageContainer title="Holerite">
      <PaymentContainer
        calculator={
          <PaystubCalculator
            onPrint={setPrint}
            values={values}
            onChange={onChangeValue}
            onChecked={onCheckedValue}
          />
        }
        printRef={printRef}
      >
        <PaymentTable
          headerType="PAGAMENTO"
          name={values.name}
          monthRef={values.initialWorkdayMonth}
        >
          <PaystubTableBody values={values} />
        </PaymentTable>
      </PaymentContainer>
    </PageContainer>
  );
}
