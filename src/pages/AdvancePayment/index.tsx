import { CeciliaPageHeader, CeciliaTable } from '../../shared/components';
import { AdvancePaymentTableBody } from './components';

export function AdvancePaymentPage() {
  return (
    <CeciliaPageHeader title="Vale adiantamento">
      <div className="grid grid-cols-12 gap-10">
        <div className="grid grid-cols-12 col-span-7">
          <CeciliaTable headerType="ADIANTAMENTO">
            <AdvancePaymentTableBody />
          </CeciliaTable>
        </div>
        <div className="col-span-5">
          <h1>oi</h1>
        </div>
      </div>
    </CeciliaPageHeader>
  );
}
