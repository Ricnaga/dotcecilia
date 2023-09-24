import {
  PageContainer,
  PaymentContainer,
  PaymentTable,
} from '@shared/components';
import { useInputFields } from '@shared/hooks/useInputFields';
import { useReactPrint } from '@shared/hooks/useReactPrint';
import {
  AgreementCalculator,
  AgreementCalculatorFields,
  AgreementTableBody,
} from './components';

export function Agreement() {
  const {
    data: { printRef },
    functions: { setPrint },
  } = useReactPrint();
  const {
    data: { values },
    functions: { onChangeValue },
  } = useInputFields<AgreementCalculatorFields>({
    name: '',
    salary: 0,
    startDate: new Date(),
    discount: 0,
    endDate: new Date(),
  });
  return (
    <PageContainer title="Acerto">
      <PaymentContainer
        calculator={
          <AgreementCalculator
            values={values}
            onChange={onChangeValue}
            onPrint={setPrint}
          />
        }
        printRef={printRef}
      >
        <PaymentTable
          headerType="ACERTO"
          name={values.name}
          startDate={values.startDate}
          endDate={values.endDate}
        >
          <AgreementTableBody values={values} />
        </PaymentTable>
      </PaymentContainer>
    </PageContainer>
  );
}
