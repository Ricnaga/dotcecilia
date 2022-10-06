import { CeciliaPageHeader, CeciliaTable } from 'shared/components';
import { PaystubCalculator, PaystubTableBody } from './components';
import { usePaystub } from './hooks/usePaystub';

export function PaystubPage() {
  const {
    data: { tableRef, values },
    functions: { handlePrint, onChangeValue, onCheckedValue },
  } = usePaystub();
  return (
    <CeciliaPageHeader title="Holerite">
      <div className="grid grid-cols-12 gap-10">
        <div className="grid grid-cols-12 col-span-7" ref={tableRef}>
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
            onPrint={handlePrint}
            values={values}
            onChange={onChangeValue}
            onChecked={onCheckedValue}
          />
        </div>
      </div>
    </CeciliaPageHeader>
  );
}
