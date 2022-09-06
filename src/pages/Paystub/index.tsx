import { CeciliaPageHeader } from '../../shared/components';
import { PaystubCalculator, PaystubTable } from './components';

export function PaystubPage() {
  return (
    <CeciliaPageHeader title="Holerite">
      <div className="grid grid-cols-12 gap-10">
        <div className="grid grid-cols-12 col-span-7">
          <PaystubTable />
        </div>
        <div className="col-span-5">
          <PaystubCalculator />
        </div>
      </div>
    </CeciliaPageHeader>
  );
}
