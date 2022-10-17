import { CeciliaPageHeader, CeciliaTable } from '@shared/components';
import { useInputFields } from '@shared/hooks/useInputFields';
import { useReactPrint } from '@shared/hooks/useReactPrint';
import {
  AgreementCalculator,
  AgreementCalculatorFields,
  AgreementTableBody,
} from './components';

export function AgreementPage() {
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
    <CeciliaPageHeader title="Acerto">
      <div className="grid grid-cols-12 gap-10">
        <div className="grid grid-cols-12 col-span-7" ref={printRef}>
          <CeciliaTable
            headerType="ACERTO"
            name={values.name}
            startDate={values.startDate}
            endDate={values.endDate}
          >
            <AgreementTableBody values={values} />
          </CeciliaTable>
        </div>
        <div className="col-span-5">
          <AgreementCalculator
            values={values}
            onChange={onChangeValue}
            onPrint={setPrint}
          />
        </div>
      </div>
    </CeciliaPageHeader>
  );
}
