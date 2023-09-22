import { PageContainer, PaymentTable } from '@shared/components';
import { PaystubCalculator, PaystubTableBody } from './components';
import { usePaystub } from './hooks/usePaystub';

export function Paystub() {
  const {
    data: { printRef, values },
    functions: { setPrint, onChangeValue, onCheckedValue },
  } = usePaystub();
  return (
    <PageContainer title="Holerite">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2 grid grid-cols-12 " ref={printRef}>
          <PaymentTable
            headerType="PAGAMENTO"
            name={values.name}
            monthRef={values.initialWorkdayMonth}
          >
            <PaystubTableBody values={values} />
          </PaymentTable>
        </div>
        <div>
          <PaystubCalculator
            onPrint={setPrint}
            values={values}
            onChange={onChangeValue}
            onChecked={onCheckedValue}
          />
        </div>
      </div>
    </PageContainer>
  );
}
