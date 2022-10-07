import { CeciliaPageHeader, CeciliaTable } from '@shared/components';
import { AgreementTableBody } from './components';

export function AgreementPage() {
  return (
    <CeciliaPageHeader title="Acerto">
      <div className="grid grid-cols-12 gap-10">
        <div className="grid grid-cols-12 col-span-7">
          <CeciliaTable headerType="ACERTO">
            <AgreementTableBody />
          </CeciliaTable>
        </div>
        <div className="col-span-5">
          <h1>oi</h1>
        </div>
      </div>
    </CeciliaPageHeader>
  );
}
