import { PaystubTableBody } from '../PaystubTableBody/PaystubTableBody';
import { PaystubTableFoot } from '../PaystubTableFoot/PaystubTableFoot';
import { PaystubTableHead } from '../PaystubTableHead/PaystubTableHead';

export function PaystubTable() {
  return (
    <table className="col-span-12 h-1 bg-slate-100 border border-slate-800 text-slate-900">
      <PaystubTableHead />
      <PaystubTableBody />
      <PaystubTableFoot />
    </table>
  );
}
