import { PageContainer, PaymentTable } from '@shared/components';
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
      <div className="grid grid-cols-3 gap-10">
        <div className="grid grid-cols-12 col-span-2" ref={printRef}>
          <PaymentTable
            headerType="ACERTO"
            name={values.name}
            startDate={values.startDate}
            endDate={values.endDate}
          >
            <AgreementTableBody values={values} />
          </PaymentTable>
        </div>
        <div>
          <AgreementCalculator
            values={values}
            onChange={onChangeValue}
            onPrint={setPrint}
          />
        </div>
      </div>
    </PageContainer>
  );
}
