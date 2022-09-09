import { CeciliaPageHeader, CeciliaTable } from '../../shared/components';
import { PaystubCalculator, PaystubTableBody } from './components';

export function PaystubPage() {
  return (
    <CeciliaPageHeader title="Holerite">
      <div className="grid grid-cols-12 gap-10">
        <div className="grid grid-cols-12 col-span-7">
          <CeciliaTable headerType="PAGAMENTO">
            <PaystubTableBody />
          </CeciliaTable>
        </div>
        <div className="col-span-5">
          <PaystubCalculator />
        </div>
      </div>
    </CeciliaPageHeader>
  );
}
